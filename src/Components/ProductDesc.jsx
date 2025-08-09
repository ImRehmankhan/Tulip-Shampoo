import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaRegFileAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function ProductDescription() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 w-full border rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <div className="flex items-center gap-2">
          <FaRegFileAlt className="text-pink-600 text-lg" />
          <h1 className="text-lg sm:text-xl font-bold text-gray-900">
            Product Description
          </h1>
        </div>
        {isOpen ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="px-4 py-3 bg-white text-sm text-gray-700">
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
              <span>
                Crafted with a potent blend of coconut oil, argan oil, and shea
                butter to deeply nourish and moisturize dry, damaged hair.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
              <span>
                Infused with the antioxidant properties of green tea extract and
                the soothing benefits of chamomile to calm and protect your
                scalp.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
              <span>
                Enriched with olive oil, honey, and jojoba oil to gently cleanse
                and hydrate your hair, leaving it soft and manageable.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
              <span>
                Formulated with tea tree oil, lavender oil, and rosemary
                essential oil to promote healthy hair growth, reduce dandruff,
                and soothe scalp irritations.
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
