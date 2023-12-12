import { UserType } from "@/types";
import { baseUrl } from "../baseURL";

export const addUser = async (u: UserType) => {
  const data = await fetch(`${baseUrl}/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(u),
  });
  const user = await data.json();
  return user;
};
