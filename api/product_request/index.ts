import { ProductType } from "@/types";
import {
  baseDeleteRequest,
  baseGetRequest,
  basePostRequest,
  basePostRequestCloudinary,
  basePutRequest,
} from "../base_request";

export const getAllProduct = async (
  category: string
): Promise<{ products: ProductType[]; message: string }> => {
  return await baseGetRequest(category);
};

export const postProduct = async (data: ProductType) => {
  return await basePostRequest(data);
};

export const putProduct = async (data: ProductType, id: string) => {
  return await basePutRequest(data, id);
};

export const deleteProduct = async (id: string) => {
  return await baseDeleteRequest(id);
};

//! POST CLOUDINARY
export const postCloudinaryImg = async (image: any) => {
  return await basePostRequestCloudinary(image);
};
