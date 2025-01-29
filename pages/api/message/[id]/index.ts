import dbConnect from "@/mongoDB/db_connect";
import Message from "@/mongoDB/message_models";
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

  // OPTIONS request-i əlavə et (CORS üçün)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "DELETE") {
    try {
      const deletedMessage = await Message.findByIdAndDelete(id);

      if (!deletedMessage) {
        return res.status(404).json({ message: "Message not found" });
      }

      res.status(200).json({
        message: "The message has been successfully removed!",
        deletedMessage,
      });
    } catch (error) {
      console.error("Error deleting message:", error);
      res
        .status(500)
        .json({ message: `Error deleting message with id: ${id}`, error });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
