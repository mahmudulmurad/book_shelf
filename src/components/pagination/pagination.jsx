import React from "react";
import "./style.css";

export default function Pagination({
  next,
  previous,
  count,
  currentPage,
  onPageChange,
  url,
}) {
  const totalPages = Math.ceil(count / 32); // Calculate total pages

  // Helper function to create an array of page numbers with ellipsis of dots
  const getPageNumbers = () => {
    const pages = [];
    const maxPageLinks = 5; // Number of page links to display in the middle

    // Always show first page, last page, and a few pages around the current page
    if (currentPage > maxPageLinks) {
      pages.push(1, "...");
    }

    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage + 2 < totalPages) {
      pages.push("...", totalPages);
    }

    return pages;
  };

  // Event handlers for page changes
  const nextPage = () => {
    if (next) {
      onPageChange(next);
    }
  };

  const prevPage = () => {
    if (previous) {
      onPageChange(previous);
    }
  };

  // Handle specific page number click
  const handlePageClick = (pageNumber) => {
    const urlObj = new URL(url);
    urlObj.searchParams.set("page", pageNumber);
    const pageUrl = urlObj.toString();
    onPageChange(pageUrl);
  };

  return (
    <div className="pagination-main">
      <div className="pagination-container">
        <button onClick={prevPage} disabled={!previous}>
          Previous
        </button>

        <div className="page-info">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && handlePageClick(page)}
              disabled={currentPage === page || page === "..."}
              className={currentPage === page ? "active-page" : ""}
            >
              {page}
            </button>
          ))}
        </div>

        <button onClick={nextPage} disabled={!next}>
          Next
        </button>
      </div>
    </div>
  );
}
