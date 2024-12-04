import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createInvoice as createInvoiceAPI } from "../../services/apiInvoices";

export function useCreateInvoice() {
  const queryClient = useQueryClient();

  const { mutate: createInvoice, isLoading: isCreating } = useMutation({
    mutationFn: createInvoiceAPI,
    onSuccess: () => {
      toast.success("Invoice created successfully.");
      queryClient.invalidateQueries({
        queryKey: ["invoice"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createInvoice };
}
