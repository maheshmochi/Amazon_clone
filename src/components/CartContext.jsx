import { createContext, useContext, useState } from "react";

// 1️⃣ Create Cart Context
const CartContext = createContext();

// 2️⃣ Provider to wrap the app
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 3️⃣ Function to add products to cart
  const addToCart = (product) => {
    console.log("Adding to cart:", product.title); // debug
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // 4️⃣ Count total items in cart
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  // 5️⃣ Provide context values
  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

// 6️⃣ Custom hook to use cart
export const useCart = () => useContext(CartContext);
