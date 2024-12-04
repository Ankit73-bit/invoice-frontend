import axios from "axios";
import { API_URL } from "../utils/constant";

// Set default Axios config
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Client
export const getAllClientAddress = async () => {
  try {
    const response = await axiosInstance.get("/clients");
    return response.data.data.clients;
  } catch (error) {
    console.error("Error creating Client:", error.response?.data || error);
    throw new Error("Clients could not be loaded");
  }
};

export const createClientAddress = async (addressData) => {
  try {
    const response = await axiosInstance.post("/clients", addressData);
    return response.data;
  } catch (error) {
    console.error("Error creating Client:", error.response?.data || error);
    throw new Error("Clients could not be loaded");
  }
};

// Consignee
export const getAllConsigneeAddress = async () => {
  try {
    const response = await axiosInstance.get("/consignees");
    return response.data;
  } catch (error) {
    console.error("Error creating Consignee:", error.response?.data || error);
    throw new Error("Consignees could not be loaded");
  }
};

export const createConsigneeAddress = async (addressData) => {
  try {
    const response = await axiosInstance.post("/consignees", addressData);
    return response.data;
  } catch (error) {
    console.error("Error creating Consignee:", error.response?.data || error);
    throw new Error("Consignees could not be loaded");
  }
};
