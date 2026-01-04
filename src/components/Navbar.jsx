import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

export default function Navbar() {
  const navigate = useNavigate();

  // ✅ Get cartCount from context
  const { cartCount } = useCart();

  return (
    <>{/* Welcome Bar */}
<div className="wlc">
  <span>Welcome to My Amazon Clone</span>

  {/* Dark Mode Toggle */}
  <button
    className="dark-toggle"
    onClick={() => {
      document.body.classList.toggle("dark");
    }}
    aria-label="Toggle dark mode"
  >
    🌙
  </button>
</div>


      {/* Main Navbar */}
      <header className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          <div className="mark">
            Amazon <span style={{ color: "#655d5dff", marginLeft: 1 }}>Shop</span>
          </div>
        </div>

        <div className="deliver">
          <div style={{ fontSize: 12, opacity: 0.9 }}>Deliver to</div>
          <div className="country">India</div>
        </div>

        <div className="search">
          <select defaultValue="All">
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home">Home & Kitchen</option>
            <option value="Books">Books</option>
            <option value="Toys">Toys</option>
            <option value="Beauty">Beauty</option>
          </select>

          <input type="text" placeholder="Search Amazon-style…" />
          <button>Search</button>
        </div>

        <div className="account" onClick={() => navigate("/login")}>
          <div className="small">Hello, Sign in</div>
          <div className="big">Account & Lists</div>
        </div>

        <div className="orders">
          <div className="small">Returns</div>
          <div className="big">& Orders</div>
        </div>

        {/* ✅ Cart Icon */}
        <div className="cart" onClick={() => navigate("/cart")}>
          <div className="cart-icon">🛒</div>
          <div className="cart-count">{cartCount}</div>
          <div className="cart-text">Cart</div>
        </div>

        {/* ✅ Signup Button */}
        <div className="signup">
          <button
            type="button"
            className="btn primary"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>

        {/* ✅ Login Button */}
        <div className="login">
          <button
            type="button"
            className="loginbtn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </header>

      {/* Secondary Navigation */}
      <nav className="nav-secondary">
        {[
          "Today's Deals","Customer Service","Registry","Gift Cards","Sell",
          "Prime","New Releases","Mobiles","Electronics","Fashion",
          "Home & Kitchen","Beauty","Books","Appliances","MiniTV"
        ].map((label, index) => (
          <span key={index} onClick={() => navigate("/")}>{label}</span>
        ))}
      </nav>
    </>
  );
}
