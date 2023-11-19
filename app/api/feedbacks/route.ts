import Feedback from "@/models/feedback";
import { connectdb } from "@/database/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  await connectdb();
  try {
    const feed = await Feedback.find();
    return NextResponse.json(feed);
  } catch (error) {
    throw new Error("Error in fetching feedbacks from the api.");
  }
};
export const POST = async (req: Request, res: Response) => {
  await connectdb();
  try {
    const reqBody = await req.json();
    const { email, msg } = reqBody;
    const newFeedback = await Feedback.create({ email, msg });
    return NextResponse.json(newFeedback);
  } catch (error) {
    throw new Error("Error in creating a new feedback.");
  }
};
