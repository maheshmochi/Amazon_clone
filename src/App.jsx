import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Product from "./pages/Product";
import Otp from "./pages/Otp";
import Payment from "./pages/Payment"; // ✅ ADD THIS

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
