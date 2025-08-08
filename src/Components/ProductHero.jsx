// ProductHero.jsx
import React, { useContext, useState } from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { useNavigate,Link } from "react-router-dom";

export default function ProductHero() {
  const navigate = useNavigate();

  const product = {
    name: "Tulip Shampoo — 250ml (Rose)",
    price: 1200,
    salePrice: 900,
    rating: 4.9,
    reviews: 1960,
    sizeOptions: ["125ml", "250ml"],
    features: [
      "Stops hair fall within a week",
      "Grows new hair within 6 weeks",
      "Reverse hard water damages",
      "Safe for babies, men & women",
      "Stops dandruff & eczema flare-up",
    ],
    images: [
      "https://halalveda.uk/cdn/shop/files/Yourparagraphtext.png?v=1747512182&width=823",
      "https://halalveda.uk/cdn/shop/files/Copy_of_New_Product_1.png?v=1745356236&width=823",
      "https://halalveda.uk/cdn/shop/files/before.png?v=1745356236&width=823",
      "https://halalveda.uk/cdn/shop/files/Copy_of_Copy_of_before.png?v=1745356236&width=823",
      "https://halalveda.uk/cdn/shop/files/Copy_of_before.png?v=1745356236&width=823"


    ],
    bundles: [
      {
        id: 1,
        title: "1 Bottle",
        price: 999,
        meta: "Standard sale price",
        qty: 1,
      },
      {
        id: 2,
        title: "2 Bottles",
        price: 1898,
        meta: "You save additional 5%",
        qty: 2,
      },
      {
        id: 3,
        title: "5 Bottles",
        price: 1994,
        meta: "Works best together",
        badge: "BEST SELLING",
        qty: 5,
      },
      {
        id: 4,
        title: "10 Bottles",
        price: 2547,
        meta: "You save additional 15%",
        qty: 10,
      },
      {
        id: 5,
        title: "20 Bottles",
        price: 3996,
        meta: "Free shipping",
        badge: "MAX SAVINGS",
        qty: 20,
      },
      {
        id: 6,
        title: "Add Custom Quntity",
        price: 0,
        meta: "Standard sale price",
        badge: null,
        qty: 0,
      },
    ],
  };

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizeOptions[0]);
  const [selectedBundle, setSelectedBundle] = useState(product.bundles[0].id);
  const [quantity, setQuantity] = useState(1);

  const addToCartfun = () => {
    const selectedbundel = product.bundles.find((e) => e.id == selectedBundle);
    if (selectedbundel.title === "Add Custom Quntity") {
      selectedbundel.qty = quantity;
      selectedbundel.price = quantity * 999;
    }
    const buyitemdetails = {
      itemname: "Tulip Shampoo — 250ml (Rose)",
      selectedBundle: selectedbundel,
    };
    navigate("/checkout", { state: buyitemdetails });
  };

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT - Images */}
          <div>
            {/* Main image container */}
            <div className="w-full rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <img
                src={product.images[selectedImg]}
                alt={`${product.name} image ${selectedImg + 1}`}
                className="w-full h-auto object-contain bg-white"
                style={{ maxHeight: 560 }}
              />
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3 overflow-x-auto py-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border ${
                    selectedImg === i
                      ? "border-green-600 ring-2 ring-green-100"
                      : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200`}
                >
                  <img
                    src={img}
                    alt={`thumb-${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT - Product Info */}
          <div className="pt-1">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* Price + sale badge */}
            <div className="mt-3 flex items-center gap-3">
              <span className="text-gray-400 line-through">
                PKR {product.price.toLocaleString()}
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-pink-600">
                PKR {product.salePrice.toLocaleString()}
              </span>
              <span className="ml-2 inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                Sale
              </span>
            </div>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={` ${
                      i < Math.round(product.rating) ? "" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                {product.rating} • {product.reviews} reviews
              </div>
            </div>

            {/* Size selector */}
            {/* <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Size</h4>
              <div className="flex gap-3">
                {product.sizeOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedSize === s ? "border-green-600 bg-green-50 text-green-700" : "border-gray-200 text-gray-700"
                    } text-sm font-medium`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Feature list */}
            <ul className="mt-6 space-y-3 text-gray-700">
              {product.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            {/* Bundle options - radio cards */}
            <div className="mt-6">
              <div className="text-xs font-semibold text-gray-500 mb-2 uppercase">
                Bundle & Save
              </div>
              <div className="space-y-3">
                {product.bundles.map((b) => (
                  <label key={b.id} className="block">
                    <input
                      type="radio"
                      name="bundle"
                      className="sr-only peer"
                      checked={selectedBundle === b.id}
                      onChange={() => setSelectedBundle(b.id)}
                    />
                    <div
                      className={`flex items-center justify-between gap-4 p-3 rounded-lg border transition-shadow ${
                        selectedBundle === b.id
                          ? "border-pink-600 shadow-lg"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-300">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              selectedBundle === b.id
                                ? "bg-pink-600"
                                : "bg-transparent"
                            }`}
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {b.title}
                          </div>
                          <div className="text-xs text-gray-500">{b.meta}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {b.badge && (
                          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                            {b.badge}
                          </span>
                        )}
                        {b.title === "Add Custom Quntity" ? (
                          " "
                        ) : (
                          <div className="text-sm font-semibold">
                            PKR {b.price.toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity + Add Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex sm:w-1/2 w-full items-center justify-between border border-gray-300 rounded-full overflow-hidden shadow-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors text-lg font-semibold"
                >
                  −
                </button>
                <div className="px-6 text-base font-medium text-gray-700">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors text-lg font-semibold"
                >
                  +
                </button>
              </div>

              {/* Buy Button */}
              <button
                onClick={addToCartfun}
                className="sm:w-1/2 w-full bg-pink-600 text-white py-3 rounded-full font-semibold shadow-md hover:bg-pink-700 hover:shadow-lg transition-all duration-200"
              >
                Buy it Now
              </button>
            </div>

            {/* Badges & small copy */}
            <div className="mt-6 flex flex-wrap gap-8 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-200" />
                100% Ayurvedic
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-200" />
                100% Halal
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-200" />
                Chemical Free
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Try Risk Free For 30 Days. You're 100% covered — if it's not for
              you, send it back within 30 days for a quick, no-hassle refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
