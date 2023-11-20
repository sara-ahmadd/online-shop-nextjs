export type ProductType = {
  _id?: string;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  newProduct?: boolean;
};
export type FeedType = {
  _id?: string;
  msg: string;
  email: string;
};
export type ParamsType = {
  params: { productId: string };
};
