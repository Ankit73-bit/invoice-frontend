import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getInvoiceById } from "../../services/apiInvoices";

export function useInvoice() {
  const { invoiceId } = useParams();

  const {
    isLoading,
    data: invoice,
    error,
  } = useQuery({
    queryKey: ["invoice", invoiceId],
    queryFn: () => getInvoiceById(invoiceId),
    retry: false,
  });

  return { isLoading, error, invoice };
}
