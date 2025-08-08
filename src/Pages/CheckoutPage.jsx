// src/components/CheckoutPage.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function CheckoutPage() {
  const location = useLocation();
  const buyitemdetails = location.state;
  console.log("landing on checkout", buyitemdetails);
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

  const [discount, setDiscount] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [subtotal] = useState(buyitemdetails.selectedBundle.price);
  const shipping = form.shippingMethod === "express" ? 249.0 : 0;
  const total = subtotal - (couponApplied ? 50 : 0) + shipping; // sample coupon logic

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const applyDiscount = () => {
    // placeholder validation
    if (discount.trim() === "SAVE50") {
      setCouponApplied(true);
      alert("Coupon applied: PKR 50 off");
    } else {
      alert("Invalid coupon");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "923425221720";
    const message = `📦 New Order
-------------------
🛍 Product: ${buyitemdetails.itemname}
🔢 Quantity: ${buyitemdetails.selectedBundle.qty}
💰 Total: PKR ${(total).toLocaleString()}

👤 Name: ${form.firstName+form.lastName}
🏠 Address: ${form.address}
   city: ${form.city}
📧 Email: ${form.email}
📱 Contact No: ${form.phone}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-6 border-b pb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-pink-700">
            TulipShampoo.PK
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <aside className="lg:col-span-1">
            <div className="sticky top-6 bg-gray-50 border border-gray-100 rounded-md p-5">
              <div className="flex items-start gap-3 mb-4">
                <img
                  src="https://halalveda.uk/cdn/shop/files/Yourparagraphtext.png?v=1747512182&width=823"
                  alt="product"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">
                    {buyitemdetails.itemname}
                  </div>
                  <div className="text-xs text-gray-500">
                    Qty: {buyitemdetails.selectedBundle.qty}
                  </div>
                </div>
                <div className="text-sm font-semibold">Rs 999.0</div>
              </div>

              {/* <div className="flex items-center gap-3 mb-4">
                <input
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="Discount code"
                  className="flex-1 border border-gray-200 rounded-md px-3 py-2"
                />
                <button
                  onClick={applyDiscount}
                  className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Apply
                </button>
              </div> */}

              <div className="text-sm text-gray-600 mb-1 flex justify-between">
                <span>Subtotal</span>
                <span>Rs {subtotal.toFixed(2)}</span>
              </div>
              <div className="text-sm text-gray-600 mb-3 flex justify-between">
                <span>Shipping</span>
                <span>Rs {shipping.toFixed(2)}</span>
              </div>
              {couponApplied && (
                <div className="text-sm text-green-600 mb-3 flex justify-between">
                  <span>Coupon</span>
                  <span>-Rs 50.00</span>
                </div>
              )}

              <div className="border-t pt-3 mt-3 flex justify-between items-baseline">
                <div>
                  <div className="text-xs text-gray-500">PKR</div>
                  <div className="text-xl font-semibold">
                    Rs {total.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </aside>
          {/* LEFT: Form (col-span 2 on large screens) */}
          <form
            className="lg:col-span-2  bg-white "
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
                placeholder="Email "
                className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
              <label className="mt-2 block text-sm">
                <input
                  name="textOffers"
                  checked={form.textOffers}
                  onChange={handleChange}
                  type="checkbox"
                  className="mr-2"
                />
                Email me with news and offers
              </label>
            </section>

            {/* Delivery */}
            <section className="mb-6">
              <h2 className="text-lg font-medium mb-3">Delivery</h2>
              <div className="mb-3">
                <label className="sr-only">Country</label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-md px-4 py-3 "
                >
                  <option>Pakistan</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full border border-gray-200 rounded-md px-4 py-3"
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full border border-gray-200 rounded-md px-4 py-3"
                />
              </div>

              <div className="mb-3">
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full border border-gray-200 rounded-md px-4 py-3"
                />
              </div>

              <div className="mb-3">
                <input
                  name="apt"
                  value={form.apt}
                  onChange={handleChange}
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full border border-gray-200 rounded-md px-4 py-3"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full border border-gray-200 rounded-md px-4 py-3"
                />
                <input
                  name="postal"
                  value={form.postal}
                  onChange={handleChange}
                  placeholder="Postal code (optional)"
                  className="w-full border border-gray-200 rounded-md px-4 py-3"
                />
              </div>

              <div className="mb-3">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full border border-gray-200 rounded-md px-4 py-3"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label className="inline-flex items-center text-sm">
                  <input
                    name="saveInfo"
                    checked={form.saveInfo}
                    onChange={handleChange}
                    type="checkbox"
                    className="mr-2"
                  />
                  Save this information for next time
                </label>
                <label className="inline-flex items-center text-sm">
                  <input
                    name="textOffers2"
                    onChange={() => {}}
                    type="checkbox"
                    className="mr-2"
                  />
                  Text me with news and offers
                </label>
              </div>
            </section>

            {/* Shipping method */}
            <section className="mb-6">
              <h3 className="text-base font-medium mb-3">Shipping method</h3>
              <div className="border rounded-md overflow-hidden">
                <label
                  className={`flex items-center justify-between cursor-pointer px-4 py-3 ${
                    form.shippingMethod === "stander"
                      ? "bg-blue-50 ring-1 ring-blue-100"
                      : ""
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold">Standard</div>
                    <div className="text-xs text-gray-500">
                      Arrives in 3- 6 business days
                    </div>
                  </div>
                  <div className="text-sm font-medium">Rs 0</div>
                  <input
                    name="shippingMethod"
                    type="radio"
                    value="stander"
                    checked={form.shippingMethod === "stander"}
                    onChange={handleChange}
                    className="ml-3"
                  />
                </label>
              </div>
              <br></br>
              <div className="border rounded-md overflow-hidden">
                <label
                  className={`flex items-center justify-between cursor-pointer px-4 py-3 ${
                    form.shippingMethod === "express"
                      ? "bg-blue-50 ring-1 ring-blue-100"
                      : ""
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold">
                      EXPRESS SHIPPING
                    </div>
                    <div className="text-xs text-gray-500">
                      Arrives in 1–3 business days
                    </div>
                  </div>
                  <div className="text-sm font-medium">Rs 249.00</div>
                  <input
                    name="shippingMethod"
                    type="radio"
                    value="express"
                    checked={form.shippingMethod === "express"}
                    onChange={handleChange}
                    className="ml-3"
                  />
                </label>
              </div>
            </section>

            {/* Payment */}
            <section className="mb-6">
              <h3 className="text-base font-medium mb-3">Payment</h3>
              <p className="text-sm text-gray-500 mb-3">
                All transactions are secure and encrypted.
              </p>

              <div className="border rounded-md">
                <label
                  className={`flex items-center px-4 py-3 cursor-pointer ${
                    form.paymentMethod === "cod"
                      ? "bg-blue-50 ring-1 ring-blue-100"
                      : ""
                  }`}
                >
                  <div className="flex-1 text-sm font-medium">
                    Cash on Delivery (COD)
                  </div>
                  <input
                    name="paymentMethod"
                    type="radio"
                    value="cod"
                    checked={form.paymentMethod === "cod"}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </section>

            {/* Billing address */}
            {/* <section className="mb-6">
              <h3 className="text-base font-medium mb-3">Billing address</h3>
              <div className="border rounded-md overflow-hidden">
                <label className="flex items-center px-4 py-3 cursor-pointer">
                  <div className="flex-1 text-sm">
                    <input
                      name="billingSame"
                      type="radio"
                      value="same"
                      checked={form.billingSame === true}
                      onChange={() =>
                        setForm((p) => ({ ...p, billingSame: true }))
                      }
                      className="mr-3"
                    />
                    <span className="font-medium">
                      Same as shipping address
                    </span>
                  </div>
                </label>
                <label className="flex items-center px-4 py-3 cursor-pointer">
                  <div className="flex-1 text-sm">
                    <input
                      name="billingSame"
                      type="radio"
                      value="different"
                      checked={form.billingSame === false}
                      onChange={() =>
                        setForm((p) => ({ ...p, billingSame: false }))
                      }
                      className="mr-3"
                    />
                    <span>Use a different billing address</span>
                  </div>
                </label>
              </div>
            </section> */}

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-md font-semibold hover:bg-pink-700 transition"
              >
                Complete order
              </button>
            </div>
          </form>

          {/* RIGHT: Order summary */}
        </div>
      </div>
    </div>
  );
}
