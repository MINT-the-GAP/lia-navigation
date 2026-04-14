export interface TreeNode {
  key: string;
  hash: string;
  text: string;
  level: number;
  indent: number;
  children?: TreeNode[];
}

export function getLevelFromDOM(a: HTMLElement, toc: HTMLElement): number {
  const aria = a.getAttribute("aria-level");
  if (aria && !isNaN(parseInt(aria, 10))) return parseInt(aria, 10);

  const li = a.closest("li");
  if (li) {
    let depth = 1;
    let n: HTMLElement | null = li.parentElement;
    while (n && n !== toc) {
      if (n.tagName === "UL") depth++;
      n = n.parentElement;
    }
    return Math.max(1, Math.min(6, depth));
  }
  return 0;
}

export function getIndentPx(a: HTMLElement): number {
  try {
    const cs =
      a.ownerDocument && a.ownerDocument.defaultView
        ? a.ownerDocument.defaultView.getComputedStyle(a)
        : getComputedStyle(a);
    const pl = parseFloat(cs.paddingLeft || "0") || 0;
    const ml = parseFloat(cs.marginLeft || "0") || 0;
    const ti = parseFloat(cs.textIndent || "0") || 0;
    return Math.max(pl, ml, ti);
  } catch (e) {
    return 0;
  }
}

export function mapIndentLevels(nodes: TreeNode[]): void {
  const indents = nodes.map((n) => n.indent).filter((x) => x > 0);
  const uniq = Array.from(new Set(indents.map((x) => Math.round(x)))).sort(
    (a, b) => a - b
  );

  if (!uniq.length) {
    nodes.forEach((n) => {
      if (n.level === 0) n.level = 1;
    });
    return;
  }

  nodes.forEach((n) => {
    if (n.level !== 0) return;
    const v = Math.round(n.indent);
    let idx = uniq.indexOf(v);
    if (idx < 0) idx = 0;
    n.level = Math.max(1, Math.min(6, idx + 1));
  });
}

export function buildTree(items: TreeNode[]): TreeNode[] {
  const root: TreeNode = {
    key: "",
    hash: "",
    text: "",
    level: 0,
    indent: 0,
    children: [],
  };
  const stack: { node: TreeNode; level: number }[] = [
    { node: root, level: 0 },
  ];
  for (const it of items) {
    while (stack.length && stack[stack.length - 1].level >= it.level)
      stack.pop();
    const parent = stack[stack.length - 1].node;
    const node: TreeNode = { ...it, children: [] };
    parent.children!.push(node);
    stack.push({ node, level: it.level });
  }
  return root.children!;
}

export function collectForceOpen(tree: TreeNode[], activeHash: string): Set<string> {
  const force = new Set<string>();
  function walk(list: TreeNode[], parents: TreeNode[]): boolean {
    for (const n of list) {
      if (n.hash === activeHash) {
        parents.forEach((p) => force.add(p.key));
        return true;
      }
      if (n.children && n.children.length) {
        if (walk(n.children, parents.concat(n))) return true;
      }
    }
    return false;
  }
  walk(tree, []);
  return force;
}
