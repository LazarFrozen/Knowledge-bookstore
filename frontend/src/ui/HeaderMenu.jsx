import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useCart } from "../features/cart/useCart";
import { useWishlist } from "../features/wishlist/useWishlist";

import CartModal from "../features/cart/CartModal";

function HeaderMenu() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { isLoading, data } = useCart();
  const { isLoading: loading, data: wishlistData } = useWishlist();

  const closeCartModal = () => setIsOpenModal(false);

  if (isLoading) return null;
  if (loading) return null;

  return (
    <div className="flex">
      <ul className="mr-8 flex items-center justify-center">
        <li className="navIcons mr-8">
          {wishlistData.length > 0 ? (
            <div className="absolute top-10 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-300 text-lg text-black">
              {wishlistData.length}
            </div>
          ) : null}
          <NavLink to="/wishlist">
            <FaHeartCircleCheck />
          </NavLink>
        </li>
        <li className="navIcons mr-8">
          <NavLink to="/profile">
            <MdAccountCircle />
          </NavLink>
        </li>
        <li className="navIcons mr-8">
          {data.length > 0 ? (
            <div className="absolute top-10 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-300 text-lg text-black">
              {data.length}
            </div>
          ) : null}
          <FaShoppingCart
            className="cursor-pointer"
            onClick={() => setIsOpenModal((show) => !show)}
          />
        </li>
        {isOpenModal && (
          <CartModal onClose={closeCartModal} isOpenModal={isOpenModal} />
        )}
      </ul>
      <div className="flex items-center gap-5">
        <button className="rounded-md border border-black bg-white px-4">
          Log in
        </button>
      </div>
    </div>
  );
}

export default HeaderMenu;
