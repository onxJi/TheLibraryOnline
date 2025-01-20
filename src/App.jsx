import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { Categories } from './pages/Categories';

function App() {
  const categories = [
    {
      name: 'Fiction',
      books: [
        { id: 1, title: 'Future Shock', image: 'http://books.google.com/books/content?id=TayGZxfYF_EC&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
        { id: 2, title: 'The Plague', image: 'http://books.google.com/books/content?id=KVGd-NabpW0C&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
        { id: 3, title: "Agamemnon's Daughter", image: 'http://books.google.com/books/content?id=kHC0z2yD464C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' },
      ],
    },
    {
      name: 'Non-Fiction',
      books: [
        { id: 1, title: 'Future Shock', image: 'http://books.google.com/books/content?id=TayGZxfYF_EC&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
        { id: 2, title: 'The Plague', image: 'http://books.google.com/books/content?id=KVGd-NabpW0C&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
        { id: 3, title: "Agamemnon's Daughter", image: 'http://books.google.com/books/content?id=kHC0z2yD464C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' },
      ],
    },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar  />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/categories' element={<Categories categories={categories}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;