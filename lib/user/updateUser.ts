import { UserType } from "@/types";
import { getUserData } from "./getUser";

export const updateUserData = async (u: UserType): Promise<UserType> => {
  // const user = await getUserData(u.email ?? "");
  const user = await fetch(`http://localhost:3000/api/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(u),
  });
  const res: UserType = await user.json();
  return res;
};
