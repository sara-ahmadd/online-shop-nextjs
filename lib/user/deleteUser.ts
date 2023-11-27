import { UserType } from "@/types";

export const deleteUserData = async (id: string): Promise<UserType> => {
  const data = await fetch(`http://localhost:3000/api/user?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const user: UserType = await data.json();
  return user;
};
