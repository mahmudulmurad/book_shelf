import { useState } from "react";

const useWishlist = () => {
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  const toggleWishlist = (book) => {
    let updatedWishlist;

    // check if the book is already in the wishlist
    const isWishlisted = wishlist.find((one) => one?.id === book?.id);

    if (isWishlisted) {
      // remove the book if it's already in the wishlist
      updatedWishlist = wishlist.filter((data) => data?.id !== book?.id);
    } else {
      // add the book to the wishlist if not present
      updatedWishlist = [...wishlist, book];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return { wishlist, toggleWishlist };
};

export default useWishlist;
