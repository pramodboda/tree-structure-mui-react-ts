import { useState } from "react";
import "./App.css";

import { FolderTreeView } from "./components/FolderTreeView";

function App() {
  return (
    <>
      <div>
        <h2 style={{ padding: "16px" }}>📁 MUI Folder Tree</h2>
        <FolderTreeView />
      </div>
    </>
  );
}

export default App;
