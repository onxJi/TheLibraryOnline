import React, { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorMessage } from "../components/ErrorMessage";
import { FeaturedBook } from "../components/FeaturedBook";
import { BookList } from "../components/BookList";
import { useSearch } from "../hooks/useSearch";

export const HomePage = () => {
  const { searchTerm } = useSearch();

  // Buscar libros similares basados en el término de búsqueda
  const {
    books: similarBooks,
    loading: loadingSimilar,
    error: errorSimilar,
  } = useBooks(searchTerm);

  // Obtener el libro destacado y su categoría
  const featuredBook = similarBooks.find((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const category = featuredBook?.category?.categoryName || "";

  // libros relacionados por categoría
  const {
    books: categoryBooks,
    loading: loadingCategory,
    error: errorCategory,
  } = useBooks(category ? `category:${category}` : "");
  return (
    <div className="min-h-screen bg-white">
      {(loadingSimilar || loadingCategory) && <LoadingSpinner />}
      {(errorSimilar || errorCategory) && (
        <ErrorMessage message={errorSimilar || errorCategory} />
      )}
      {!loadingSimilar && !errorSimilar && (
        <>
          <FeaturedBook book={featuredBook} />
          <div className="container mx-auto px-4">
            <BookList title="Similar Books" books={similarBooks.slice(1, 9)} />
            {category && (
              <BookList
                title={`Books in "${category}"`}
                books={categoryBooks.slice(0, 8)}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
