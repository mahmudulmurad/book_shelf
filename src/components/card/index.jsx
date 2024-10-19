import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const BookCard = ({ book, wishlist, toggleWishlist }) => {
  const { id, title, subjects, formats, authors } = book;

  const imageUrl = formats["image/jpeg"];
  const isWishlisted = wishlist.find((one) => one?.id === id);

  return (
    <div className="book-card">
      <div className="wishlist-icon-container">
        <div>ID:{id}</div>
        <div
          className={`wishlist-icon ${isWishlisted ? "liked" : ""}`}
          onClick={() => toggleWishlist(book)}
        >
          {isWishlisted ? "❤️" : "♡"}
        </div>
      </div>
      <img src={imageUrl} alt={title} className="book-image" />

      <h4 className="title">{title}</h4>

      <div className="author">
        <strong>Author:</strong> {authors[0]?.name}({authors[0]?.birth_year}-
        {authors[0]?.death_year})
      </div>
      <div className="genre">
        <strong>Genres:</strong> {subjects.join(", ")}
      </div>
      <Link className="forward-btn" to={`/${id}`}>
        Details
      </Link>
    </div>
  );
};

export default BookCard;
