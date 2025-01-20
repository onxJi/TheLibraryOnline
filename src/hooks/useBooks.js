import { useState, useEffect } from 'react';
import axios from 'axios';

export const useBooks = (searchTerm = '') => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const query = searchTerm || 'subject:fiction';
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
        );
        setBooks(response.data.items || []);
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