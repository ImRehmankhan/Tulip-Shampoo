import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex items-center bg-pink-50"
      style={{
        backgroundImage: `linear-gradient(
          rgba(255, 255, 255, 0.9), 
          rgba(255, 240, 245, 0.9)
        ), url('https://halalveda.uk/cdn/shop/files/WhatsApp_Image_2025-04-23_at_1.46.35_AM.jpg?v=1745356657&width=1100')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl  px-4   flex flex-col md:flex-row items-center justify-between  gap-12 w-full relative z-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center   md:text-left md:p-6 rounded-lg"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-pink-700 mb-6 drop-shadow-md">
            Tulip Shampoo
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0 x mb-8 drop-shadow-md">
            Experience the luxury of nature’s best ingredients, carefully
            blended to bring your hair unmatched shine, softness, and strength.
            Tulip Shampoo is your everyday secret for radiant, healthy hair.
          </p>
          <button
            onClick={() => navigate("/product/tulip-shampoo")}
            className="bg-pink-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-pink-700 transition transform hover:scale-105 text-lg"
          >
            Buy Now
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="https://halalveda.uk/cdn/shop/files/Yourparagraphtext.png?v=1747512182&width=823"
            alt="Tulip Shampoo"
            loading="lazy"
            className="max-w-full md:w-[26rem] md:h-[34rem] object-cover rounded-2xl shadow-2xl border-4 border-white  "
          />
        </motion.div>
      </div>
    </section>
  );
}
