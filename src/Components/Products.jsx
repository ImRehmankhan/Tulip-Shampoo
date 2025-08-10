import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";



export default function Products() {
  const { addToCart,products } = useContext(CartContext);

  return (
    <section className="py-16 bg-pink-50" id="Products">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-pink-700 mb-10 text-center">
          Our Variants
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 flex flex-col"
            >
              {/* Product Image Link */}
              <Link to={`/product/${p.id}`} className="overflow-hidden rounded-t-lg block">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-1">
                <Link to={`/product/${p.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-pink-600">
                    {p.name}
                  </h3>
                </Link>

                <div className="mt-2 mb-4">
                  <span className="text-gray-400 line-through mr-2 text-sm">
                    PKR {p.price}
                  </span>
                  <span className="text-pink-600 font-bold text-lg">
                    PKR {p.salePrice}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="mt-auto bg-pink-600 text-white px-5 py-2 rounded-full font-medium shadow hover:bg-pink-700 hover:shadow-lg transition-all duration-300"
                  onClick={() => addToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
