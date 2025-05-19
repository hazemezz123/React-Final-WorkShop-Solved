import React from "react";
import HomePage from "./components/HomePage";
import ProductsList from "./components/ProductsList";
import NotFound from "./components/NotFound";
import Footer from "./components/footer";
import Navbar from "./components/Navbar.jsx";
import { ProductProvider } from "./context/ProductContext";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <ProductProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductsList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ProductProvider>
  );
}

export default App;
