import ProductModel from "@/models/product";
import { connectdb } from "@/database/mongodb";
import { ProductType } from "@/types";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  await connectdb();
  try {
    const { searchParams } = new URL(req.url);
    if (searchParams.has("id")) {
      const data = await ProductModel.findById(
        searchParams.get("id") as string
      );
      return NextResponse.json(data);
    } else {
      const data = await ProductModel.find();
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
    const { title, category, price, description, image, newProduct } = reqBody;
    const data = await ProductModel.create({
      title,
      category,
      price,
      description,
      image,
      newProduct,
    });
    return NextResponse.json(data);
  } catch (error) {
    throw new Error("Error in creating new product.");
  }
};
export const PUT = async (req: Request, res: Response) => {
  await connectdb();
  try {
    const { searchParams } = new URL(req.url);
    const reqBody = await req.json();
    const data = await ProductModel.findByIdAndUpdate(searchParams.get("id"), {
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
    const data = await ProductModel.findByIdAndDelete(searchParams.get("id"));
    return NextResponse.json(data);
  } catch (error) {
    throw new Error("Error in deleting the product.");
  }
};