import React from "react";
import { X } from "lucide-react";

export const BookModal = ({ book, onClose }) => {
  if (!book) return null;

  const {
    title,
    author,
    publicationDate,
    imageUrl,
    category,
    description,
    price,
    status,
  } = book;

  return (
    <div className="flex flex-col md:flex-row">
      {/* Book Cover */}
      <div className="md:w-1/3 p-6 flex-shrink-0">
        <div className="relative w-full h-auto rounded-lg shadow-xl transform rotate-x-[20deg] origin-bottom perspective-[1000px] transition-transform hover:scale-105">
          <img
            src={
              imageUrl ||
              "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500"
            }
            alt={title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex gap-[0.25rem]">
          <span className="inline-block mt-2 text-red-700 text-[0.85rem] px-2 py-1 bg-red-100 shadow-sm transform -skew-x-12 rounded-sm">
            Price: ${price}
          </span>
          <span className="inline-block mt-2 text-green-700  text-[0.85rem] px-2 py-1 bg-green-100 shadow-sm transform -skew-x-12 rounded-sm">
            {status}
          </span>
        </div>
      </div>

      {/* Book Details */}
      <div className="md:w-2/3 p-6 overflow-y-auto max-h-[80vh]">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>

        {author && <p className="text-lg text-gray-600 mb-4">by {author}</p>}

        {publicationDate && (
          <p className="text-gray-600 mb-4">Published: {publicationDate}</p>
        )}

        {category && (
          <div className="mb-4">
            <span
              key={category}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {category.categoryName}
            </span>
          </div>
        )}

        {description && (
          <div className="prose prose-sm">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};
