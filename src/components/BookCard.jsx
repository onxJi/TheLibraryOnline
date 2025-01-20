import React from 'react';

export const BookCard = ({
  title,
  authors = [],
  imageUrl,
  description,
}) => {
  return (
    <div className="book-card">
      <img
        src={imageUrl || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500'}
        alt={title}
        className="book-card__image"
      />
      <div className="book-card__content">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {authors.length > 0 && (
          <p className="text-gray-600 mb-2">{authors.join(', ')}</p>
        )}
        {description && (
          <p className="text-gray-700 text-sm line-clamp-3">{description}</p>
        )}
      </div>
    </div>
  );
};