const url = "http://localhost:3000/api/feedbacks";
export const getAllFeedbacks = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Error in fetching feedbacks from the url:(${url}).`);
  }
};
