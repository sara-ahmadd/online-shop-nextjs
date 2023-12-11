import { UserType } from "@/types";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_HOST
    : process.env.PROD_HOST;
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
