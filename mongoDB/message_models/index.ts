import mongoose, { Document, Schema } from "mongoose";
export interface IMessage extends Document {
  fullName: string;
  email: string;
  phone: number;
  topic: string;
  message: string;
}

const messageSchema: Schema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  topic: {
    type: String,
    require: false,
  },
  message: {
    type: String,
    require: true,
  },
});

const Message =
  mongoose.models.Message || mongoose.model<IMessage>("Message", messageSchema);

export default Message;
