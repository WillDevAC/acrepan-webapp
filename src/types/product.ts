export interface ProductList {
  products: {
    id: string;
    title: string;
    description: string;
    priceVarejo: number;
    priceAtacado: number;
    categoryId: string;
    isActive: boolean;
    imgId: string;
    isEmphasis: boolean;
    createdAt: string;
    updatedAt: string;
    category: {
      id: string;
      createdAt: string;
      title: string;
      updatedAt: string;
    };
    img: {
      id: string;
      key: string;
      url: string;
      createdAt: string;
      updatedAt: string;
    };
  }[];
  count: number;
}
