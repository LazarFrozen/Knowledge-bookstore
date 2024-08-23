import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";

export function useCart() {
  const { isLoading, data } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  return { isLoading, data };
}
