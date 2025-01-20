import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { BookModal } from './BookModal';

export const BookList = ({ title, books }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="book-list mb-12">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <ChevronRight className="ml-2" />
      </div>
      <div className="book-list__container flex gap-4 overflow-x-auto pb-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="book-list__item flex-shrink-0 w-48 cursor-pointer"
            onClick={() => setSelectedBook(book)}
          >
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300'}
              alt={book.volumeInfo.title}
              className="w-full h-72 object-cover rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl"
            />
            <h3 className="mt-2 text-sm font-semibold text-gray-800 line-clamp-2">
              {book.volumeInfo.title}
            </h3>
          </div>
        ))}
      </div>

      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};