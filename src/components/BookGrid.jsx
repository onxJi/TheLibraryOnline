import React from 'react';
import { BookCard } from './BookCard';

export const BookGrid = ({ books }) => {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          imageUrl={book.volumeInfo.imageLinks?.thumbnail}
          description={book.volumeInfo.description}
        />
      ))}
    </div>
  );
};