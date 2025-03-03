import React from "react";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";
import { useState } from "react";
import { RentalForm } from "./RentalForm";
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

  const [isFormVisible, setIsFormVisible] = useState(false); // Estado para mostrar el formulario
  const [currentStatus, setCurrentStatus] = useState(status);
  // Función para manejar el clic en "Rent Now"
  const handleRentNowClick = () => {
    if (status === "OPEN") {
      setIsFormVisible(true); // Mostrar el formulario si el estado es "OPEN"
    } else {
      toast.error("This book is not available for rent.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleStatusUpdate = (newStatus) => {
    setCurrentStatus(newStatus); // Actualizar el estado local del libro
    setIsFormVisible(false); // Cerrar el formulario
    toast.success("Book rented successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
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

        <button
          className="mt-4 flex gap-1 px-4 py-2 bg-fuchsia-400 text-gray-800 hover:bg-fuchsia-700 hover:text-gray-200 font-semibold rounded-md shadow-md hover:shadow-lg transition"
          onClick={handleRentNowClick}
        >
          <ShoppingCart />
          Rent Now
        </button>
      </div>

      {/* Formulario de renta */}
      {isFormVisible && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-md">
          <div className="flex">
            <h3 className="text-lg font-semibold mb-4">Rental Form</h3>
            <button
              type="button"
              className="text-gray-600 bg-transparent ml-auto hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setIsFormVisible(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <RentalForm book={book} onStatusUpdate={handleStatusUpdate} />
        </div>
      )}
    </div>
  );
};

// formulario
