import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { BookModal } from "./BookModal";
import { DynamicModal } from "./DynamicModal";

export const BookList = ({ title, books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Función para desplazar horizontalmente
  const handleScroll = (direction) => {
    const scrollAmount = 300; // Cantidad de desplazamiento en píxeles
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Verificar la posición del scroll para mostrar/ocultar botones
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      // Mostrar el botón izquierdo si hay espacio a la izquierda
      setShowLeftButton(scrollLeft > 0);

      // Mostrar el botón derecho si hay espacio a la derecha
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  // Efecto para verificar la posición inicial y actualizar al cambiar el tamaño de la ventana
  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      checkScrollPosition();
      container.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);

      return () => {
        if (container) {
          container.removeEventListener("scroll", checkScrollPosition);
        }
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  return (
    <div className="book-list mb-12 relative">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>

      {/* Botón para desplazarse a la izquierda */}
      {showLeftButton && (
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full hover:bg-gray-100"
          onClick={() => handleScroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <div className="relative">
        {/* Contenedor de libros con scroll horizontal */}
        <div
          ref={scrollContainerRef}
          className="book-list__container flex gap-4 overflow-x-auto no-scrollbar relative p-4"
        >
          {books.map((book) => (
            <div
              key={book.bookId}
              className="book-list__item flex-shrink-0 w-48 cursor-pointer"
              onClick={() => setSelectedBook(book)}
            >
              <img
                src={
                  book.imageUrl ||
                  "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300"
                }
                alt={book.title}
                className="w-full h-72 object-cover rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl"
              />
              <h3 className="mt-2 text-sm font-semibold text-gray-800 line-clamp-2">
                {book.title}
              </h3>
            </div>
          ))}
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

      {/* Botón para desplazarse a la derecha */}
      {showRightButton && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full hover:bg-gray-100"
          onClick={() => handleScroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
};
