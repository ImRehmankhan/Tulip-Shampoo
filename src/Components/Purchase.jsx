import img from "../assets/100.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Purchase() {
  const navigate=useNavigate()
  return (
    <section className="py-20 bg-white-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        
        {/* Product Image */}
     

        {/* Product Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg text-grey-500 font-medium uppercase tracking-wide mb-2">
            Herbal Organic – Anti Dandruff | Control Hair Fall | 200ml
          </h3>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-pink-700 mb-6 drop-shadow-md leading-tight">
            Tulip Shampoo
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Revitalize your hair with nature’s finest blend of oils, extracts, 
            and botanicals for healthy, shiny, and strong locks.
          </p>
          <p className="text-3xl font-bold text-pink-600 mb-6">PKR 999.00</p>

          {/* Features */}
          <ul className="text-gray-700 mb-8 space-y-3">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-pink-600" />
              Crafted with coconut oil, argan oil & shea butter to deeply nourish and moisturize.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-pink-600" />
              Infused with green tea & chamomile to calm and protect your scalp.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-pink-600" />
              Leaves hair soft, shiny & frizz-free from the first wash.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-pink-600" />
              100% Herbal – Free from sulphates, parabens & harsh chemicals.
            </li>
          </ul>

          {/* Call to Action */}
          <button  onClick={() => navigate("/products")} className="bg-pink-600 text-white px-12 py-4 rounded-full shadow-lg hover:bg-pink-700 hover:shadow-xl transition transform hover:scale-105 text-lg font-semibold">
            Buy Now
          </button>
        </div>
           <div className="flex justify-center">
          <div className="relative">
            <img
              src={img}
              alt="Tulip Herbal Shampoo"
              className="w-80 md:w-[420px] rounded-3xl shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-4 left-4 bg-pink-600 text-white text-xs px-3 py-1 rounded-full shadow">
              Best Seller
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
