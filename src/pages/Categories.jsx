import React from "react";
import { Link } from "react-router-dom";
import { useCategories } from "../hooks/useCategories";

const bookCategories = [
  "Fiction",
  "Science",
  "Fantasy",
  "Romance",
  "Mystery",
  "Biography",
  "History",
  "Thriller",
  "Self-help",
  "Children",
  "Young Adult",
  "Horror",
  "Comics",
];

export const Categories = () => {
  // usar el useCategories hook para obtener las categorías

  const { categories, loading, error } = useCategories();

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8">An error occurred</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mt-8">Book Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8 px-4">
        {categories.map((category) => (
          <Link
            key={category.categoryId}
            to={`/category/${category.categoryName}`}
            className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition"
          >
            <div className="text-lg font-medium text-gray-800">
              {category.categoryName}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
