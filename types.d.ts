export type ProductType = {
  _id?: string;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  newProduct?: boolean;
  quantity?: number;
};
export type FeedType = {
  _id?: string;
  msg: string;
  email: string;
};
export type ParamsType = {
  params: { productId: string };
};
export type UserType = {
  _id?: string;
  email?: string | null;
  image?: string | null;
  name?: string | null;
  password?: string | null;
  cart?: ProductType[];
};
