const url = "http://localhost:3000/api/products";
export const getProduct = async (id: string) => {
  try {
    const res = await fetch(`${url}?id=${id}`);
    if (!res.ok) {
      throw new Error("Error in response!");
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Error in data!");
    }
    return data;
  } catch (error) {
    throw new Error(
      `Error in fetching products from the url: (${url}?id=${id})`
    );
  }
};
