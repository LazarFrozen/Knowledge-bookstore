import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSearchBook } from "../features/books/useSearchBook";
import { addToWishlist } from "../services/apiWishlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../services/apiCart";

import PrimaryButton from "../ui/PrimaryButton";
import SideButton from "../ui/SideButton";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";

function BookId() {
  const { bookId } = useParams();
  const id = Number(bookId) - 1;
  const { data, isLoading } = useSearchBook();

  const queryClient = useQueryClient();

  const { isLoading: loading, mutate } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: () => {
      toast.success("Book successfully added to wishlist");

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

  if (isLoading) return <Spinner />;

  const handleButtonClick = (event, callback) => {
    event.stopPropagation();
    callback();
  };

  return (
    <section className="mb-10 mt-10">
      <div className="flex w-full bg-white p-8 shadow-xl">
        <img
          src={data[id].image}
          alt="books"
          className="h-bookItemHeight w-bookItemWidth"
        />
        <div className="flex w-96 flex-col pl-4">
          <h2 className="text-4xl font-extrabold">{data[id].title}</h2>
          <h4 className="text-2xl font-semibold">{data[id].author}</h4>
          <p className="mt-2">
            <span className="font-semibold">category:</span> {data[id].category}
          </p>
          <p>
            <span className="font-semibold">published: </span>
            {data[id].published}
          </p>
          <p>
            <span className="font-semibold">publisher: </span>{" "}
            {data[id].publisher}
          </p>
          <p>
            <span className="font-semibold">language: </span>
            {data[id].language}
          </p>
          <p>
            <span className="font-semibold">pages:</span> {data[id].pages} pages
          </p>
          <p>
            <span className="font-semibold">weight:</span> {data[id].weight}g
          </p>
          <p className="mt-2">
            <span className="font-semibold">description: </span>{" "}
            {data[id].description}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-16 flex-col items-center px-6">
            <p className="text-lg text-sideColor">Price:</p>
            <p className="text-xl font-extrabold text-sideColor">
              {data[id].price}€
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 px-6">
            <PrimaryButton
              content={<FaHeartCircleCheck className="text-xl" />}
              onClick={(event) =>
                handleButtonClick(event, () => mutate(id + 1))
              }
              disabled={loading}
            />
            <SideButton
              content={<FaShoppingCart />}
              className="text-xl"
              onClick={(event) =>
                handleButtonClick(event, () => cartMutate(id + 1))
              }
              disabled={cartLoading}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookId;
