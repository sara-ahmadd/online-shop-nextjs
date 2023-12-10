export type ProductType = {
  _id?: string;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  newProduct?: boolean;
  quantity?: number;
  sale?: number | null;
};
export type FeedType = {
  _id?: string;
  msg: string;
  email: string;
  img: string;
};
export type ParamsType = {
  params: { productId: string };
};
export type UserType = {
  _id?: string;
  email: string;
  image?: string;
  name?: string;
  password?: string;
  role?: string;
  cart?: ProductType[];
};
export enum USER_ROLE {
  USER,
  ADMIN,
}
