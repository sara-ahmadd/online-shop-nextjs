import { UserType } from "@/types";
import { getUserData } from "./getUser";

export const updateUserData = async (u: UserType): Promise<UserType> => {
  // const user = await getUserData(u.email ?? "");
  const user = await fetch(`http://localhost:3000/api/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(u),
    next: { revalidate: 0 },
  });
  const res: UserType = await user.json();
  return res;
};
