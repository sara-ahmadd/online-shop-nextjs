import { FeedType } from "@/types";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_HOST
    : process.env.PROD_HOST;
const url = `${baseUrl}/api/feedbacks`;
export const getAllFeedbacks = async (): Promise<FeedType[]> => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Error in fetching feedbacks from the url:(${url}).`);
  }
};
