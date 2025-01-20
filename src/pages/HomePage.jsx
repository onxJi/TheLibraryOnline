import React, { useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { FeaturedBook } from '../components/FeaturedBook';
import { BookList } from '../components/BookList';

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { books, loading, error } = useBooks(searchTerm);

  // Get featured book (first book from the list)
  const featuredBook = books[0];

  // Group remaining books
  const remainingBooks = books.slice(1);
  const fictionBooks = remainingBooks.slice(0, 8);
  const nonFictionBooks = remainingBooks.slice(8, 16);

  return (
    <div className="min-h-screen bg-white">
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && (
        <>
          <FeaturedBook book={featuredBook} />
          <div className="container mx-auto px-4">
            <BookList title="Popular Fiction" books={fictionBooks} />
            <BookList title="Non-Fiction Picks" books={nonFictionBooks} />
          </div>
        </>
      )}
    </div>
  );
};