const baseUrl = process.env.DEV_HOST;
export default async function getProducts() {
  const res = await fetch(`${baseUrl}/api/products`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (res) {
    console.log(`${res.json()}=========>${res.statusText}`);
  }
  const data = await res.json();
  if (!data) {
    throw new Error("No DATA");
  }
  console.log(data.data);
  return data.data;
}
