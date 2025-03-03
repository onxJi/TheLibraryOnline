
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const RentedBook = ({ book }) => {
  const { request, data, loading, error } = useFetch();

  // Función para obtener el libro alquilado
  const getRentalBook = async () => {
    await request(`/library-operator/rentals/byBookId/${book.bookId}`, "GET");
  };

  // Llamar a la función cuando el componente se monta
  useEffect(() => {
    getRentalBook();
  }, [book.bookId]); // Dependencia: se ejecuta cuando cambia el bookId

  return (
    <div className="mt-2 flex border-2 rounded-md p-4 flex-col">
      {/* Mostrar "Loading..." mientras se cargan los datos */}
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : error ? (
        // Mostrar mensaje de error si ocurre uno
        <div className="text-center text-red-500">Error loading data.</div>
      ) : !data ? (
        // Mostrar mensaje si no hay datos disponibles
        <div className="text-center text-gray-500">
          No rental data available.
        </div>
      ) : (
        // Mostrar las fechas si los datos están disponibles
        <div>
          <span>Start Date: {data.startDate || "N/A"}</span>
          <br />
          <span>End Date: {data.endDate || "N/A"}</span>
        </div>
      )}
    </div>
  );
};