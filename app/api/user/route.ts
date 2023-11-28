import { connectdb } from "@/database/mongodb";
import User from "@/models/user";
import { UserType } from "@/types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectdb();
  try {
    const { searchParams } = new URL(req.url);
    if (searchParams.has("email")) {
      const data: UserType = (await User.findOne({
        email: searchParams.get("email"),
      })) as UserType;
      return NextResponse.json(data);
    } else {
      const data: UserType[] = await User.find();
      return NextResponse.json(data);
    }
  } catch (error) {
    throw new Error(`Error in getting the user data from db ==> ${error}`);
  }
}

export async function POST(req: Request) {
  await connectdb();
  try {
    const reqBody = await req.json();
    const { name, email, password, image, cart } = reqBody;
    const data: UserType = await User.create({
      name,
      password,
      image,
      email,
      cart,
    });
    return NextResponse.json(data);
  } catch (error) {
    throw new Error(`Error in adding the user data to db ==> ${error}`);
  }
}
export async function PATCH(req: Request) {
  await connectdb();
  try {
    const reqBody = await req.json();
    const { _id, name, email, password, image, cart } = reqBody;
    const data = (await User.findByIdAndUpdate(_id, {
      name,
      password,
      image,
      email,
      cart,
    })) as UserType;
    return NextResponse.json(data);
  } catch (error) {
    throw new Error(`Error in updating the user data in db ==> ${error}`);
  }
}

export async function DELETE(req: Request) {
  await connectdb();
  try {
    const { searchParams } = new URL(req.url);
    const data: UserType | null = await User.findByIdAndDelete(
      searchParams.get("id")
    );
    return NextResponse.json(data);
  } catch (error) {
    throw new Error(`Error in getting the user data from db ==> ${error}`);
  }
}
