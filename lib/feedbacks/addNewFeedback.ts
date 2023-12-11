import { FeedType } from "@/types";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_HOST
    : process.env.NEXT_PUBLIC_PROD_HOST;
const url = `${baseUrl}/api/feedbacks`;
export const addNewFeedback = async (
  inputData: FeedType
): Promise<FeedType> => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(inputData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Error in adding new feedback to the url (${url}).`);
  }
};
