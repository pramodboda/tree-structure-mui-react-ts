// data/folders.ts
export interface FolderItem {
    id: number;
    name: string;
    parentId: number | null;
  }
  
  export const folders: FolderItem[] = [
    { id: 1, name: 'Root', parentId: null },
    { id: 2, name: 'Documents', parentId: 1 },
    { id: 3, name: 'Projects', parentId: 2 },
    { id: 4, name: 'Photos', parentId: 1 },
    { id: 5, name: 'Vacations', parentId: 4 },
    { id: 6, name: '2025', parentId: 5 }
  ];
  