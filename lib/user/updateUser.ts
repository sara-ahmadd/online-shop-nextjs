import { UserType } from "@/types";

export const updateUserData = async (u: UserType): Promise<UserType> => {
  const data = await fetch(`http://localhost:3000/api/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(u),
  });
  const user: UserType = await data.json();
  return user;
};
