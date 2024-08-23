import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBooks } from "../../services/apiBooks";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utilities/constants";

export function useBook() {
  const queryQlient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Query
  const {
    data: { data, pageInfo, numOfItems } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["books", page],
    queryFn: () => getBooks({ page }),
  });

  // Pre-fetching
  const pageCount = Math.ceil(numOfItems / PAGE_SIZE);

  if (page < pageCount)
    queryQlient.prefetchQuery({
      queryKey: ["books", page + 1],
      queryFn: () => getBooks({ page: page + 1 }),
    });

  if (page > 1)
    queryQlient.prefetchQuery({
      queryKey: ["books", page - 1],
      queryFn: () => getBooks({ page: page - 1 }),
    });

  return { data, pageInfo, error, isLoading, numOfItems };
}
