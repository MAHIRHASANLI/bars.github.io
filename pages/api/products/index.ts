import dbConnect from "@/mongoDB/db_connect";
import Product from "@/mongoDB/product_models";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === "GET") {
    try {
      const { category } = req.query;

      const products = await Product.find(category ? { category } : {});

      if (products.length > 0) {
        res.status(200).json({
          message: "The product you are looking for is available!",
          products,
        });
      } else {
        res.status(404).json({ message: "No products found!" });
      }
    } catch (error: any) {
      res.status(404).json({ message: error });
    }
  } else if (req.method === "POST") {
    const products = await Product.create(req.body);
    res.status(201).json({ message: "Product added successfully!", products });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
