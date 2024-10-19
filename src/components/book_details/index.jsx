import React from "react";
import "./style.css";

const BookDetails = ({ book }) => {
  const {
    title,
    authors,
    subjects,
    bookshelves,
    languages,
    formats,
    download_count,
  } = book;

  const authorNames = authors
    ?.map(
      (author) =>
        `${author?.name} (${author?.birth_year} - ${author?.death_year})`
    )
    .join(", ");

  return (
    <div className="container">
      <h1>{title}</h1>
      <img src={formats["image/jpeg"]} alt={title} className="image" />
      <p>
        <strong>Author:</strong> {authorNames}
      </p>
      <p>
        <strong>Subjects:</strong> {subjects?.join(", ")}
      </p>
      {bookshelves?.length > 0 && (
        <p>
          <strong>Bookshelves:</strong> {bookshelves?.join(", ")}
        </p>
      )}
      <p>
        <strong>Language:</strong> {languages?.join(", ")}
      </p>
      <p>
        <strong>Download Count:</strong> {download_count}
      </p>
      <h3>Available Formats:</h3>
      <ul>
        <li>
          <a
            href={formats["text/html"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Online (HTML)
          </a>
        </li>
        <li>
          <a
            href={formats["application/epub+zip"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download EPUB
          </a>
        </li>
        <li>
          <a
            href={formats["application/x-mobipocket-ebook"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download MOBI
          </a>
        </li>
        <li>
          <a
            href={formats["text/plain; charset=us-ascii"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Plain Text
          </a>
        </li>
        <li>
          <a
            href={formats["application/octet-stream"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download ZIP
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BookDetails;
