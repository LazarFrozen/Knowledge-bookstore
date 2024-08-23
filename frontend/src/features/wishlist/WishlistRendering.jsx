import Spinner from "../../ui/Spinner";
import WishlistBooks from "../wishlist/WishlistBooks";
import { useWishlist } from "./useWishlist";

function WishlistRendering() {
  const { isLoading, data, error } = useWishlist();

  if (isLoading) return <Spinner />;

  return (
    <div className="mb-10 mt-10 grid grid-cols-3 gap-5">
      {data.map((item) => (
        <div key={item.bookId}>
          <WishlistBooks bookId={item.bookId} />
        </div>
      ))}
    </div>
  );
}

export default WishlistRendering;
