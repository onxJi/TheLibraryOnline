import React from 'react';

export const Categories = ({ categories }) => {
  return (
    <article className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Book Categories</h1>

        {categories.map((category) => (
          <div key={category.name} className="mb-12">
            {/* Category Title */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{category.name}</h2>

            {/* Scrollable Horizontal Container */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {category.books.map((book) => (
                <div
                  key={book.id}
                  className="flex-shrink-0 w-40 md:w-48 cursor-pointer"
                >
                  {/* Book Thumbnail */}
                  <img
                    src={book.image || 'https://via.placeholder.com/150'}
                    alt={book.title}
                    className="w-full h-60 md:h-72 object-cover rounded-lg shadow-md transition-transform hover:scale-105"
                  />
                  <h3 className="mt-2 text-sm font-semibold text-gray-800 line-clamp-2">
                    {book.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
