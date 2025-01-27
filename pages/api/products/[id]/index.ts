import dbConnect from "@/mongoDB/db_connect";
import Product from "@/mongoDB/product_models";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb"; // ObjectId istifadə edilir

export const config = {
  api: {
    bodyParser: true, // JSON body parsing aktivdir
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  // CORS başlıqlarını əlavə edin
  res.setHeader("Access-Control-Allow-Origin", "https://www.bars.com.az/");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Preflight request üçün cavab
    res.status(204).end();
    return;
  }

  // MongoDB ilə əlaqə qurun
  await dbConnect();

  if (req.method === "PUT") {
    try {
      // ID-ni ObjectId formatına çevirin
      const products = await Product.findByIdAndUpdate(
        new ObjectId(id as string),
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!products) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json({
        message: "The product has been successfully updated!",
        products,
      });
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else if (req.method === "DELETE") {
    try {
      // ID-ni ObjectId formatına çevirin
      const products = await Product.findByIdAndDelete(
        new ObjectId(id as string)
      );

      if (!products) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json({
        message: "The product has been successfully removed!",
        products,
      });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    // Digər metodlar üçün cavab
    res.setHeader("Allow", ["DELETE", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
