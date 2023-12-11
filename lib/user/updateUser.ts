import { UserType } from "@/types";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_HOST
    : process.env.NEXT_PUBLIC_PROD_HOST;
export const updateUserData = async (u: UserType): Promise<UserType> => {
  // const user = await getUserData(u.email ?? "");
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
