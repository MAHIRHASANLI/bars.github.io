import dbConnect from "@/mongoDB/db_connect";
import Message from "@/mongoDB/message_models";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  await dbConnect();

  if (req.method === "DELETE") {
    try {
      const responseMessage = await Message.findByIdAndDelete(id);
      if (!responseMessage) {
        return res.status(404).json({ message: "message not found" });
      }
      res.status(200).json({
        message: "The message has been successfully removed!",
        responseMessage,
      });
    } catch (error: any) {
      res.status(500).json({ message: "Failed to delete the product" });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
