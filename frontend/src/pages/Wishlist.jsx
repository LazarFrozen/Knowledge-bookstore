import { useWishlist } from "../features/wishlist/useWishlist";
import EmptyWishlist from "../features/wishlist/EmptyWishlist";
import WishlistRendering from "../features/wishlist/WishlistRendering";
import Spinner from "../ui/Spinner";

function Wishlist() {
  const { isLoading, data } = useWishlist();

  if (isLoading) return <Spinner />;

  return (
    <section className="h-auto">
      {data.length > 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center">
          <h2 className="mb-5 text-6xl font-extrabold">Wishlist</h2>
          <WishlistRendering />
        </div>
      ) : (
        <EmptyWishlist />
      )}
    </section>
  );
}

export default Wishlist;
