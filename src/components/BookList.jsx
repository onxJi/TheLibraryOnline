import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { BookModal } from './BookModal';

export const BookList = ({ title, books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const scrollContainerRef = useRef(null);

  // Función para desplazar horizontalmente
  const handleScroll = (direction) => {
    const scrollAmount = 300; // Cantidad de desplazamiento en píxeles
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="book-list mb-12 relative">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>

      <div className="relative">
        {/* Botón para desplazarse a la izquierda */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full hover:bg-gray-100"
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Contenedor de libros con scroll horizontal */}
        <div
          ref={scrollContainerRef}
          className="book-list__container flex gap-4 overflow-x-auto pb-4 no-scrollbar relative"
        >
          {books.map((book) => (
            <div
              key={book.id}
              className="book-list__item flex-shrink-0 w-48 cursor-pointer"
              onClick={() => setSelectedBook(book)}
            >
              <img
                src={
                  book.volumeInfo.imageLinks?.thumbnail ||
                  'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300'
                }
                alt={book.volumeInfo.title}
                className="w-full h-72 object-cover rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl"
              />
              <h3 className="mt-2 text-sm font-semibold text-gray-800 line-clamp-2">
                {book.volumeInfo.title}
              </h3>
            </div>
          ))}
          
        {/* Botón para desplazarse a la derecha */}
        <button
          className="absolute right-0 top-1/2  z-10 bg-white p-2 shadow-md rounded-full hover:bg-gray-100"
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
        </div>

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
