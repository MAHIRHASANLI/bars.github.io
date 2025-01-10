import { ProductType } from "@/types";

const BASE_URL: string = "http://localhost:3000/api/products";

export const baseGetRequest = async (
  category: string
): Promise<{ products: ProductType[]; message: string }> => {
  const response = await fetch(`${BASE_URL}?category=${category}`);
  const data = await response.json();
  return data;
};

export const basePostRequest = async (data: ProductType) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const basePutRequest = async (data: ProductType, id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const baseDeleteRequest = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  return await response.json();
};

export const basePostRequestCloudinary = async (image: any) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "barsproduct");
  formData.append(
    "cloud_name",
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ""
  );

  // Cloudinary API-ə post request edin
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/dwefitou2/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();
  return data.secure_url;
};
