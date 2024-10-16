import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const BookCard = ({ book, wishlist, toggleWishlist }) => {
  const { id, title, subjects, formats, authors } = book;

  const imageUrl = formats["image/jpeg"];
  const isWishlisted = wishlist.find((one) => one?.id === id);

  return (
    <div className="book-card">
      <span
        className={`wishlist-icon ${isWishlisted ? "liked" : ""}`}
        onClick={() => toggleWishlist(book)}
      >
        {isWishlisted ? "❤️" : "♡"}
      </span>
      <img src={imageUrl} alt={title} className="book-image" />
      <div className="book-info">
        <h3>{title}</h3>
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Author:</strong> {authors[0]?.name}({authors[0]?.birth_year}-
          {authors[0]?.death_year})
        </p>
        <p>
          <strong>Genres:</strong> {subjects.join(", ")}
        </p>
        <Link to={`/${id}`}>Details</Link>
      </div>
    </div>
  );
};

export default BookCard;
