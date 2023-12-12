import { UserType } from "@/types";
import { baseUrl } from "../baseURL";

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
