/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import useApiRequest from "../../hook/api";
import BookCard from "../../components/card";
import Pagination from "../../components/pagination/pagination";
import Layout from "../../layout";
import Loading from "../../components/loading";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  // Use custom hook to fetch books based on the current page
  const { data, loading, error } = useApiRequest(
    `https://gutendex.com/books?page=${page}&items=${itemsPerPage}`,
    "GET"
  );
  const books = data?.results;
  // Search filtering
  const filteredBooks = books?.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (genre ? book.subjects.includes(genre) : true)
  );

  // Handle wishlist toggle
  const handleWishlistToggle = (book) => {
    let updatedWishlist;

    // Find if the book is already in the wishlist by checking the id
    const isWishlisted = wishlist.find((one) => one?.id === book?.id);

    if (isWishlisted) {
      // Remove book if it's already in the wishlist
      updatedWishlist = wishlist.filter((data) => data?.id !== book?.id);
    } else {
      // Add book to the wishlist if not present
      updatedWishlist = [...wishlist, book];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Pagination handler
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    setPage(1);
  }, [searchQuery, genre]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Layout>Error: {error}</Layout>;
  }

  return (
    <Layout>
      <h1>Books Gallery</h1>

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
    </Layout>
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
