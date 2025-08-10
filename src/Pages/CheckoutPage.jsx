import React, { useState, useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate} from "react-router-dom";
export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart,setCart } = useContext(CartContext); // Always use cart items

  const [form, setForm] = useState({
    email: "",
    country: "Pakistan",
    firstName: "",
    lastName: "",
    address: "",
    apt: "",
    city: "",
    postal: "",
    phone: "",
    saveInfo: false,
    textOffers: false,
    shippingMethod: "stander",
    paymentMethod: "cod",
    billingSame: true,
  });

  const shipping = form.shippingMethod === "express" ? 249.0 : 0;

  // Calculate subtotal from all cart items
  const subtotal = useMemo(
    () =>
      cart.reduce((total, item) => total + item.salePrice * item.quantity, 0),
    [cart]
  );

  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "923185846471";
    const requiredFields = ["firstName", "lastName", "address", "city", "phone", "email"];
  const missingFields = requiredFields.filter((field) => !form[field].trim());

  if (missingFields.length > 0) {
    alert("Please fill in all required fields before completing the order.");
    return;
  }

    // Create product list for WhatsApp message
    const productLines = cart
      .map(
        (item) =>
          `🛍 ${item.name} — Qty: ${item.quantity} — Rs ${(
            item.salePrice * item.quantity
          ).toLocaleString()}`
      )
      .join("\n");

    const message = `📦 New Order
-------------------
${productLines}

💰 Subtotal: Rs ${subtotal.toLocaleString()}
🚚 Shipping: Rs ${shipping.toLocaleString()}
📌 Total: Rs ${total.toLocaleString()}

👤 Name: ${form.firstName} ${form.lastName}
🏠 Address: ${form.address}, ${form.city}
📧 Email: ${form.email}
📱 Contact No: ${form.phone}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
navigate("/")

   setCart(null)
   
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-6 border-b pb-4">
          <h1 className="text-xl text-center sm:text-2xl font-bold text-pink-700">
            TulipShampoo.PK
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Order Summary */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 bg-gray-50 border border-gray-100 rounded-md p-5">
              {cart.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </div>
                  </div>
                  <div className="text-sm font-semibold">
                    Rs {(item.salePrice * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}

              <div className="text-sm text-gray-600 mb-1 flex justify-between">
                <span>Subtotal</span>
                <span>Rs {subtotal.toLocaleString()}</span>
              </div>
              <div className="text-sm text-gray-600 mb-3 flex justify-between">
                <span>Shipping</span>
                <span>Rs {shipping.toLocaleString()}</span>
              </div>

              <div className="border-t pt-3 mt-3 flex justify-between items-baseline">
                <div>
                  <div className="text-xs text-gray-500">PKR</div>
                  <div className="text-xl font-semibold">
                    Rs {total.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Checkout Form */}
          <form
            className="lg:col-span-2 bg-white"
            onSubmit={handleSubmit}
            aria-label="Checkout form"
          >
            {/* Contact */}
            <section className="mb-6">
              <h2 className="text-lg font-medium mb-3">Contact</h2>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email* "
                className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </section>

            {/* Delivery */}
            <section className="mb-6">
              <h2 className="text-lg font-medium mb-3">Delivery</h2>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name*"
                className="w-full border border-gray-200 rounded-md px-4 py-3 mb-3"
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full border border-gray-200 rounded-md px-4 py-3 mb-3"
              />
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Address*"
                className="w-full border border-gray-200 rounded-md px-4 py-3 mb-3"
              />
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City*"
                className="w-full border border-gray-200 rounded-md px-4 py-3 mb-3"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone*"
                className="w-full border border-gray-200 rounded-md px-4 py-3 mb-3"
              />
            </section>

            {/* Shipping Method */}
            <section className="mb-6">
              <h3 className="text-base font-medium mb-3">Shipping method</h3>
              <label className="block border p-3 rounded mb-2">
                <input
                  type="radio"
                  name="shippingMethod"
                  value="stander"
                  checked={form.shippingMethod === "stander"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Standard — Rs 0 (Rawalpindi / Islamabad)
              </label>
              
              <label className="block border p-3 rounded">
                <input
                  type="radio"
                  name="shippingMethod"
                  value="express"
                  checked={form.shippingMethod === "express"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Express — Rs 249
              </label>
            </section>

            {/* Payment */}
            <section className="mb-6">
              <h3 className="text-base font-medium mb-3">Payment</h3>
              <label className="block border p-3 rounded">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={form.paymentMethod === "cod"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Cash on Delivery (COD)
              </label>
            </section>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-md font-semibold hover:bg-pink-700 transition"
              >
                Complete order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
