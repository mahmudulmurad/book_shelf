import React from "react";
import Layout from "../../layout";
import { useParams } from "react-router-dom";
import useApiRequest from "../../hook/api";
import Loading from "../../components/loading";
import BookDetails from "../../components/book_details";

export function Details() {
  const { id } = useParams();
  const {
    data: book,
    loading,
    error,
  } = useApiRequest(`https://gutendex.com/books/${id}`, "GET");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Layout>Error: {error}</Layout>;
  }

  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
}
