import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

function App() {
  const handleSearch = (term) => {
    // Search functionality will be handled in the HomePage component
    console.log('Searching for:', term);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;