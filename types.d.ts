export type ProductType = {
  id?: string;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  newProduct?: boolean | string;
};
