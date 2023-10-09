import dbConnect from "@/db/dbConnect";
import Product from "@/db/models/Product";
export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  } else {
    return response.status(404).json({ message: "method not allowed" });
  }
}
