import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CheckoutPage from "./Pages/CheckoutPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
