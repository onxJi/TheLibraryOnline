import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { Categories } from './pages/Categories';
import { CategoryPage } from './pages/CategoryPage';

function App() {


  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar  />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
           <Route path="/categories" element={<Categories />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;