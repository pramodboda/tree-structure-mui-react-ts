// data/folders.ts
export interface Employees {
    id: number;
    name: string;
    parentId: number | null;
  }

  export const companyOrgChart: Employees[] = [
    { id: 1, name: "CEO", parentId: null },
    { id: 2, name: "CTO", parentId: 1 },
    { id: 3, name: "CFO", parentId: 1 },
    { id: 4, name: "Dev Manager", parentId: 2 },
    { id: 5, name: "Developer", parentId: 4 },
    { id: 6, name: "Finance Manager", parentId: 3 }
  ];