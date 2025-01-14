import { BASE_URL, baseDeleteRequest, basePostRequest } from "../base_request";
import { Message, MessageTypes } from "@/types";

const query: string = "message";

export const GetAllMessage = async (): Promise<Message> => {
  try {
    const response = await fetch(`${BASE_URL}/${query}`);
    return await response.json();
  } catch (error) {
    throw new Error("Mesajlar Getirilmedi!");
  }
  // return await baseGetRequest("", query);
};

export const postMessage = async (data: MessageTypes) => {
  return await basePostRequest(data, query);
};

export const removeMessage = async (id: string) => {
  return baseDeleteRequest(id, query);
};