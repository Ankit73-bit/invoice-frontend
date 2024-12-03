import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useCreateAddress(apiFn, queryKey) {
  const queryClient = useQueryClient();

  const { mutate: createEntity, isLoading: isCreating } = useMutation({
    mutationFn: apiFn,
    onSuccess: () => {
      toast.success("Address created successfully.");
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createEntity };
}
