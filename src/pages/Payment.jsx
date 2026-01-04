import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Payment.css";

// Bank & Wallet logos
const banks = [
  { name: "HDFC Bank", logo: "🏦" },
  { name: "ICICI Bank", logo: "🏦" },
  { name: "SBI", logo: "🏦" },
  { name: "Axis Bank", logo: "🏦" },
];

const wallets = [
  { name: "Amazon Pay", logo: "🛒" },
  { name: "Paytm", logo: "💰" },
  { name: "PhonePe", logo: "📱" },
];

export default function Payment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("card");
  const [upiId, setUpiId] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [upiScanner, setUpiScanner] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [timer, setTimer] = useState(30);

  // Countdown for OTP
  useEffect(() => {
    let interval;
    if (showOTP && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [showOTP, timer]);

  const handlePay = () => {
    if (method === "upi") {
      if (!upiId) return setUpiScanner(true); // show scanner if no UPI ID
      setShowOTP(true);
      setTimer(30);
      return;
    }
    setPaymentSuccess(true);
  };

  const handleOTPVerify = () => {
    if (otp.length === 6) {
      setPaymentSuccess(true);
      setShowOTP(false);
      setOtp("");
      setUpiId("");
    } else {
      alert("Enter valid 6-digit OTP");
    }
  };

  const handleScannerScan = () => {
    // Simulate scanning QR and setting UPI ID
    setUpiId("user@upi");
    setUpiScanner(false);
    setShowOTP(true);
    setTimer(30);
  };

  return (
    <>
      <Navbar />
      <main className="payment-wrapper">
         <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1 className="payment-title">Secure Payment</h1>

        <div className="payment-box">
          {/* Left - Methods */}
          <div className="payment-method-list">
            {["card", "upi", "netbanking", "wallet"].map((m) => (
              <button
                key={m}
                className={method === m ? "active" : ""}
                onClick={() => {
                  setMethod(m);
                  setShowOTP(false);
                  setUpiScanner(false);
                  setPaymentSuccess(false);
                  setOtp("");
                }}
              >
                {m === "card" && "💳 Card"}
                {m === "upi" && "📱 UPI"}
                {m === "netbanking" && "🏦 Net Banking"}
                {m === "wallet" && "👛 Wallet"}
              </button>
            ))}
          </div>

          {/* Right - Details */}
          <div className="payment-details">
            {paymentSuccess ? (
              <div className="success-message">✅ Payment Successful!</div>
            ) : upiScanner ? (
              <div className="upi-scanner">
                <h3>Scan UPI QR Code</h3>
                <div className="qr-placeholder">📷 QR SCANNER</div>
                <button className="pay-btn" onClick={handleScannerScan}>
                  Simulate Scan
                </button>
              </div>
            ) : showOTP ? (
              <div className="upi-otp-container">
                <h3>Enter OTP sent to your UPI app</h3>
                <input
                  type="text"
                  placeholder="6-digit OTP"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <div className="otp-timer">
                  {timer > 0
                    ? `Time remaining: ${timer}s`
                    : "OTP expired, resend?"}
                </div>
                <button className="pay-btn" onClick={handleOTPVerify}>
                  Verify OTP
                </button>
              </div>
            ) : (
              <>
                {method === "card" && (
                  <>
                    <h3>Card Payment</h3>
                    <input type="text" placeholder="Card Number" maxLength={16} />
                    <input type="text" placeholder="Name on Card" />
                    <div className="row">
                      <input type="text" placeholder="MM/YY" maxLength={5} />
                      <input type="password" placeholder="CVV" maxLength={3} />
                    </div>
                  </>
                )}

                {method === "upi" && (
                  <>
                    <h3>UPI Payment</h3>
                    <input
                      type="text"
                      placeholder="Enter UPI ID"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                    <button className="pay-btn" onClick={handlePay}>
                      {upiId ? "Send OTP" : "Scan QR"}
                    </button>
                  </>
                )}

                {method === "netbanking" && (
                  <>
                    <h3>Select Bank</h3>
                    <div className="bank-list">
                      {banks.map((b) => (
                        <button key={b.name}>
                          <span className="logo">{b.logo}</span>
                          {b.name}
                        </button>
                      ))}
                    </div>
                    <button className="pay-btn" onClick={handlePay}>
                      Pay Now
                    </button>
                  </>
                )}

                {method === "wallet" && (
                  <>
                    <h3>Select Wallet</h3>
                    <div className="wallet-list">
                      {wallets.map((w) => (
                        <button key={w.name}>
                          <span className="logo">{w.logo}</span>
                          {w.name}
                        </button>
                      ))}
                    </div>
                    <button className="pay-btn" onClick={handlePay}>
                      Pay Now
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>

       
      </main>
      <Footer />
    </>
  );
}
