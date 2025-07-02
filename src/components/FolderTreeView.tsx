// components/FolderTreeView.tsx
import React from 'react';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import { Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import { folders } from '../data/folders';
// import { buildTree, TreeNode } from '../utils/buildTree';
import { buildTree } from '../utils/buildTree';
import type { TreeNode } from '../utils/buildTree';

const renderTree = (node: TreeNode) => (
  <TreeItem
    key={node.id}
    itemId = {String(node.id)}
    // nodeId={String(node.id)}
    label={
      <Box display="flex" alignItems="center">
        {node.children.length > 0 ? (
          <FolderIcon fontSize="small" sx={{ mr: 1 }} />
        ) : (
          <InsertDriveFileIcon fontSize="small" sx={{ mr: 1 }} />
        )}
        {node.name}
      </Box>
    }
  >
    {node.children.map(child => renderTree(child))}
  </TreeItem>
);

export const FolderTreeView: React.FC = () => {
  const treeData = buildTree(folders);

  return (
    <Box sx={{ p: 2, maxWidth: 400 }}>
      <SimpleTreeView
        aria-label="folder-tree"
      >
        {treeData.map(renderTree)}
      </SimpleTreeView>
    </Box>
  );
};
