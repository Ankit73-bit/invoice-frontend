import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteInvoice as deleteInvoiceAPI } from "../../services/apiInvoices";

export function useDeleteInvoice() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteInvoice } = useMutation({
    mutationFn: deleteInvoiceAPI,
    onSuccess: () => {
      toast.success("Invoice successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["invoice"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteInvoice };
}
