import React, { useState } from "react";
import { FaTruck, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function DeliveryInformation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 w-full border rounded-lg overflow-hidden shadow-sm">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <div className="flex items-center gap-2">
          <FaTruck className="text-pink-600 text-lg" />
          <h2 className="text-lg font-bold text-gray-900">
            Delivery Information
          </h2>
        </div>
        {isOpen ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="p-4 space-y-3 text-sm text-gray-700">
          <p>
            We aim to deliver your order as quickly and safely as possible.
            Please review our delivery details below:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              **Delivery Time:** Orders are processed within 1-2 business days
              and typically delivered within 3-7 business days.
            </li>
            <li>
              **Shipping Areas:** We deliver nationwide in Pakistan.
            </li>
            <li>
              **Shipping Charges:** Standard shipping charges apply unless
              otherwise stated in promotions or free shipping offers.
            </li>
            <li>
              **Tracking:** Once your order has been shipped, you will receive a
              tracking link via email or SMS.
            </li>
            <li>
              **Delays:** Delivery times may vary during peak seasons or due to
              unforeseen circumstances.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
