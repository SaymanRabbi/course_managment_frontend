import axios from "axios";
const Api = axios.create({
  baseURL: "http://localhost:5000",
});
export const userChats = async (userId: any) =>
  Api.get(`/api/v1/chat/${userId}`);

export const getUser = async (userId: any) => Api.get(`/api/v1/user/${userId}`);

export const getMessages = async (chatId: any) =>
  Api.get(`/api/v1/message/${chatId}`);

export const sendMessageserver = async (messages: any) =>
  Api.post(`/api/v1/message`, messages);

export const CreateCoversation = async (conversation: any) =>
  Api.post(`/api/v1/chat`, conversation);
