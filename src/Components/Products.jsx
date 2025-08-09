import React from "react";
import img1 from "../assets/100.jpg";
import img2 from "../assets/1001.jpg";
import img3 from "../assets/1002.jpg";

const products = [
  { id: 1, name: "Tulip Shampoo – Rose", img: img1, price: 1200, salePrice: 999 },
  { id: 2, name: "Tulip Shampoo – Lavender", img: img2, price: 1200, salePrice: 999 },
  { id: 3, name: "Tulip Shampoo – Mint", img: img3, price: 1200, salePrice: 999 },
];

export default function Products() {
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
              {/* Product Image */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>

                <div className="mt-2 mb-4">
                  <span className="text-gray-400 line-through mr-2 text-sm">
                    PKR {p.price}
                  </span>
                  <span className="text-pink-600 font-bold text-lg">
                    PKR {p.salePrice}
                  </span>
                </div>

                <button
                  className="mt-auto bg-pink-600 text-white px-5 py-2 rounded-full font-medium shadow hover:bg-pink-700 hover:shadow-lg transition-all duration-300"
                  onClick={() => alert(`Added ${p.name} to cart!`)}
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
