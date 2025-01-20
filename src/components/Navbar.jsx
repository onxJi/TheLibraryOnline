import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';

export const Navbar = () => {
  const [localSearch, setLocalSearch] = useState('');
  const { setSearchTerm } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(localSearch); 
  };


  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <BookOpen size={24} />
          TheLibrary
        </Link>
        
        <form className="navbar__search" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              className="search-bar"
              placeholder="Search books..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
        </form>

        <Link to="/login" className="text-white hover:text-blue-300">
          Login
        </Link>
      </div>
    </nav>
  );
};