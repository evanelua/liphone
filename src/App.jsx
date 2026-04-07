import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

// Pages
import Home from './pages/Home';
import JualHP from './pages/JualHP';
import BeliHP from './pages/BeliHP';
import Aksesoris from './pages/Aksesoris';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import TukarTambah from './pages/tukar-tambah';

// Scroll to top component
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

import { ProductProvider } from './context/ProductContext';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <ProductProvider>
      <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar isAdmin={isAdmin} />
            <ProductModal 
              product={selectedProduct} 
              onClose={handleCloseModal} 
            />
            
            <Routes>
                <Route path="/" element={<Home onProductSelect={handleProductSelect} />} />
                <Route path="/jual-hp" element={<JualHP />} />
                <Route path="/beli-hp" element={<BeliHP />} />
                <Route path="/aksesoris" element={<Aksesoris />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login onLogin={() => setIsAdmin(true)} />} />
                <Route path="/admin" element={<AdminDashboard isAdmin={isAdmin} onLogout={handleLogout} />} />
                <Route path="/tukar-tambah" element={<TukarTambah />} />
            </Routes>
            
            <Footer />
          </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
