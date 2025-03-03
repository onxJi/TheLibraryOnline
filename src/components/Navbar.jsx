import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Search, Menu } from "lucide-react";
import { useSearch } from "../hooks/useSearch";

export const Navbar = () => {
  const [localSearch, setLocalSearch] = useState("");
  const { setSearchTerm } = useSearch();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(localSearch);
  };

  return (
    <nav className="navbar bg-gray-800 text-white">
      {/* Contenedor principal */}
      <div className="navbar__container flex items-center justify-between pb-2">
        {/* Logo */}
        <Link to="/" className="navbar__logo flex items-center gap-2">
          <BookOpen size={24} />
          <span className="text-lg font-bold">TheLibrary</span>
        </Link>

        {/* Campo de búsqueda centrado en desktop */}
        <div className="hidden md:flex justify-center flex-grow">
          <form className="navbar__search" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                className="search-bar bg-gray-700 text-white px-4 py-2 rounded-md w-64"
                placeholder="Search books..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
              />
              <Search
                className="absolute right-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </form>
        </div>

        {/* Botón de hamburguesa (solo visible en móviles) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Menú principal (visible en desktop, oculto en móviles) */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/categories" className="hover:text-blue-300">
            Categories
          </Link>

          <Link to="/login" className="hover:text-blue-300">
            Login
          </Link>
        </div>
      </div>

      {/* Menú desplegable (visible solo en móviles) */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen opacity-100 p-4" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-700 space-y-4 `}
      >
        <form className="navbar__search" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              className="search-bar bg-gray-600 text-white px-4 py-2 rounded-md w-full"
              placeholder="Search books..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            <Search
              className="absolute right-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </form>

        <Link
          to="/categories"
          className="block text-white hover:text-blue-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Categories
        </Link>

        <Link
          to="/login"
          className="block text-white hover:text-blue-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};
