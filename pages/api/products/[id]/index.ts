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
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({
        message: "The product has been successfully updated!",
        product,
      });
    } catch (error: any) {
      res.status(500).json({ message: "Failed to update the product" });
    }
  } else if (req.method === "DELETE") {
    try {
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({
        message: "The product has been successfully removed!",
        product,
      });
    } catch (error: any) {
      res.status(500).json({ message: "Failed to delete the product" });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
