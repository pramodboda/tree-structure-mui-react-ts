// components/FolderTreeView.tsx
import React from "react";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import { folders } from "../data/folders";
import { buildTree } from "../utils/buildTree";

type FolderNode = {
  id: number;
  name: string;
  parentId: number | null;
  children: FolderNode[];
};

const renderTree = (node: FolderNode) => (
  <TreeItem
    key={node.id}
    nodeId={node.id.toString()}
    label={
      <>
        {node.children.length > 0 ? (
          <FolderIcon fontSize="small" sx={{ mr: 1 }} />
        ) : (
          <InsertDriveFileIcon fontSize="small" sx={{ mr: 1 }} />
        )}
        {node.name}
      </>
    }
  >
    {node.children.map(child => renderTree(child))}
  </TreeItem>
);

export const FolderTreeView: React.FC = () => {
  const tree = buildTree(folders);

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto", p: 2 }}
    >
      {tree.map(renderTree)}
    </TreeView>
  );
};
