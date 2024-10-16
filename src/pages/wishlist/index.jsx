import React from "react";
import BookCard from "../../components/card";
import "./style.css";
import useWishlist from "../../hook/useWishlist";

export function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  return (
    <div className="wishlist-container">
      <h1>Wishlist's Book Gallery</h1>
      <div className="card-container">
        {wishlist?.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
          />
        ))}
      </div>
    </div>
  );
}
