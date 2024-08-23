import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "../../services/apiWishlist";

export function useWishlist() {
  const { isLoading, data } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });

  return { isLoading, data };
}
