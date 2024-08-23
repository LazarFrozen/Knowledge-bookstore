import toast from "react-hot-toast";
import { KEY } from "../utilities/constants";

// Submitting order
export async function addToOrders(event, navigate, cartItems, totalPrice) {
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const orderData = {
    ...data,
    cartItems,
    totalPrice,
  };

  event.preventDefault();
  try {
    const response = await fetch(`${KEY}/orders/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      toast.success("items purchased successfully!");
      event.target.reset();

      navigate("/home");
    } else {
      toast.error("Failed to purchase items.");
    }
  } catch (err) {
    throw new Error("Error:", err);
  }
}
