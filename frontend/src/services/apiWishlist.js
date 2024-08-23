import toast from "react-hot-toast";
import { KEY } from "../utilities/constants";

// Get books from wishlist
export async function getWishlist() {
  const url = `${KEY}/wishlist`;
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

// Adding books to wishlist
export async function addToWishlist(bookId) {
  try {
    const wishlist = await getWishlist();
    const existingBook = wishlist.find((item) => item.bookId === bookId);

    if (existingBook) {
      toast.error("Book is already in the wishlist!");
      return;
    } else {
      const response = await fetch(`${KEY}/wishlist/add?bookId=${bookId}`, {
        method: "POST",
      });

      toast.success("Book successfully added to wishlist");

      if (response.ok) {
        console.log("Book added to wishlist");
      } else {
        throw new Error("Failed to add wishlist data");
      }
    }
  } catch (err) {
    throw new Error("Error:", err);
  }
}

// Removing books from wishlist
export async function removeFromWishlist(bookId) {
  try {
    const response = await fetch(`${KEY}/wishlist/remove/${bookId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Book removed from wishlist");
    } else {
      throw new Error("Failed to remove book from wishlist");
    }
  } catch (err) {
    throw new Error("Error:", err);
  }
}
