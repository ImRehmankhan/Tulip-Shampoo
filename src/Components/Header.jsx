import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-pink-700">Tulip Shampoo</h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#benefits" className="hover:text-pink-600 transition">
            Benefits
          </a>
          <a href="#ingredients" className="hover:text-pink-600 transition">
            Ingredients
          </a>
          <a href="#reviews" className="hover:text-pink-600 transition">
            Reviews
          </a>
          <a href="#contact" className="hover:text-pink-600 transition">
            Contact
          </a>
        </nav>

        <button
          onClick={() => navigate("/product/tulip-shampoo")}
          className="bg-pink-600 text-white px-5 py-2 rounded-full shadow hover:bg-pink-700 transition"
        >
          Buy Now
        </button>
        
      </div>
    </header>
  );
}
