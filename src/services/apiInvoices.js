import axios from "axios";
import { API_URL, getApiUrl } from "../utils/constant";

// Set default Axios config
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch invoices with optional filtering, sorting, and pagination
export const getAllInvoices = async ({
  filters = {},
  sort = "",
  page = 1,
  limit = 10,
} = {}) => {
  try {
    // Build query parameters
    const additionalParams = { sort, ...filters };
    const fullUrl = getApiUrl(page, limit, additionalParams);

    // Fetch data
    const response = await axios.get(fullUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching invoices:", error.response?.data || error);
    throw new Error("Failed to load invoices. Please try again later.");
  }
};

// Get a single invoice by ID
export const getInvoiceById = async (id) => {
  try {
    const response = await axiosInstance.get(`/invoices/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching invoice:", error.response?.data || error);
    throw new Error("Invoice not found");
  }
};

// Create a new invoice
export const createInvoice = async (invoiceData) => {
  try {
    const response = await axiosInstance.post("/invoices", invoiceData);
    return response.data;
  } catch (error) {
    console.error("Error creating invoice:", error.response?.data || error);
    throw new Error("Invoices could not be loaded");
  }
};

// Update an invoice by ID
export const updateInvoice = async (id, invoiceData) => {
  try {
    const response = await axiosInstance.patch(`/invoices/${id}`, invoiceData);
    return response.data;
  } catch (error) {
    console.error("Error updating invoice:", error.response?.data || error);
    throw new Error("Invoices could not be loaded");
  }
};

// Delete an invoice by ID
export const deleteInvoice = async (id) => {
  try {
    const response = await axiosInstance.delete(`/invoices/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting invoice:", error.response?.data || error);
    throw new Error("Invoices could not be loaded");
  }
};

// Fetch invoice statistics
export const getInvoicesStats = async () => {
  try {
    const response = await axiosInstance.get("/invoices/invoice-stats");
    return response.data.data; // Assuming response.data.data contains the stats
  } catch (error) {
    console.error("Error fetching invoice statistics:", error);
    throw new Error("Could not fetch invoice statistics");
  }
};
