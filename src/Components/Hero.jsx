import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import img from "../assets/100.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex items-center bg-pink-50"
      style={{
        backgroundImage: `linear-gradient(
          rgba(255, 255, 255, 0.92), 
          rgba(255, 240, 245, 0.92)
        ), url('https://halalveda.uk/cdn/shop/files/WhatsApp_Image_2025-04-23_at_1.46.35_AM.jpg?v=1745356657&width=1100')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-12 w-full relative z-10">
        
         <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={img}
            alt="Tulip Shampoo"
            loading="lazy"
            className="max-w-full md:w-[26rem] md:h-[34rem] object-cover rounded-2xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left md:p-6 rounded-lg"
        >
         
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-pink-700 mb-6 drop-shadow-md leading-tight">
            Tulip Shampoo
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0 mb-8 drop-shadow-md">
            Experience the luxury of nature’s finest ingredients, carefully
            blended to bring your hair unmatched shine, softness, and strength.
            Tulip Shampoo is your everyday secret for radiant, healthy hair.
          </p>

          {/* Feature Highlights */}
          <ul className="mb-8 space-y-2 text-gray-700">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaCheckCircle className="text-pink-600" />
              Crafted with coconut, argan & shea butter for deep nourishment.
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaCheckCircle className="text-pink-600" />
              Infused with green tea & chamomile to soothe and protect.
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaCheckCircle className="text-pink-600" />
              100% Herbal & Free from sulphates & parabens.
            </li>
          </ul>

          <button
            onClick={() => navigate("/products")}
            className="bg-pink-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-pink-700 hover:shadow-xl transition transform hover:scale-105 text-lg font-semibold"
          >
            Buy Now
          </button>
        </motion.div>

        {/* Image */}
       
      </div>
    </section>
  );
}
