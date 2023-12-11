import { UserType } from "@/types";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_HOST
    : process.env.NEXT_PUBLIC_PROD_HOST;
export const getUserData = async (email: string): Promise<UserType> => {
  try {
    const data = await fetch(`${baseUrl}/api/user?email=${email}`);
    const user: UserType = await data.json();
    return user;
  } catch (error) {
    throw new Error(`Error when getting the user ==> ${error}`);
  }
};
