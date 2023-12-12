import { UserType } from "@/types";
import { baseUrl } from "../baseURL";

export const updateUserData = async (u: UserType): Promise<UserType> => {
  const user = await fetch(`${baseUrl}/api/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(u),
  });
  const res: UserType = await user.json();
  return res;
};
