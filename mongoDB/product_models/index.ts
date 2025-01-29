// import mongoose, { Document, Schema } from "mongoose";

// export interface IProduct extends Document {
//   name: string;
//   price: number;
//   brand: string;
//   image: string;
//   category: string;
// }

// const productSchema: Schema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   brand: {
//     type: String,
//   },
//   image: {
//     type: String,
//     required: false,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
// });

// const Product =
//   mongoose.models.Products ||
//   mongoose.model<IProduct>("Products", productSchema);

// export default Product;
