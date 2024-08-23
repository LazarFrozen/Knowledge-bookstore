import { useNavigate } from "react-router-dom";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaRegTrashAlt, FaShoppingCart } from "react-icons/fa";
import { useSearchBook } from "../books/useSearchBook";
import { removeFromWishlist } from "../../services/apiWishlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../services/apiCart";

import PrimaryButton from "../../ui/PrimaryButton";
import SideButton from "../../ui/SideButton";
import toast from "react-hot-toast";

function WishlistBooks({ bookId }) {
  const { data, isLoading } = useSearchBook();
  const navigate = useNavigate();
  const id = bookId - 1;

  const queryClient = useQueryClient();

  const { isLoading: loading, mutate } = useMutation({
    mutationFn: removeFromWishlist,
    onSuccess: () => {
      toast.success("Book successfully deleted from wishlist");

      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
    onError: () => toast.error("Failed to delete book from wishlist"),
  });

  const handleButtonClick = (event, callback) => {
    event.stopPropagation();
    callback();
  };

  if (isLoading) return null;

  return (
    <ul
      className="w-64 cursor-pointer"
      onClick={() => navigate(`/books/${data[id].id}`)}
    >
      <div className="bg-white shadow-xl">
        <div className="p-8">
          <img src={data[id].image} alt="books" className="h-64 w-48" />
        </div>
        <div className="flex justify-between px-6">
          <PrimaryButton
            content={<FaHeartCircleCheck className="text-xl" />}
            onClick={(event) => handleButtonClick(event, () => {})}
            disabled
          />
          <SideButton
            content={<FaShoppingCart className="text-xl" />}
            onClick={(event) =>
              handleButtonClick(event, () => addToCart(id + 1))
            }
          />
        </div>
        <div className="mt-2 h-16 px-6">
          <h3 className="font-extrabold">{data[id].title}</h3>
        </div>
        <div className="mt-2 h-16 px-6">
          <h4>{data[id].author}</h4>
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-2 flex h-16 flex-col px-6">
            <p className="text-lg text-sideColor">Price:</p>
            <p className="text-xl font-extrabold text-sideColor">
              {data[id].price}€
            </p>
          </div>
          <div className="pr-6">
            <FaRegTrashAlt
              className="cursor-pointer text-3xl"
              onClick={(event) =>
                handleButtonClick(event, () => mutate(bookId))
              }
              disabled={loading}
            />
          </div>
        </div>
      </div>
    </ul>
  );
}

export default WishlistBooks;
