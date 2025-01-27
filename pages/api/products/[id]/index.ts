import dbConnect from "@/mongoDB/db_connect";
import Product from "@/mongoDB/product_models";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  await dbConnect();

  if (req.method === "PUT") {
    const products = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "The product has been successfully updated!",
      products,
    });
  } else if (req.method === "DELETE") {
    const products = await Product.findByIdAndDelete(id);
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "The product has been successfully removed!",
      products,
    });
  } else {
    res.setHeader("Allow", ["DELETE", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
