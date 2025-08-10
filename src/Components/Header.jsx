import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaBars, FaTimes, FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const estimatedTotal = cart.reduce(
    (total, item) => total + item.salePrice * item.quantity,
    0
  );

  return (
    <header className="bg-white shadow-sm top-0 sticky z-50 relative">
      {/* Top strip */}
      <div className="bg-pink-600 h-14 flex items-center justify-center text-white px-4">
        <p className="font-bold text-sm sm:text-lg tracking-wide animate-pulse text-center">
          🎉 SUPER SALE! |{" "}
          <span className="underline decoration-yellow-400">50% OFF</span> +
          ADDITIONAL DISCOUNT ON BUNDLES 🎁
        </p>
      </div>

      {/* Main header */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-xl sm:text-2xl font-bold text-pink-700">
          TulipShampoo.PK
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden sm:block">
          <div className="flex justify-center gap-6 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-pink-600">Home</Link>
            <Link to="/products" className="hover:text-pink-600">Products</Link>
            <Link to="/contact" className="hover:text-pink-600">Contact</Link>
          </div>
        </nav>

        {/* Right Icons (Desktop) */}
        <div className="hidden sm:flex items-center gap-4 relative">
          <FaUser className="text-gray-600 cursor-pointer" size={18} />
          <div className="relative cursor-pointer" onClick={() => setCartOpen(true)}>
            <FaShoppingCart className="text-gray-600" size={18} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-4">
          <div className="relative cursor-pointer" onClick={() => setCartOpen(true)}>
            <FaShoppingCart className="text-gray-600" size={18} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-200 bg-white shadow-md">
          <div className="flex flex-col items-center gap-4 px-4 py-4 text-gray-700 text-sm font-medium">
            <Link to="/" className="hover:text-pink-600">Home</Link>
            <Link to="/products" className="hover:text-pink-600">Products</Link>
            <Link to="/contact" className="hover:text-pink-600">Contact</Link>
            <button
              onClick={() => navigate("/products")}
              className="bg-pink-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-pink-700 transition transform hover:scale-105 text-lg"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div className="flex-1 bg-black bg-opacity-40" onClick={() => setCartOpen(false)}></div>

          {/* Sidebar */}
          <div className="w-80 bg-white p-4 shadow-lg overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button onClick={() => setCartOpen(false)}>
                <FaTimes size={20} />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="flex items-center gap-3 border-b pb-3 mb-3">
                  <img src={item.img} alt={item.name} className="w-14 h-14 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <p className="text-pink-600 font-semibold">
                      PKR {item.salePrice}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span style={{ color: "black" }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                        title="Remove item"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Estimated Total */}
            {cart.length > 0 && (
              <>
                <div className="mt-4 border-t pt-4">
                  <p className="font-bold">
                    Estimated Total: Rs {estimatedTotal.toLocaleString()} PKR
                  </p>
                  <p className="text-xs text-gray-500">
                    Taxes, discounts and shipping calculated at checkout.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setCartOpen(false);
                    navigate("/checkout");
                  }}
                  className="w-full mt-4 bg-pink-600 text-white py-3 rounded-lg shadow hover:bg-pink-700"
                >
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
