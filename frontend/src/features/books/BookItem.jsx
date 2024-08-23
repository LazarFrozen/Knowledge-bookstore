import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { addToWishlist } from "../../services/apiWishlist";
import { addToCart } from "../../services/apiCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import PrimaryButton from "../../ui/PrimaryButton";
import SideButton from "../../ui/SideButton";
import toast from "react-hot-toast";

function BookItem({ book }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading: loading, mutate } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
    onError: () => toast.error("Failed to add book to wishlist"),
  });

  const { isLoading: cartLoading, mutate: cartMutate } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      toast.success("Book successfully added to cart");

      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: () => toast.error("Failed to add book to cart"),
  });

  const handleButtonClick = (event, callback) => {
    event.stopPropagation();
    callback();
  };

  return (
    <ul
      className="w-64 cursor-pointer"
      onClick={() => navigate(`/books/${book.id}`)}
    >
      <div className="bg-white shadow-xl">
        <div className="p-8">
          <img src={book.image} alt="books" className="h-64 w-48" />
        </div>
        <div className="flex justify-between px-6">
          <PrimaryButton
            content={<FaHeartCircleCheck className="text-xl" />}
            onClick={(event) => handleButtonClick(event, () => mutate(book.id))}
            disabled={loading}
          />
          <SideButton
            content={<FaShoppingCart className="text-xl" />}
            onClick={(event) =>
              handleButtonClick(event, () => cartMutate(book.id))
            }
            disabled={cartLoading}
          />
        </div>
        <div className="mt-2 h-16 px-6">
          <h3 className="font-extrabold">{book.title}</h3>
        </div>
        <div className="mt-2 h-16 px-6">
          <h4>{book.author}</h4>
        </div>
        <div className="mt-2 flex h-16 flex-col px-6">
          <p className="text-lg text-sideColor">Price:</p>
          <p className="text-xl font-extrabold text-sideColor">{book.price}€</p>
        </div>
      </div>
    </ul>
  );
}

export default BookItem;
