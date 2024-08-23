import { KEY } from "../utilities/constants";

// Loading books from cart
export async function getCart() {
  const url = `${KEY}/cart`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error("Error:", err);
  }
}

// Adding books to cart
export async function addToCart(bookId) {
  try {
    const cart = await getCart();
    const existingBook = cart.find((item) => item.bookId === bookId);

    if (existingBook) {
      return await updateCart({ bookId, quantityChange: 1 });
    } else {
      const response = await fetch(`${KEY}/cart/add?bookId=${bookId}`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to add book to the cart");
      }
    }
  } catch (err) {
    throw new Error("Error:", err);
  }
}

// Removing books from cart
export async function removeFromCart(bookId) {
  try {
    const response = await fetch(`${KEY}/cart/remove/${bookId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to remove book from the cart");
    }
  } catch (err) {
    throw new Error("Error:", err);
  }
}

// Updating quantity for cart
export async function updateCart({ bookId, quantityChange }) {
  console.log({ bookId, quantityChange });
  try {
    const response = await fetch(`${KEY}/cart/update-quantity`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookId, quantityChange }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to update quantity");
    }
  } catch (err) {
    throw new Error("Error:", err);
  }
}
