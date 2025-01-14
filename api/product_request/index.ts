import { Products, ProductType } from "@/types";
import {
  BASE_URL,
  baseDeleteRequest,
  basePostRequest,
  basePostRequestCloudinary,
  basePutRequest,
} from "../base_request";

const query: string = "products";

export const getAllProduct = async (category: string): Promise<Products> => {
  try {
    const response = await fetch(`${BASE_URL}/${query}?category=${category}`);
    return await response.json();
  } catch (error) {
    throw new Error("Mehsuular getirilmedi!");
  }
  // return await baseGetRequest(category, query);
};

export const postProduct = async (data: ProductType) => {
  return await basePostRequest(data, query);
};

export const putProduct = async (data: ProductType, id: string) => {
  return await basePutRequest(data, id, query);
};

export const deleteProduct = async (id: string) => {
  return await baseDeleteRequest(id, query);
};

//! POST CLOUDINARY
export const postCloudinaryImg = async (image: string) => {
  return await basePostRequestCloudinary(image);
};
