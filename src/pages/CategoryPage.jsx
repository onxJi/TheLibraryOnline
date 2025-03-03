import React from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "../hooks/useBooks";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ErrorMessage } from "../components/ErrorMessage";
import { BookGrid } from "../components/BookGrid";

export const CategoryPage = () => {
  const { category } = useParams();
  const { books, loading, error } = useBooks(`category:${category}`);

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mt-8">{category} Books</h1>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <BookGrid books={books} />}
    </div>
  );
};
