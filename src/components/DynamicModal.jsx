import React from "react";

export const DynamicModal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  width = "max-w-2xl", // Valor predeterminado para el ancho
  maxHeight = "max-h-[60vh]", // Valor predeterminado para la altura máxima
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Fondo oscuro */}
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Contenido del modal */}
      <div
        className={`relative bg-white rounded-lg shadow-sm dark:bg-gray-700 w-full ${width} mx-auto mt-8`}
      >
        {/* Encabezado del modal */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title || "Default Title"}
          </h3>
          <button
            type="button"
            className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
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

        {/* Cuerpo del modal con scroll interno */}
        <div className={`p-4 md:p-5 space-y-4 ${maxHeight} overflow-y-auto`}>
          {children}
        </div>

        {/* Pie del modal */}
        {footer && (
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
