import { useState } from "react";
import axios from "axios";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;
  // Función genérica para realizar peticiones HTTP
  const request = async (url, method = "GET", body = null, config = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        url: `${apiUrl}${url}`,
        method,
        data: body, // Datos para POST, PUT, PATCH
        ...config,
      });

      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false); // Finalizar estado de carga
    }
  };

  return { data, loading, error, request };
};
