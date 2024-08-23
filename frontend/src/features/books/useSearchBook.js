import { useQuery } from "@tanstack/react-query";
import { getSearch } from "../../services/apiBooks";

export function useSearchBook() {
  const { isLoading, data } = useQuery({
    queryKey: ["books"],
    queryFn: getSearch,
  });

  return { isLoading, data };
}
