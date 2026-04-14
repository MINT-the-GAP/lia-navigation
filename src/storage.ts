import { ROOT } from "./context";

export function storageKey(): string {
  try {
    const href = ROOT.location && ROOT.location.href ? ROOT.location.href : "";
    return "__LIA_BM_TOC5_STATE__::" + href.split("#")[0];
  } catch (e) {
    return "__LIA_BM_TOC5_STATE__";
  }
}

export function loadState(): Record<string, number> {
  try {
    const raw = ROOT.localStorage.getItem(storageKey());
    const obj = raw ? JSON.parse(raw) : {};
    return obj && typeof obj === "object" ? obj : {};
  } catch (e) {
    return {};
  }
}

export function saveState(s: Record<string, number>): void {
  try {
    ROOT.localStorage.setItem(storageKey(), JSON.stringify(s || {}));
  } catch (e) {}
}
