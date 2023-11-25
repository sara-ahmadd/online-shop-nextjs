import { connectdb } from "@/database/mongodb";
import User from "@/models/user";
import { UserType } from "@/types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectdb();
  try {
    const { searchParams } = new URL(req.url);
    if (searchParams.has("email")) {
      const data: UserType[] = await User.find({
        email: searchParams.get("email"),
      });
      return NextResponse.json({ user: data[0] });
    } else {
      const data: UserType[] = await User.find();
      return NextResponse.json({ data });
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
    return NextResponse.json({ user: data });
  } catch (error) {
    throw new Error(`Error in adding the user data to db ==> ${error}`);
  }
}
export async function PUT(req: Request) {
  await connectdb();
  try {
    const reqBody = await req.json();
    const { name, email, password, image, cart } = reqBody;
    const data: UserType | null = await User.findByIdAndUpdate(reqBody._id, {
      name,
      password,
      image,
      email,
      cart,
    });
    return NextResponse.json({ user: data });
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
    return NextResponse.json({ user: data });
  } catch (error) {
    throw new Error(`Error in getting the user data from db ==> ${error}`);
  }
}
