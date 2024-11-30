import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constant";
import { getAllInvoices } from "../../services/apiInvoices";

function useInvoices() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Handle multiple filters: company, status, etc.
  const companyFilter = searchParams.get("company");
  const statusFilter = searchParams.get("status");

  const filters = {};

  // Only include filters if they are not null or "all"
  if (companyFilter && companyFilter !== "all") {
    filters.company = companyFilter;
  }
  if (statusFilter && statusFilter !== "all") {
    filters.status = statusFilter;
  }

  // Handle the sort parameter (same as before)
  const sortByRaw = searchParams.get("sort") || "-createdAt";
  const [field, direction] = sortByRaw.split("-");
  const sort = `${direction === "desc" ? "-" : ""}${field}`;

  // Handle pagination (same as before)
  const page = Number(searchParams.get("page")) || 1;

  // Fetch the data using React Query
  const {
    isLoading,
    data: { data: invoices = [], results: totalCount = 0 } = {},
    error,
  } = useQuery({
    queryKey: ["invoices", filters, sort, page],
    queryFn: () => getAllInvoices({ filters, sort, page }),
    keepPreviousData: true,
  });

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  // Prefetch the next and previous pages
  if (page < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["invoices", filters, sort, page + 1],
      queryFn: () => getAllInvoices({ filters, sort, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["invoices", filters, sort, page - 1],
      queryFn: () => getAllInvoices({ filters, sort, page: page - 1 }),
    });
  }

  return { isLoading, error, invoices, totalCount };
}

export default useInvoices;
