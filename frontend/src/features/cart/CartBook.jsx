import { useSearchBook } from "../books/useSearchBook";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { removeFromCart, updateCart } from "../../services/apiCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";

function CartBook({ bookId, quantity }) {
  const { data, isLoading } = useSearchBook();

  const queryClient = useQueryClient();

  const { isLoading: loading, mutate } = useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      toast.success("Book successfully removed from cart");

      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: () => toast.error("Failed to remove book to wishlist"),
  });

  const { isLoading: loadingUpdate, mutate: updating } = useMutation({
    mutationFn: updateCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: () => toast.error("Failed to update quantity"),
  });

  const handleDecreaseQuantity = () => {
    if (quantity === 1) {
      toast.error("Quantity cannot be less than 1");
      return;
    }
    updating({ bookId, quantityChange: -1 });
  };

  if (isLoading) return <Spinner />;

  const book = data[bookId - 1];

  return (
    <ul className="z-10 w-searchWidth border-b-2">
      <div className="flex bg-white shadow-xl">
        <div className="p-2">
          <img src={book.image} alt="books" className="h-24 w-16" />
        </div>
        <div className="mt-2 h-20 w-80 px-6">
          <h3 className="font-extrabold">{book.title}</h3>
          <h4>{book.author}</h4>
          <p className="text-xl text-sideColor">{book.price}€</p>
        </div>
        <div className="flex w-28 flex-col items-center justify-center gap-5">
          <FaRegTrashAlt
            className="cursor-pointer text-xl"
            onClick={() => mutate(bookId)}
            disabled={loading}
          />
          <div className="flex items-center gap-2 text-xl">
            <IoMdRemove
              className="cursor-pointer text-xl"
              onClick={handleDecreaseQuantity}
              disabled={quantity === 1 || loadingUpdate}
            />
            {quantity}
            <IoMdAdd
              className="cursor-pointer text-xl"
              onClick={() => updating({ bookId, quantityChange: 1 })}
              disabled={loadingUpdate}
            />
          </div>
        </div>
      </div>
    </ul>
  );
}

export default CartBook;
