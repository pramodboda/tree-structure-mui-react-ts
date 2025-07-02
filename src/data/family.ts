// data/folders.ts
export interface FamilyMembers {
    id: number;
    name: string;
    parentId: number | null;
  }

  export const family: FamilyMembers[] = [
    { id: 1, name: "Grandfather", parentId: null },
    { id: 2, name: "Father", parentId: 1 },
    { id: 3, name: "Uncle", parentId: 1 },
    { id: 4, name: "You", parentId: 2 },
    { id: 5, name: "Cousin", parentId: 3 }
  ];