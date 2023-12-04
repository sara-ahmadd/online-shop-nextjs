import Product from "@/models/product";
import { connectdb } from "@/database/mongodb";
import { ProductType } from "@/types";
import mongoose, { Mongoose, Schema } from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  await connectdb();
  try {
    const { searchParams } = new URL(req.url);
    if (searchParams.has("id")) {
      const id = searchParams.get("id");
      const data = await Product.findById(id);
      return NextResponse.json(data);
    } else if (searchParams.has("search")) {
      const txt = searchParams.get("search") as string;
      const data: ProductType[] = await Product.find();
      const products = data.filter((x) =>
        x.title.toLowerCase().includes(txt?.toLowerCase() as string)
      );
      const res = products.length > 0 ? products : data;
      return NextResponse.json(res);
    } else if (searchParams.has("category")) {
      const categories = await Product.find({
        category: searchParams.get("category"),
      });
      return NextResponse.json(categories);
    } else {
      const data: ProductType[] = await Product.find();
      return NextResponse.json(data);
    }
  } catch (error) {
    throw new Error("Error in fetching_all_products api.");
  }
};
export const POST = async (req: Request, res: Response) => {
  await connectdb();
  try {
    const reqBody = await req.json();
    const { title, category, price, description, image, newProduct, sale } =
      reqBody;
    const data = await Product.create({
      title,
      category,
      price,
      description,
      image,
      newProduct,
      sale,
    });
    return NextResponse.json(data);
  } catch (error) {
    throw new Error(`Error in creating new product==> ${error}`);
  }
};
export const PUT = async (req: Request, res: Response) => {
  await connectdb();
  try {
    const { searchParams } = new URL(req.url);
    const reqBody = await req.json();
    const data = await Product.findByIdAndUpdate(searchParams.get("id"), {
      ...reqBody,
    });
    return NextResponse.json(data);
  } catch (error) {
    throw new Error("Error in updating the product requested!");
  }
};
export const DELETE = async (req: Request, res: Response) => {
  await connectdb();
  try {
    const { searchParams } = new URL(req.url);
    const data = await Product.findByIdAndDelete(searchParams.get("id"));
    return NextResponse.json(data);
  } catch (error) {
    throw new Error("Error in deleting the product.");
  }
};
