// data/folders.ts
export interface MenuItems {
    id: number;
    name: string;
    parentId: number | null;
  }

  export const menus: MenuItems[] = [
    { id: 1, name: "Home", parentId: null },
    { id: 2, name: "Products", parentId: null },
    { id: 3, name: "Electronics", parentId: 2 },
    { id: 4, name: "Laptops", parentId: 3 },
    { id: 5, name: "Phones", parentId: 3 },
    { id: 6, name: "About Us", parentId: null }
  ];