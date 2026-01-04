import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../components/CartContext";
import "./Product.css";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get addToCart from context
  const { addToCart } = useCart();

  // Find product by id
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1 style={{ padding: 40 }}>Product not found</h1>;
  }

  return (
    <>
      <Navbar />

      <main className="product-container">
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

        {/* Product Details */}
        <div className="product-details">
          <h2>{product.title}</h2>

          <div className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </div>

          <div className="product-rating">
            Rating: {product.rating}
          </div>

          {/* Action Buttons */}
          <div className="product-actions">
            <button
              className="add-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

            <button
              className="buy-now-btn"
              onClick={() => navigate("/payment")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
