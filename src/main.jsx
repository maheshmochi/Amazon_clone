import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./components/CartContext";
import "./styles/amazon.css"; // Global styles

// 1️⃣ Wrap App with CartProvider and BrowserRouter
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
