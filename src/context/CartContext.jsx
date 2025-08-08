import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // Load reviews from localStorage or use default
  const [reviewsData, setReviewData] = useState(() => {
    const saved = localStorage.getItem('reviewsData');
    return saved ? JSON.parse(saved) : [
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

  // Sync reviewsData to localStorage on every change
  useEffect(() => {
    localStorage.setItem('reviewsData', JSON.stringify(reviewsData));
  }, [reviewsData]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log('product', product);
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, reviewsData, setReviewData }}>
      {children}
    </CartContext.Provider>
  );
}
