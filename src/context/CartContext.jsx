import React, { createContext, useState, useEffect } from "react";
import img1 from "../assets/100.jpg";
import img2 from "../assets/1001.jpg";
import img3 from "../assets/1002.jpg";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // Load reviews from localStorage or use default

  const [reviewsData, setReviewData] = useState(() => {
    const saved = localStorage.getItem("reviewsData");
    return saved
      ? JSON.parse(saved)
      : [
          {
            name: "Ayesha",
            date: "06/08/2025",
            verified: true,
            text: "I purchased oil and shampoo. Results are amazing. I used oil before shampoo, this combo makes my hair smooth and more shinier. The visible result in hair fall is real.",
            rating: 5,
            avatar: null,
          },
          {
            name: "Lubna",
            date: "03/08/2025",
            verified: true,
            text: "I have only used it thrice, feels good! 👍",
            rating: 5,
            avatar: null,
          },
          {
            name: "Muzzamil",
            date: "31/07/2025",
            verified: true,
            text: "Good results in less time.",
            rating: 5,
            avatar: null,
          },
        ];
  });

  // Sync reviewsData to localStorage
  useEffect(() => {
    localStorage.setItem("reviewsData", JSON.stringify(reviewsData));
  }, [reviewsData]);

  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: product.quantity }];
      }
    });
  };

  // Update quantity
  const updateQuantity = (id, qty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const products = [
    { id: 1, name: "Tulip Herbal Shampoo – Almond", img: img1, price: 1400.0, salePrice: 1099.0, quantity: 1 },
    { id: 2, name: "Tulip Herbal Shampoo – Aloe Vera", img: img2, price: 1400.0, salePrice: 1099.0, quantity: 1 },
    { id: 3, name: "Tulip Herbal Shampoo – Onion", img: img3, price: 1400.0, salePrice: 1099.0, quantity: 1 },
  ];
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        reviewsData,
        setReviewData,
        products,
        setCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
