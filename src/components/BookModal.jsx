import React from 'react';
import { X } from 'lucide-react';

export const BookModal = ({ book, onClose }) => {
  if (!book) return null;

  const { volumeInfo } = book;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Book Cover */}
          <div className="md:w-1/3 p-6 flex-shrink-0">
            <img
              src={volumeInfo.imageLinks?.thumbnail || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500'}
              alt={volumeInfo.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Book Details */}
          <div className="md:w-2/3 p-6 overflow-y-auto max-h-[80vh]">
            <h2 className="text-3xl font-bold mb-4">{volumeInfo.title}</h2>
            
            {volumeInfo.authors && (
              <p className="text-lg text-gray-600 mb-4">
                by {volumeInfo.authors.join(', ')}
              </p>
            )}

            {volumeInfo.publisher && (
              <p className="text-gray-600 mb-2">
                Publisher: {volumeInfo.publisher}
              </p>
            )}

            {volumeInfo.publishedDate && (
              <p className="text-gray-600 mb-4">
                Published: {volumeInfo.publishedDate}
              </p>
            )}

            {volumeInfo.categories && (
              <div className="mb-4">
                {volumeInfo.categories.map((category) => (
                  <span
                    key={category}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            {volumeInfo.description && (
              <div className="prose prose-sm">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {volumeInfo.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};