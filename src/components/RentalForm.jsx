import React, { useState } from "react";
import { toast } from "react-toastify";
import { useFetch } from "../hooks/useFetch";

export const RentalForm = ({ book, onStatusUpdate }) => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
  });

  const [errors, setErrors] = useState({}); // Estado para almacenar errores
  const { request, loading, error } = useFetch();
  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validar el formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.startDate) {
      newErrors.startDate = "Start date is required.";
    }

    if (!formData.endDate) {
      newErrors.endDate = "End date is required.";
    } else if (new Date(formData.startDate) > new Date(formData.endDate)) {
      newErrors.endDate = "End date must be after the start date.";
    }

    setErrors(newErrors); // Actualizar los errores
    return Object.keys(newErrors).length === 0; // Retorna `true` si no hay errores
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const formattedData = {
        startDate: formData.startDate ? `${formData.startDate}T00:00:00` : null,
        endDate: formData.endDate ? `${formData.endDate}T00:00:00` : null,
      };
      // Realizar la solicitud PUT usando el custom hook
      await request(`/library-operator/rentals`, "POST", {
        title: book.title,
        bookId: book.bookId,
        ...formattedData,
        status: "RENTED",
      });

      // Notificar al padre (BookModal) sobre el cambio de estado
      onStatusUpdate("RENTED");

      // Mostrar un mensaje de éxito
      toast.success("Book rented successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      console.error("Error updating book status:", err);
      toast.error("An error occurred while renting the book.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Start Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className={`mt-1 block w-full px-3 py-2 border ${
            errors.startDate ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {errors.startDate && (
          <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
        )}
      </div>

      {/* End Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          End Date
        </label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className={`mt-1 block w-full px-3 py-2 border ${
            errors.endDate ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        {errors.endDate && (
          <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-fuchsia-400 text-gray-800 font-semibold rounded-md shadow-md hover:bg-fuchsia-700 hover:text-gray-200 transition"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Rental"}
      </button>
    </form>
  );
};
