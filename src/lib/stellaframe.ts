/**
 * Loads the StellaFrame embed loader (widget.js) once for the whole page, no
 * matter how many widget components mount. Each embed snippet normally carries
 * its own script tag; injecting it per component would execute the loader once
 * per widget for no benefit.
 *
 * The script is deliberately never removed on unmount: removing a <script>
 * element doesn't undo its execution, and the loader is shared by every
 * widget on the page.
 */

import { useEffect, useRef } from 'react';

const WIDGET_SRC = 'https://app.stellaframe.com/widget.js';
const RETRY_DELAY_MS = 3000;
const MAX_ATTEMPTS = 3;

declare global {
  interface Window {
    StellaFrame?: { scan?: () => void };
  }
}

let attempts = 0;

export function ensureStellaFrame(): void {
  if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) {
    // Already on the page. If it has run, re-scan so placeholders mounted
    // since its initial pass get picked up; if it is still loading, its own
    // scan will find them when it executes.
    window.StellaFrame?.scan?.();
    return;
  }
  if (attempts >= MAX_ATTEMPTS) return;
  attempts += 1;

  const script = document.createElement('script');
  script.src = WIDGET_SRC;
  script.async = true;
  script.onerror = () => {
    // A failed load leaves the tag in the DOM, where the check above reads it
    // as "the loader is already here" — every later call would no-op and no
    // widget would ever mount again. Drop it so the next call gets a fresh
    // attempt. This matters more now that the first fetch happens at idle,
    // early in the page's life and far from anyone watching.
    script.remove();
    prewarmScheduled = false;
    // A widget that already activated has nothing left to retry on its behalf:
    // the observer that fired for it was disconnected. Retry for it.
    if (document.querySelector('[data-stellaframe]:not([data-rw-ready])')) {
      window.setTimeout(ensureStellaFrame, RETRY_DELAY_MS);
    }
  };
  document.body.appendChild(script);
}

let prewarmScheduled = false;

/**
 * Fetches the loader during idle time, well before any widget needs it.
 *
 * Mounting a widget costs two serial round trips: widget.js, and then the
 * renderer + widget data (which do run in parallel, via data-sf-kind). Against
 * an origin that isn't edge-cached that measured ~1.1s, all of it landing
 * after the widget scrolled into range.
 *
 * The loader is only ~27 KB and kind-agnostic, so it is worth fetching early —
 * it is the *media* that is expensive to pull eagerly, not this. Running it
 * early is inert: its scan() looks for `[data-stellaframe]`, and the hook below
 * withholds that attribute until the viewport, so nothing mounts and no widget
 * data or images are requested. It just means the first round trip is already
 * paid for by the time someone scrolls down.
 */
export function prewarmStellaFrame(): void {
  if (prewarmScheduled || typeof window === 'undefined') return;
  prewarmScheduled = true;

  // Called on `window`, not detached — some engines reject a Window method
  // invoked without its receiver.
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(() => ensureStellaFrame(), { timeout: 3000 });
  } else {
    // Safari has no requestIdleCallback — approximate it, staying clear of the
    // initial render.
    window.setTimeout(() => ensureStellaFrame(), 1500);
  }
}

/**
 * Defers a widget until it is close to the viewport.
 *
 * Both widgets sit well below the fold, and the Instagram one alone pulls
 * ~2.8 MB of media. The loader has no lazy mode of its own: its scan() mounts
 * *every* `[data-stellaframe]` placeholder on the page at once, so simply
 * delaying the script would still mount both widgets as soon as either one
 * needed it. Instead we render the placeholder without the attribute the
 * scanner looks for, and only stamp it on once the element nears the viewport.
 *
 * rootMargin is the runway: mounting still costs a round trip for the renderer
 * and the widget data even with the loader prewarmed, so activation needs to
 * happen far enough ahead of the viewport to cover it. 800px is roughly a
 * desktop viewport of scrolling.
 *
 * Returns the ref to attach to the placeholder element.
 */
export function useStellaFrameWidget(
  widgetId: string,
  kind: string,
  rootMargin = '800px'
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get the loader on the page during idle time so the viewport path only
    // pays for the renderer and the data, not the loader as well.
    prewarmStellaFrame();

    const el = ref.current;
    if (!el) return;

    // Already activated (e.g. an effect re-run) — the loader owns it now.
    if (el.dataset.stellaframe) return;

    const activate = () => {
      if (el.dataset.stellaframe) return;
      // data-sf-kind lets the loader fetch the renderer alongside the widget
      // data instead of waiting to learn the kind from the response.
      el.dataset.sfKind = kind;
      el.dataset.stellaframe = widgetId;
      ensureStellaFrame();
    };

    if (typeof IntersectionObserver === 'undefined') {
      activate();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          activate();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [widgetId, kind, rootMargin]);

  return ref;
}
