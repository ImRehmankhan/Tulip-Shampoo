import { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import { FaStar, FaTruck, FaBox, FaUndo } from "react-icons/fa";
export default function ProductPage() {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    whatsapp: "",
  });

  const product = {
    name: "Tulip Shampoo – 250ml",
    price: 1200,
    description:
      "Tulip Shampoo is made from 100% natural ingredients including Aloe Vera, Coconut Oil, and Tulip Extract to nourish, hydrate, and strengthen your hair. Free from parabens and harsh chemicals, perfect for daily use.",
    rating: 4.8,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1695048260818-a6af84769d3d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1686831889593-d49e5cf9300d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1643123158391-8543727c85f5?auto=format&fit=crop&w=800&q=80",
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleAddToCart = () => {
    setShowForm(true); // Open the form modal
  };

  const handleFormSubmit = (e) => {
  e.preventDefault();

  const phoneNumber = "+923425221720"; // Your WhatsApp number (with country code, no + sign)
  const message = `📦 New Order
-------------------
🛍 Product: ${product.name}
🔢 Quantity: ${quantity}
💰 Total: PKR ${(product.price * quantity).toLocaleString()}

👤 Name: ${formData.name}
🏠 Address: ${formData.address}
📧 Email: ${formData.email}
📱 WhatsApp: ${formData.whatsapp}`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // Open WhatsApp with message
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

  setShowForm(false);
};


  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-pink-700">Tulip Shampoo</h1>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="/" className="hover:text-pink-600 transition">
              Benefits
            </a>
            <a href="/" className="hover:text-pink-600 transition">
              Ingredients
            </a>
            <a href="/" className="hover:text-pink-600 transition">
              Reviews
            </a>
            <a href="/" className="hover:text-pink-600 transition">
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

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Slider */}
          <div className="w-full">
            <Slider {...settings}>
              {product.images.map((img, i) => (
                <div key={i} className="flex justify-center">
                  <img
                    src={img}
                    alt={product.name}
                    className="w-full max-w-md rounded-xl object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-base sm:text-lg ${
                    index < Math.round(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600 text-sm sm:text-base">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl sm:text-3xl font-semibold text-pink-600 mb-5">
              PKR {product.price.toLocaleString()}
            </p>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <div className="flex items-center border rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4 sm:px-6">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition shadow-lg text-sm sm:text-base"
              >
                Add to Cart
              </button>
            </div>

            {/* Info Row */}
            <div className="border-t border-gray-200 pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <FaTruck className="text-pink-600" /> Free Delivery Over PKR
                2,000
              </div>
              <div className="flex items-center gap-2">
                <FaBox className="text-pink-600" /> Delivery in 2–4 Days
              </div>
              <div className="flex items-center gap-2">
                <FaUndo className="text-pink-600" /> 7-Day Easy Returns
              </div>
            </div>
          </div>
        </div>
        {showForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-md w-full">
      <h2 className="text-xl font-bold mb-4 text-pink-700">Enter Delivery Details</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Full Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          required
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full border p-3 rounded"
        />
        <input
          type="tel"
          placeholder="WhatsApp Number"
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          required
          className="w-full border p-3 rounded"
        />
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  </div>
)}

      </section>
    </>
  );
}
