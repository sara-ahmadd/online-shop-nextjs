import { UserType } from "@/types";

export const getUserData = async (email: string): Promise<UserType> => {
  try {
    const data = await fetch(`http://localhost:3000/api/user?email=${email}`, {
      
    });
    const user: UserType = await data.json();
    return user;
  } catch (error) {
    throw new Error(`Error when getting the user ==> ${error}`);
  }
};
