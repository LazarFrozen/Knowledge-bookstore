import { useEffect, useState } from "react";
import { useCart } from "./useCart";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";

import CartBook from "./CartBook";
import EmptyCart from "./EmptyCart";

function CartModal({ onClose, isOpenModal }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { data, isLoading } = useCart();
  const navigate = useNavigate();

  const ref = useOutsideClick(() => {
    if (isOpenModal) {
      setTimeout(() => onClose(), 10);
    }
  });

  useEffect(() => {
    if (data) {
      setCartItems(data);
      calculateTotalPrice(data);
    }
  }, [data]);

  function calculateTotalPrice(items) {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    setTotalPrice(total.toFixed(2));
  }

  function handleOnCheckout() {
    onClose();

    navigate("/checkout", {
      state: {
        cartItems,
        totalPrice,
      },
    });
  }

  if (isLoading) return null;

  return (
    <div
      ref={ref}
      className="absolute right-80 top-24 h-auto w-searchWidth bg-white shadow-xl"
    >
      <div>
        {cartItems.length > 0 ? (
          <div className="max-h-96 overflow-y-auto overflow-x-hidden">
            {cartItems.map((item) => (
              <div key={item.bookId}>
                <CartBook bookId={item.bookId} quantity={item.quantity} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
      {cartItems.length > 0 ? (
        <>
          <div className="flex justify-between bg-white p-6">
            <p className="text-2xl font-extrabold">total:</p>
            <p className="text-2xl font-extrabold">{totalPrice}€</p>
          </div>
          <div className="flex justify-center p-4">
            <button
              className="h-16 w-80 rounded-md border-none bg-secondaryColor text-2xl text-white"
              onClick={handleOnCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default CartModal;
