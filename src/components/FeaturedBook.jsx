import React from "react";
import { Star } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";
import { useState } from "react";
import { BookModal } from "./BookModal";
import { DynamicModal } from "./DynamicModal";
export const FeaturedBook = ({ book }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  if (!book) return null;

  const { price, imageUrl, title, author, description, status } = book;
  return (
    <div className="featured-book relative md:h-[70vh] h-auto mb-8 p-2">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            imageUrl ||
            "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1600"
          })`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto md:px-4 flex items-center">
        <div className="featured-book__content flex gap-8 items-center max-w-6xl md:flex-row flex-col">
          {/* Book Cover */}
          <div className="featured-book__image-container w-80 flex-shrink-0">
            <img
              src={
                imageUrl ||
                "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500"
              }
              alt={title}
              className="featured-book__image w-full h-[400px] rounded-lg shadow-2xl transform transition hover:scale-105"
            />
          </div>

          {/* Book Info */}
          <div className="featured-book__info text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            {author && (
              <p className="text-xl text-gray-300 mb-4">by {author}</p>
            )}

            {description && (
              <p className="text-lg text-gray-300 line-clamp-4">
                {description}
              </p>
            )}
            <div className="flex gap-[0.25rem]">
              <span className="inline-block mt-2 text-red-700 text-[0.85rem] px-2 py-1 bg-red-200 shadow-sm transform -skew-x-12 rounded-sm">
                Price: ${price}
              </span>
              <span className="inline-block mt-2 text-green-700  text-[0.85rem] px-2 py-1 bg-green-200 shadow-sm transform -skew-x-12 rounded-sm">
                {status}
              </span>
            </div>
            <div>
              <button
                className="mt-4 flex gap-1 px-4 py-2 bg-fuchsia-400 text-gray-800 hover:bg-fuchsia-700 hover:text-gray-200 font-semibold rounded-md shadow-md hover:shadow-lg transition"
                onClick={() => setSelectedBook(book)}
              >
                <ShoppingCart />
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <DynamicModal
        title="Detail Book"
        isOpen={!!selectedBook}
        width="max-w-3xl" // Personaliza el ancho
        maxHeight="max-h-[80vh]"
        onClose={() => setSelectedBook(null)}
      >
        <BookModal book={selectedBook} />
      </DynamicModal>
    </div>
  );
};
