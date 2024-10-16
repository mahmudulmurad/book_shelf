import { useState } from "react";

const useWishlist = () => {
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  const toggleWishlist = (book) => {
    let updatedWishlist;

    // Check if the book is already in the wishlist
    const isWishlisted = wishlist.find((one) => one?.id === book?.id);

    if (isWishlisted) {
      // Remove the book if it's already in the wishlist
      updatedWishlist = wishlist.filter((data) => data?.id !== book?.id);
    } else {
      // Add the book to the wishlist if not present
      updatedWishlist = [...wishlist, book];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return { wishlist, toggleWishlist };
};

export default useWishlist;
