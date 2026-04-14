// Shared mutable context initialized once by the IIFE in index.ts
export let ROOT: Window = window;
export let ROOT_DOC: Document | null = document;

export function initContext(root: Window, rootDoc: Document | null): void {
  ROOT = root;
  ROOT_DOC = rootDoc;
}
