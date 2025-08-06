import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-pink-50 to-pink-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row mx-auto items-center justify-between px-6 gap-12 w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left p-6 rounded-lg"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-pink-700 leading-tight mb-6">
            Tulip Shampoo
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto md:mx-0 mb-8">
            Experience the luxury of nature’s best ingredients, carefully
            blended to bring your hair unmatched shine, softness, and strength.
            Tulip Shampoo is your everyday secret for radiant, healthy hair.
          </p>
          <button  onClick={() => navigate("/product/tulip-shampoo")} className="bg-pink-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-pink-700 transition transform hover:scale-105 text-lg">
            Buy Now
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center "
        >
          <img
            src="https://images.unsplash.com/photo-1747858989102-cca0f4dc4a11?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tulip Shampoo"
            loading="lazy"
            className="w-50 h-50 md:w-[26rem] md:h-[34rem]  rounded-2xl shadow-2xl border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
}
