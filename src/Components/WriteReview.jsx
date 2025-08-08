import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const WriteReview = () => {
  const { setReviewData } = useContext(CartContext);

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (rating === 0) {
      setError("Please select a rating.");
      return;
    }
    if (review.trim() === "") {
      setError("Please write a review.");
      return;
    }

    setError("");
    const reviewData = {
      name: name,
      date: new Date().toLocaleDateString(), // formatted date string like "8/8/2025"
      verified: true,
      text: review,
      rating: rating,
      avatar: null,
    };
    console.log("Review submitted:", reviewData);
    setReviewData((pre)=>[reviewData,...pre])

    // Reset form
    setRating(0);
    setReview("");
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Write a Review</h2>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Rating:</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-2xl ${
                star <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
              aria-label={`${star} star`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="review-text" className="block mb-1 font-medium">
          Name
        </label>
        <input
          id="name-text"
          rows="4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-2 resize-none"
          placeholder="Full Name Here..."
        />
        <label htmlFor="review-text" className="block mb-1 font-medium">
          Review:
        </label>
        <textarea
          id="review-text"
          rows="4"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full border rounded p-2 resize-none"
          placeholder="Write your review here..."
        ></textarea>
        
      </div>

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <button
        onClick={handleSubmit}
        className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
      >
        Submit Review
      </button>
    </div>
  );
};

export default WriteReview;
