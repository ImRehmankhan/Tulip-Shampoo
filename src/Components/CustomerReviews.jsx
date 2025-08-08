import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import WriteReview from "./WriteReview";
import { useScroll } from "framer-motion";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function CustomerReviews() {
  const { reviewsData } = useContext(CartContext);

  const [showWriteReview, setShowWriteReview] = useState(false);
  return (
    <section className="bg-white py-10 border-t">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-2xl text-center font-bold mb-6">
          Customer Reviews
        </h2>

        {/* Rating Overview Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mb-8">
          {/* Column 1 - Average Rating */}
          <div className="flex flex-col   items-center">
            <div className="flex items-center gap-1 text-pink-600 text-xl">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-800 text-lg font-semibold mt-2">
              4.9 out of 5
            </p>
            <p className="text-gray-500 text-sm">Based on 1,960 reviews</p>
          </div>

          {/* Column 2 - Rating Bars */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-pink-600">
                  {Array.from({ length: stars }).map((_, i) => (
                    <>
                      <FaStar key={i} className="text-sm" />
                    </>
                  ))}
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-pink-600 h-2 rounded"
                    style={{
                      width:
                        stars === 5
                          ? "80%"
                          : stars === 4
                          ? "15%"
                          : stars === 3
                          ? "3%"
                          : "2%",
                    }}
                  ></div>
                </div>
                <p>{stars * 499}</p>
              </div>
            ))}
          </div>

          {/* Column 3 - Write Review Button */}
          <div className="flex justify-center md:justify-center">
            <button
              onClick={() => setShowWriteReview(!showWriteReview)}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded"
            >
              Write a review
            </button>
          </div>
        </div>
        <div className="my-3">{showWriteReview ? <WriteReview /> : ""}</div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviewsData.map((review, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 shadow-sm flex flex-col gap-2"
            >
              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{review.name}</p>
                    {review.verified && (
                      <span className="flex items-center gap-1 text-green-600 text-xs font-semibold bg-green-100 px-2 py-0.5 rounded">
                        <FaCheckCircle /> Verified
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center text-pink-600 text-sm">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
