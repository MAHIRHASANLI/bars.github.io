import dbConnect from "@/mongoDB/db_connect";
import Message from "@/mongoDB/message_models";
import { NextApiRequest, NextApiResponse } from "next";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  if (req.method === "GET") {
    const responseMessage = await Message.find();
    res.status(200).json({
      message: "The messages were successfully delivered.",
      responseMessage,
    });
  } else if (req.method === "POST") {
    const responseMessage = await Message.create(req.body);
    res
      .status(202)
      .json({ message: "Messages posted successfully.", responseMessage });
  } else {
    res.setHeader("Allow", ["DELETE", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handle;
