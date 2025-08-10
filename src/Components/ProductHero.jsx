// ProductHero.jsx
import React, { useContext, useState } from "react";

import { FaCheckCircle, FaStar } from "react-icons/fa";
import { useNavigate, Link, useParams } from "react-router-dom";
import img1 from "../assets/100.jpg";
import img4 from "../assets/1003.jpeg";

import img2 from "../assets/1001.jpg";
import img3 from "../assets/1002.jpg";
import ProductDescription from "./ProductDesc";
import { CartContext } from "../context/CartContext";
import ReturnPolicy from "./ReturnPolicy";
import DeliveryInformation from "./DeliveryInfo";

export default function ProductHero() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products , addToCart} = useContext(CartContext);
  const newproduct = products.find((p) => p.id === parseInt(id));

  let product = {
    name: "Herbal Organic – Anti Dandruff | Control Hair Fall | 200ml",
    price: 1200,
    salePrice: 999.0,
    rating: 4.9,
    reviews: 1960,
    sizeOptions: ["125ml", "250ml"],
    features: [
      "Nourish your hair, naturally.",
      "Soft, shiny, and strong.",
      "Hydrate your locks.",
      "Healthy hair, happy life.",
      "Shine on with our formula.",
    ],
    images: [newproduct.img, img4, img2, img3],
   
  };
  if (newproduct) {
    product = {
    ...product,
   
    name:  `${newproduct.name} – Anti Dandruff | Control Hair Fall | 200ml`,
    price: newproduct.price,
    salePrice: newproduct.salePrice,
  };
  }

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);


   const handleAddToCart = () => {
    let finalQty = quantity;
    let finalPrice = product.salePrice;

    addToCart({
      id: newproduct.id,
      name: product.name,
      img: newproduct.img,
      salePrice: product.salePrice,
      quantity: finalQty,
    });
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
            <div className="mt-4 flex item-center justify-center gap-3 overflow-x-auto py-2">
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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
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
           {/*  <div className="mt-6">
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
            </div> */}
             <div className="mt-6 flex flex-wrap gap-8 text-xs text-gray-700">
             <ProductDescription/>
            </div>

            <div className="mt-0 flex flex-wrap gap-8 text-xs text-gray-700">
             <DeliveryInformation/>
            </div>
            <div className="mt-0 flex flex-wrap gap-8 text-xs text-gray-700">
             <ReturnPolicy/>
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
                onClick={handleAddToCart}
                className="sm:w-1/2 bg-pink-600 text-white py-3 rounded-full font-semibold"
              >
                Add to Cart
              </button>
            </div>

            {/* Badges & small copy */}
            <div className="mt-6 flex flex-wrap gap-8 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-200" />
                100% Herbal Formula
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-200" />
                Herbaceous Scent
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-200" />
                Reduces Hair Fall
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
