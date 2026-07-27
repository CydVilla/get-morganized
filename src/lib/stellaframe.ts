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
