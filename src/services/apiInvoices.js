import axios from "axios";
import { API_URL, PAGE_SIZE } from "../utils/constant";

// Set default Axios config
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch invoices with optional filtering, sorting, and pagination
export const getAllInvoices = async ({ filters, sort, page }) => {
  try {
    const queryParams = {};

    // Add multiple filters to queryParams
    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          queryParams[key] = filters[key];
        }
      });
    }

    // Add sort
    if (sort) {
      queryParams.sort = sort;
    }

    // Pagination params
    if (page) queryParams.page = page;
    queryParams.limit = PAGE_SIZE;

    // Convert query parameters to query string
    const queryString = new URLSearchParams(queryParams).toString();

    // Make API call
    const response = await axiosInstance.get(`?${queryString}`);
    return response.data; // Assumes the backend returns { data, count }
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
