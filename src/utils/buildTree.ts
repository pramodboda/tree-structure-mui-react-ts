// utils/buildTree.ts
import type { FolderItem } from '../data/folders';

export interface TreeNode extends FolderItem {
  children: TreeNode[];
}

export function buildTree(items: FolderItem[]): TreeNode[] {
  const map = new Map<number, TreeNode>();
  const roots: TreeNode[] = [];

  items.forEach(item => {
    map.set(item.id, { ...item, children: [] });
  });

  items.forEach(item => {
    const node = map.get(item.id)!;
    if (item.parentId === null) {
      roots.push(node);
    } else {
      map.get(item.parentId)?.children.push(node);
    }
  });

  return roots;
}
