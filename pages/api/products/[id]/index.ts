import dbConnect from "@/mongoDB/db_connect";
import Product from "@/mongoDB/product_models";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { id } = req.query;

  // CORS başlıqlarını əlavə edin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // OPTIONS request-i əlavə et (CORS problemi üçün)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "PUT") {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id, // ObjectId çevirməyə ehtiyac yoxdur
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json({
        message: "The product has been successfully updated!",
        product: updatedProduct, // `products` yox, `product` yazdım ki, singular olsun
      });
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else if (req.method === "DELETE") {
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);

      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json({
        message: "The product has been successfully removed!",
        product: deletedProduct,
      });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ message: `Error deleting id: ${id}`, error });
    }
  } else {
    res.setHeader("Allow", ["DELETE", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
