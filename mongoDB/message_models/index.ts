// import mongoose, { Document, Schema } from "mongoose";
// export interface IMessage extends Document {
//   fullName: string;
//   email: string;
//   phone: number;
//   topic: string;
//   message: string;
// }

// const messageSchema: Schema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: Number,
//     required: true,
//   },
//   topic: {
//     type: String,
//     required: false,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
// });

// const Message =
//   mongoose.models.Message || mongoose.model<IMessage>("Message", messageSchema);

// export default Message;
