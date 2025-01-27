import dbConnect from "@/mongoDB/db_connect";
import Message from "@/mongoDB/message_models";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb"; // ObjectId-i əlavə edin

export const config = {
  api: {
    bodyParser: true, // Body parsing-i aktiv edin
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  // CORS başlıqlarını əlavə edin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // CORS preflight request-i cavablandırın
    res.status(204).end();
    return;
  }

  // MongoDB ilə əlaqə qurun
  await dbConnect();

  if (req.method === "DELETE") {
    try {
      // ObjectId istifadə edərək sorğu göndərin
      const responseMessage = await Message.findByIdAndDelete(
        new ObjectId(id as string)
      );

      if (!responseMessage) {
        return res.status(404).json({ message: "Message not found" });
      }

      res.status(200).json({
        message: "The message has been successfully removed!",
        responseMessage,
      });
    } catch (error) {
      console.error("Error deleting message:", error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    // Əgər metod DELETE deyilsə
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
