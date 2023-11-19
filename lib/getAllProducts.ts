const url = "http://localhost:3000/api/products";
export const getAllProducts = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Error in fetching products from the url: (${url}).`);
  }
};
