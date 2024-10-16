/* eslint-disable array-callback-return */
import React, { useCallback, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import useApiRequest from "../../hook/api";
import BookCard from "../../components/card";
import Pagination from "../../components/pagination/pagination";
import Layout from "../../layout";
import Loading from "../../components/loading";
import useWishlist from "../../hook/useWishlist";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [url, setUrl] = useState(`${process.env.REACT_APP_DATA_URL}`);
  const currentPage = url.match(/page=(\d+)/)?.[1] || 1;

  const { data, loading, error } = useApiRequest(url, "GET");

  const { wishlist, toggleWishlist } = useWishlist();

  const handlePageChange = (url) => {
    setUrl(url);
  };

  const debouncedSearch = useCallback(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery) {
        const pageUrl = `${process.env.REACT_APP_DATA_URL}?search=${searchQuery}`;
        setUrl(pageUrl);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    const cleanup = debouncedSearch();
    return cleanup;
  }, [searchQuery, debouncedSearch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Layout>Error: {error}</Layout>;
  }

  return (
    <>
      <div className="home-container">
        <h1>Books Gallery</h1>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">All Genres</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>
        <ul className="list-style">
          {data?.results?.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          ))}
        </ul>
      </div>
      <Pagination
        next={data?.next}
        previous={data?.previous}
        count={data?.count}
        currentPage={Number(currentPage)}
        onPageChange={handlePageChange}
        url={url}
      />
    </>
  );
}
