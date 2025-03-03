import React from "react";

export const BookGrid = ({ books }) => {
  return (
    <div className="mt-8 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition"
          >
            <img
              src={
                book.imageUrl ||
                "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500"
              }
              alt={book.title}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="text-sm font-medium text-gray-800 text-center line-clamp-2">
              {book.title}
            </h3>
            <p className="text-xs text-gray-500 text-center">
              {book.author || "Unknown Author"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
