import { connectdb } from "@/database/mongodb";
import User from "@/models/user";
import { UserType } from "@/types";
import { genSalt, hash } from "bcrypt-ts";
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
    if (!email || !name) {
      return new NextResponse("Missing fields.", { status: 400 });
    }
    const exist = await User.findOne({ email: email });
    if (exist) {
      throw new Error("User already exists.");
    }
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const data: UserType = await User.create({
      name,
      password: hashedPassword,
      image,
      email,
      cart,
    });
    return NextResponse.json(data);
  } catch (error) {
    throw new Error(`Error in adding the user data to db. ==> ${error}`);
  }
}
export async function PATCH(req: Request) {
  await connectdb();
  try {
    const reqBody = await req.json();
    const { _id, name, email, image, cart, password } = reqBody;
    if (!email || !name) {
      return new NextResponse("Missing fields to update the user.", {
        status: 400,
      });
    }
    const data = (await User.findByIdAndUpdate(_id, {
      name,
      image,
      email,
      cart,
      password,
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
    const data = await User.findByIdAndDelete(searchParams.get("id"));
    return NextResponse.json(data);
  } catch (error) {
    throw new Error(`Error in getting the user data from db ==> ${error}`);
  }
}
