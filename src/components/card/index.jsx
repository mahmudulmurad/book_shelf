import React from "react";
import "./style.css";

const BookCard = ({ book, wishlist, toggleWishlist }) => {
  const { id, title, subjects, formats } = book;

  const imageUrl = formats["image/jpeg"];
  const isWishlisted = wishlist.includes(id);

  return (
    <div className="book-card">
      {/* Wishlist toggle button */}
      <span
        className={`wishlist-icon ${isWishlisted ? "liked" : ""}`}
        onClick={() => toggleWishlist(id)}
      >
        {isWishlisted ? "❤️" : "♡"}
      </span>

      {/* Book image */}
      <img src={imageUrl} alt={title} className="book-image" />

      {/* Book information */}
      <div className="book-info">
        <h3>{title}</h3>
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Genres:</strong> {subjects.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
