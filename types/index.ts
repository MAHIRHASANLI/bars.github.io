export interface ProductType {
  name: string;
  price: number;
  brand: string;
  image: string;
  category: string;
  _id?: string;
  __v?: number;
}

export interface MessageTypes {
  fullName: string;
  email: string;
  phone: number | string;
  topic: string;
  message: string;
  _id?: string;
}

export interface Products {
  products: ProductType[];
  message?: string;
}

export interface Message {
  responseMessage: MessageTypes[];
  message: string;
}

// export interface ErrorResponse {
//   error?: string;
// }

// export type BaseRequestTypes = Products | Message | ErrorResponse;
