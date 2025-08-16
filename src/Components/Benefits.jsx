import { FaLeaf, FaTint, FaStar } from "react-icons/fa";

export default function Benefits() {
  const benefits = [
    {
      title: "Nourishes & Strengthens",
      desc: "Crafted with coconut oil, argan oil, and shea butter to deeply nourish and restore hair health from root to tip.",
      icon: <FaTint />,
    },
    {
      title: "Sulphate-Free & Gentle",
      desc: "Free from harsh chemicals — safe for daily use on all hair types, including sensitive scalps.",
      icon: <FaLeaf />,
    },
    {
      title: "Shiny & Smooth",
      desc: "Infused with Tulip extract and Vitamin E for lustrous, frizz-free hair with visible results from the first wash.",
      icon: <FaStar />,
    },
  ];

  return (
    <section className="py-16 bg-white" id="benefits">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">
          Why Choose Tulip?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Discover the natural difference, Tulip Herbal Shampoo blends premium
          botanicals and modern haircare science for beautiful, healthy hair.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-6 bg-pink-50 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-pink-500 to-pink-300 flex items-center justify-center text-white text-2xl shadow">
                {b.icon}
              </div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">
                {b.title}
              </h3>
              <p className="text-gray-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
