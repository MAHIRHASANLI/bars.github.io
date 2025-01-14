import dbConnect from "@/mongoDB/db_connect";
import Message from "@/mongoDB/message_models";
import { NextApiRequest, NextApiResponse } from "next";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  if (req.method === "GET") {
    try {
      const responseMessage = await Message.find();
      res.status(200).json({
        message: "The messages were successfully delivered.",
        responseMessage,
      });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  } else if (req.method === "POST") {
    try {
      const responseMessage = await Message.create(req.body);
      res
        .status(202)
        .json({ message: "Messages posted successfully.", responseMessage });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }
};

export default handle;
