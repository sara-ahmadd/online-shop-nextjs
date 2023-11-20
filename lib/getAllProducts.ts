const url = "http://localhost:3000/api/products";
export const getProducts = async () => {
  try {
    const res = await fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      cache:'no-store'
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Error in fetching products from the url: (${url})`);
  }
};