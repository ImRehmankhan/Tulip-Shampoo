import Slider from "react-slick";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom Arrow Components
function NextArrow({ onClick }) {
  return (
    <div
      className="hidden md:flex absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 cursor-pointer z-10 hover:bg-gray-200"
      onClick={onClick}
    >
      <FaArrowRight className="text-black text-lg" />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="hidden md:flex absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 cursor-pointer z-10 hover:bg-gray-200"
      onClick={onClick}
    >
      <FaArrowLeft className="text-black text-lg" />
    </div>
  );
}

export default function Testimonials() {
  const reviews = [
    { name: "Sara", text: "My hair feels softer and smells amazing!", rating: 5 },
    { name: "Ayesha", text: "Finally a shampoo that works without chemicals.", rating: 4 },
    { name: "Zara", text: "Shiny and smooth hair after just one wash!", rating: 5 },
    { name: "Hina", text: "Great scent and really improves texture.", rating: 4 },
    { name: "Maya", text: "My go-to shampoo now. Highly recommend!", rating: 5 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, arrows: false }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, arrows: false }
      },
    ],
  };

  return (
    <section className="py-16 bg-pink-50 relative" id="reviews">
      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <h2 className="text-3xl font-bold text-pink-700 mb-8">
          What Our Customers Say
        </h2>
        <Slider {...settings}>
          {reviews.map((r, i) => (
            <div key={i} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition h-full flex flex-col justify-between">
                <p className="text-gray-600 mb-4">"{r.text}"</p>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`text-lg ${
                        index < r.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <h4 className="font-semibold text-pink-700">{r.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
