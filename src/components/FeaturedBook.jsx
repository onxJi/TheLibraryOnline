import React from 'react';
import { Star } from 'lucide-react';

export const FeaturedBook = ({ book }) => {
  if (!book) return null;

  const { volumeInfo } = book;
  const rating = volumeInfo.averageRating || 4.5; // Default rating if none provided
  
  return (
    <div className="featured-book relative h-[70vh] mb-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${volumeInfo.imageLinks?.thumbnail || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=1600'})`,
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
              src={volumeInfo.imageLinks?.thumbnail || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500'}
              alt={volumeInfo.title}
              className="featured-book__image w-full h-[400px] rounded-lg shadow-2xl transform transition hover:scale-105"
            />
          </div>

          {/* Book Info */}
          <div className="featured-book__info text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">{volumeInfo.title}</h1>
            {volumeInfo.authors && (
              <p className="text-xl text-gray-300 mb-4">
                by {volumeInfo.authors.join(', ')}
              </p>
            )}

            {volumeInfo.description && (
              <p className="text-lg text-gray-300 line-clamp-4">
                {volumeInfo.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};