import { MessageTypes, ProductType } from "@/types";

export const BASE_URL: string = "https://www.bars.com.az/api";

// export const baseGetRequest = async (
//   category: string,
//   query: string
// ): Promise<BaseRequestTypes> => {
//   try {
//     let url = `${BASE_URL}/${query}`;
//     if (category) {
//       url += `?category=${category}`;
//     }

//     const response = await fetch(url);
//     const data: BaseRequestTypes = await response.json();
//     console.log(data);

//     return data;
//   } catch (error) {
//     console.error("Sorguda xəta baş verdi:", error);
//     throw new Error(`Fetch error: ${error}`);
//     return { error: "Sorğu zamanı xəta baş verdi." };
//   }
// };

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

  return await response.json();
};

//!basePostRequestCloudinary
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
