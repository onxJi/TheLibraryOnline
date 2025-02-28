import { useState, useEffect } from 'react';
import axios from 'axios';

export const useBooks = (searchTerm = '') => {
   const apiUrl = import.meta.env.VITE_API_URL;
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const query = searchTerm || '';
        const response = await axios.get(
          `${apiUrl}/books/search?text=${query}`
        );
        setBooks(response.data || []);
        setError('');
      } catch (err) {
        setError('Error fetching books');
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchTerm]);

  return { books, loading, error };
};