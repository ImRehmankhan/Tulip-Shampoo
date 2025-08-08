
import React from "react";

const products = [
  { id: 1, name: "Tulip Shampoo – Rose", img: "https://halalveda.uk/cdn/shop/files/Yourparagraphtext.png?v=1747512182&width=823", price: 1200, salePrice: 900 },
  { id: 2, name: "Tulip Shampoo – Lavender", img: "https://halalveda.uk/cdn/shop/files/Yourparagraphtext.png?v=1747512182&width=823", price: 1200, salePrice: 950 },
  { id: 3, name: "Tulip Shampoo – Mint", img: "https://halalveda.uk/cdn/shop/files/Yourparagraphtext.png?v=1747512182&width=823", price: 1200, salePrice: 1000 },
];

export default function Products() {
  return (
    <section className="py-16 bg-pink-50" id="Products">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">Our Variants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col">
              <img src={p.img} alt={p.name} className="w-full h-60 object-cover rounded-md mb-4" />

              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <div className="mt-2 mb-4">
                <span className="text-gray-500 line-through mr-2">PKR {p.price}</span>
                <span className="text-pink-600 font-bold">PKR {p.salePrice}</span>
              </div>

              <button
                className="mt-auto bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition"
                onClick={() => alert(`Added ${p.name} to cart!`)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
