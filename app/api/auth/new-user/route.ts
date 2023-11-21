import { connectdb } from "@/database/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  await connectdb();
  try {
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    throw new Error("Error in fetching users from the api.");
  }
};

export const POST = async (req: Request, res: Response) => {
  await connectdb();
  try {
    const reqBody = await req.json();
    const { email, name, password } = reqBody;
    const newUser = await User.create({ email, password, name });
    return NextResponse.json(newUser);
  } catch (error) {
    throw new Error("Error in creating a new user.");
  }
};
