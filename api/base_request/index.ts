import { MessageTypes, ProductType } from "@/types";

export const BASE_URL: string = "https://www.bars.com.az/api";
//  "https://www.bars.com.az/api";
// || "http://localhost:3000/api";

export const basePostRequest = async (
  data: MessageTypes | ProductType,
  query: string
) => {
  const response = await fetch(`${BASE_URL}/${query}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const basePutRequest = async (
  data: MessageTypes | ProductType,
  id: string,
  query: string
) => {
  const response = await fetch(`${BASE_URL}/${query}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const baseDeleteRequest = async (id: string, query: string) => {
  const response = await fetch(`${BASE_URL}/${query}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete: ${response.status}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : null;
};

//!basePostRequestCloudinary
export const basePostRequestCloudinary = async (image: any) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "barsproduct");
  formData.append("cloud_name", process.env.CLOUDINARY_CLOUD_NAME || "");

  // Cloudinary API-ə post request edin
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();
  return data.secure_url;
};
