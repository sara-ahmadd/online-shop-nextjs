import { FeedType } from "@/types";
import { baseUrl } from "../baseURL";

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
