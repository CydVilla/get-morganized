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

declare global {
  interface Window {
    StellaFrame?: { scan?: () => void };
  }
}

export function ensureStellaFrame(): void {
  if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) {
    // Already on the page. If it has run, re-scan so placeholders mounted
    // since its initial pass get picked up; if it is still loading, its own
    // scan will find them when it executes.
    window.StellaFrame?.scan?.();
    return;
  }
  const script = document.createElement('script');
  script.src = WIDGET_SRC;
  script.async = true;
  document.body.appendChild(script);
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
 * Returns the ref to attach to the placeholder element.
 */
export function useStellaFrameWidget(
  widgetId: string,
  kind: string,
  rootMargin = '400px'
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
