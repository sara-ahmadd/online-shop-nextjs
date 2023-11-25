import { UserType } from "@/types";

export const addUser = async (u: UserType) => {
  const data = await fetch(`http://localhost:3000/api/user`, {
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
