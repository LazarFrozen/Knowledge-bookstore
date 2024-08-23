import { useNavigate } from "react-router-dom";
import Heading from "../../ui/Heading";
import PrimaryButton from "../../ui/PrimaryButton";

function EmptyWishlist() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <Heading heading="Your wishlist is empty" />
      <h4 className="pb-2 pt-5 text-2xl">Add books to wishlist!</h4>
      <PrimaryButton
        content="books"
        className="text-white"
        onClick={() => navigate("/books")}
      />
      <img
        src="src/data/presentation-image-2.jpg"
        alt="books"
        className="py-10"
      />
    </div>
  );
}

export default EmptyWishlist;
