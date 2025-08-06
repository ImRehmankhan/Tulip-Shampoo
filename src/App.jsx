import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProductPage from "./Pages/ProductPage";
import Header from './Components/Header'
import Footer from './Components/Footer'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/tulip-shampoo" element={<ProductPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
