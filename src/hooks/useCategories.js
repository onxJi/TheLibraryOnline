import { useState, useEffect } from "react";
import axios from "axios";

export const useCategories = (searchTerm = "") => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const query = searchTerm || "";
        const response = await axios.get(
          `${apiUrl}/library-searcher/categories`
        );
        setCategories(response.data || []);
        setError("");
      } catch (err) {
        setError("Error fetching books");
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [searchTerm]);

  return { categories, loading, error };
};
