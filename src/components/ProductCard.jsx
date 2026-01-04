import { useNavigate } from "react-router-dom"

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  if (!product) return null

  return (
    <article
      className="card"
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/product/${product.id}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate(`/product/${product.id}`)
        }
      }}
    >
      <div className="imgwrap">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="product-image"
        />
      </div>

      <h3 className="product-title">{product.title}</h3>
      <div className="rating product-rating">{product.rating}</div>
      <div className="price product-price">
        ₹{product.price.toLocaleString("en-IN")}
      </div>

      <div className="actions product-actions">
        <button
          type="button"
          className="btn primary1 add-cart-btn"
          onClick={(e) => {
            e.stopPropagation()
            navigate("/cart")
          }}
        >
          Add to Cart
        </button>

        <button
          type="button"
          className="btn ghost1 buy-now-btn"
          onClick={(e) => {
            e.stopPropagation()
            navigate(`/product/${product.id}`)
          }}
        >
          Buy Now
        </button>

        <button
          type="button"
          className="more"
          onClick={(e) => {
            e.stopPropagation()
            navigate(`/product/${product.id}`)
          }}
        >
          More Details
        </button>
      </div>
    </article>
  )
}
