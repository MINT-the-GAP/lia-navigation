import { initContext, ROOT } from "./context";
import { enhance, cleanup, syncActive } from "./enhance";
import { findTOC, isOverviewRoot, killSearchAnywhere, findOverviewControl, pinOverviewBottom, hideOriginalNavigation } from "./toc";

interface Registry {
  installed?: boolean;
  kick?: () => void;
  stop?: () => void;
}

(function () {
  // =========================================================
  // Root/Doc (iframe-safe)
  // =========================================================
  function getRootWindowSafe(): Window {
    let w: Window = window;
    try {
      while (w.parent && w.parent !== w) w = w.parent;
    } catch (e) {
      // Cross-origin parent: stop walking up and use the last window we could read.
    }
    return w;
  }

  let root: Window = getRootWindowSafe();
  let rootDoc: Document | null = null;
  try {
    rootDoc = root.document;
  } catch (e) {
    root = window;
    rootDoc = document;
  }
  initContext(root, rootDoc);

  // =========================================================
  // Run-once Registry (import-safe)
  // =========================================================
  const REGKEY = "__LIA_BM_TOC5_V63__";
  const host = ROOT as Window & Record<string, Registry | undefined>;

  const existing = host[REGKEY];
  if (existing && existing.installed) {
    try {
      existing.kick && existing.kick();
    } catch (e) {
      // A stale registry from an earlier evaluation may hold a dead kick(); ignore it.
    }
    return;
  }

  const registry: Registry = host[REGKEY] || {};
  host[REGKEY] = registry;
  registry.installed = true;

  // =========================================================
  // Boot
  // =========================================================
  const teardown = new AbortController();

  let tries = 0;
  const bootTimer = ROOT.setInterval(() => {
    tries++;
    const ok = enhance();
    if (ok || tries > 160) ROOT.clearInterval(bootTimer);
  }, 150);

  const watchTimer = ROOT.setInterval(() => {
    const toc = findTOC();
    if (!toc) return;

    if (isOverviewRoot()) {
      cleanup(toc);
      return;
    }

    killSearchAnywhere(toc);

    const box = toc.querySelector("#lia-bm-toc5");
    if (!box) {
      enhance();
    } else {
      const toolbar = toc.querySelector<HTMLElement>(".lia-toolbar");
      const overviewBtn = findOverviewControl(toc);
      const customOverviewBtn = box.querySelector(".bm-overview-button");
      if (!customOverviewBtn) {
        enhance();
        return;
      }

      const overviewChild = pinOverviewBottom(toc, overviewBtn);
      hideOriginalNavigation(toc, toolbar, box as HTMLElement, overviewChild);
      toc.classList.add("lia-bm-toc5-active");
      syncActive(toc);
    }
  }, 700);

  try {
    ROOT.addEventListener(
      "hashchange",
      () => {
        const toc = findTOC();
        if (toc) syncActive(toc);
      },
      { capture: true, signal: teardown.signal }
    );
  } catch (e) {
    // Older hosts may reject the options object; the plugin still works via the polling watchdog.
  }

  // Expose for kick
  registry.kick = function () {
    try {
      const toc = findTOC();
      if (toc && !isOverviewRoot()) enhance();
      if (toc && isOverviewRoot()) cleanup(toc);
    } catch (e) {
      // The TOC may be mid-rerender; the watchdog retries on the next tick.
    }
  };

  // Release every timer and listener this instance owns.
  registry.stop = function () {
    ROOT.clearInterval(bootTimer);
    ROOT.clearInterval(watchTimer);
    teardown.abort();
    registry.installed = false;
  };
})();
