import { UserType } from "@/types";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_HOST
    : process.env.NEXT_PUBLIC_PROD_HOST;
export const deleteUserData = async (id: string): Promise<UserType> => {
  const data = await fetch(`${baseUrl}/api/user?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const user: UserType = await data.json();
  return user;
};
