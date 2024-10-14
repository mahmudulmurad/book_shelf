import React from "react";

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div style={styles.pagination}>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

// Inline styles
const styles = {
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
};
