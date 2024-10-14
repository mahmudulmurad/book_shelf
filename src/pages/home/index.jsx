import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import useApiRequest from "../../hook/api";
import BookCard from "../../components/card";
import Pagination from "../../components/pagination/pagination";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  // Use custom hook to fetch books based on the current page
  const {
    data: books,
    loading,
    error,
  } = useApiRequest(
    `https://gutendex.com/books?page=${page}&items=${itemsPerPage}`,
    "GET"
  );

  // Search filtering
  const filteredBooks = books?.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (genre ? book.subjects.includes(genre) : true)
  );

  // Handle wishlist toggle
  const handleWishlistToggle = (bookId) => {
    let updatedWishlist;
    if (wishlist.includes(bookId)) {
      updatedWishlist = wishlist.filter((id) => id !== bookId);
    } else {
      updatedWishlist = [...wishlist, bookId];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Pagination handler
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    // Reset page to 1 on search or genre change
    setPage(1);
  }, [searchQuery, genre]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Gutenberg Books</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Genre Filter Dropdown */}
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">All Genres</option>
        {/* Dynamically populate genres, this can be enhanced */}
        <option value="Fiction">Fiction</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
      </select>

      {/* Book List */}
      <ul style={styles.bookList}>
        {filteredBooks?.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            wishlist={wishlist}
            toggleWishlist={handleWishlistToggle}
          />
        ))}
      </ul>

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalItems={books?.length || 0}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

// Inline styles
const styles = {
  bookList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
  },
};
