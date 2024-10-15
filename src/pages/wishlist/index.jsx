import React from "react";
import Layout from "../../layout";
import BookCard from "../../components/card";

export function Wishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  console.log(wishlist);

  return (
    <Layout>
      <h1>Wishlist's Book Gallery</h1>

      {wishlist?.map((book) => (
        <BookCard key={book.id} book={book} wishlist={wishlist} />
      ))}
    </Layout>
  );
}
