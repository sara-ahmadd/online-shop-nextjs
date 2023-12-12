export const baseUrl =
  process.env.NODE_ENV === "development"
    ? (process.env.NEXT_PUBLIC_DEV_HOST as string)
    : (process.env.NEXT_PUBLIC_PROD_HOST as string);
