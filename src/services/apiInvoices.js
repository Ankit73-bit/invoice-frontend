import axios from "axios";
import { API_URL } from "../utils/constant";

// Set default Axios config
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get all invoices with optional query parameters
export const getAllInvoices = async (queryParams = {}) => {
  try {
    // Convert queryParams object to query string
    const queryString = new URLSearchParams(queryParams).toString();

    const response = await axiosInstance.get(`?${queryString}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching invoices:", error.response?.data || error);
    throw new Error("Invoices could not be loaded");
  }
};

// Get a single invoice by ID
export const getInvoiceById = async (id) => {
  try {
    const response = await axiosInstance.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching invoice:", error.response?.data || error);
    throw new Error("Invoice not found");
  }
};

// Create a new invoice
export const createInvoice = async (invoiceData) => {
  try {
    const response = await axiosInstance.post("/", invoiceData);
    return response.data;
  } catch (error) {
    console.error("Error creating invoice:", error.response?.data || error);
    throw new Error("Invoices could not be loaded");
  }
};

// Update an invoice by ID
export const updateInvoice = async (id, invoiceData) => {
  try {
    const response = await axiosInstance.patch(`/${id}`, invoiceData);
    return response.data;
  } catch (error) {
    console.error("Error updating invoice:", error.response?.data || error);
    throw new Error("Invoices could not be loaded");
  }
};

// Delete an invoice by ID
export const deleteInvoice = async (id) => {
  try {
    const response = await axiosInstance.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting invoice:", error.response?.data || error);
    throw new Error("Invoices could not be loaded");
  }
};

// Fetch invoice statistics
export const getInvoicesStats = async () => {
  try {
    const response = await axiosInstance.get("/invoice-stats");
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching invoice statistics:",
      error.response?.data || error
    );
    throw new Error("Invoices could not be loaded");
  }
};
