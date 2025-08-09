import React, { useState } from "react";
import { FaUndo, FaBoxOpen, FaCheckCircle, FaEnvelope, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ReturnPolicy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 w-full border rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <div className="flex items-center gap-2">
          <FaUndo className="text-pink-600 text-lg" />
          <h2 className="text-lg font-bold text-gray-900">30-Day Return Policy</h2>
        </div>
        {isOpen ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="p-4 space-y-4 text-sm text-gray-700">
          <p>
            We are committed to offering products of the highest quality. However,
            we recognize that there may be occasions where a return or exchange is
            necessary. Please review our policy below:
          </p>

          {/* Damaged or Incorrect Product */}
          <div className="flex items-start gap-2">
            <FaBoxOpen className="text-pink-600 mt-1" />
            <p>
              <strong>Damaged or Incorrect Product Delivery:</strong> If you
              receive a damaged item or the wrong product, please reach out to our
              customer service team within 30 days of receiving your order. We
              will provide instructions on how to return the item and will either
              send a replacement or issue a full refund, including any applicable
              shipping costs.
            </p>
          </div>

          {/* Eligibility */}
          <div className="flex items-start gap-2">
            <FaCheckCircle className="text-pink-600 mt-1" />
            <div>
              <strong>Return or Exchange Eligibility:</strong>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>Items must be returned.</li>
                <li>
                  The return or exchange request must be made within 30 days of
                  receiving your order.
                </li>
                <li>
                  An original proof of purchase (order confirmation email) is
                  required for all returns or exchanges.
                </li>
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="flex items-start gap-2">
            <FaEnvelope className="text-pink-600 mt-1" />
            <div>
              <strong>Return Process:</strong>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>
                  Contact our customer service team at{" "}
                  <a
                    href="https://instagram.com/"
                    className="text-pink-600 underline"
                  >
                    https://instagram.com/
                  </a>{" "}
                  to start the return or exchange process.
                </li>
                <li>
                  Provide your order number, a description of the issue, and any
                  relevant photos.
                </li>
                <li>
                  Our team will guide you through the return or exchange process.
                </li>
                <li>
                  If eligible, we will process the refund to the original payment
                  method or send the replacement item, based on your preference.
                </li>
                <li>This whole process can take up to 7 business days.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
