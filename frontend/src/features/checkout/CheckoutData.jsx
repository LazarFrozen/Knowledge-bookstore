import { useLocation } from "react-router-dom";

function CheckoutData() {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || {
    cartItems: [],
    totalPrice: 0,
  };

  return (
    <div>
      <h2 className="mb-5 text-4xl font-bold">Your order:</h2>
      {cartItems.map((item) => (
        <ul key={item.id} className="z-10 w-searchWidth border-b-2">
          <div className="flex bg-white">
            <div className="p-2">
              <img src={item.image} alt="books" className="h-24 w-16" />
            </div>
            <div className="mt-2 h-20 w-80 px-6">
              <h3 className="font-extrabold">{item.title}</h3>
              <h4>{item.author}</h4>
              <p className="text-xl text-sideColor">{item.price}€</p>
              <p>quantity: {item.quantity}</p>
            </div>
          </div>
        </ul>
      ))}
      <h3 className="mt-5 text-4xl font-bold">Total: {totalPrice}€</h3>
    </div>
  );
}

export default CheckoutData;
