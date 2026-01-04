import { useEffect, useRef, useState } from "react";
import "./Otp.css";

export default function Otp() {
  const [otp, setOtp] = useState("");
  const [correctOtp, setCorrectOtp] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(30);

  const otpRef = useRef(null);
  const otpGenerated = useRef(false); // 🔥 IMPORTANT GUARD

  // ===== OTP GENERATOR =====
  const generateOtp = () =>
    Math.floor(10000 * Math.random())
      .toString()
      .padStart(4, "0");

  // ===== GENERATE OTP ONLY ON OTP PAGE =====
  useEffect(() => {
    if (otpGenerated.current) return; // ❌ STOP second call
    otpGenerated.current = true;

    const newOtp = generateOtp();
    setCorrectOtp(newOtp);
    alert("YOUR OTP IS :=> " + newOtp); // demo only
    otpRef.current?.focus();
  }, []);

  // ===== RESEND TIMER =====
  useEffect(() => {
    if (timer === 0) return;
    const i = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(i);
  }, [timer]);

  // ===== VERIFY OTP =====
  const verifyOtp = () => {
    if (otp.length !== 4 || /\D/.test(otp)) {
      showError("Enter valid 4 digit OTP");
      return;
    }

    if (otp === correctOtp) {
      setMessage("✅ OTP Verified Successfully");
      setTimeout(() => (window.location.href = "/"), 1200);
      return;
    }

    const left = attemptsLeft - 1;
    setAttemptsLeft(left);
    showError("❌ Wrong OTP");

    if (left <= 0) {
      setTimeout(() => (window.location.href = "/login"), 1000);
    }
  };

  // ===== ERROR HANDLER =====
  const showError = (msg) => {
    setMessage(msg);
    setError(true);
    setOtp("");
    setTimeout(() => setError(false), 400);
  };

  // ===== RESEND OTP =====
  const resendOtp = () => {
    const newOtp = generateOtp();
    setCorrectOtp(newOtp);
    setAttemptsLeft(3);
    setOtp("");
    setTimer(30);
    setMessage("📩 New OTP sent");
    alert("NEW OTP :=> " + newOtp); // demo only
  };

  return (
    <div className="otp-page">
      <div className="otp-card">
        <h2>OTP Verification</h2>
        <p className="otp-sub">Enter the 4-digit code sent to your number</p>

        <input
          ref={otpRef}
          type="text"
          maxLength="4"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="• • • •"
          className={`otp-input ${error ? "error" : ""}`}
        />

        <button
          className="otp-btn"
          onClick={verifyOtp}
          disabled={otp.length !== 4}
        >
          Verify OTP
        </button>

        {message && <p className="otp-message">{message}</p>}

        <div className="otp-controls">
          <button
            className="otp-resend"
            onClick={resendOtp}
            disabled={timer > 0}
          >
            {timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}
          </button>

          <div className="otp-attempts">
            Attempts left: {attemptsLeft}
          </div>
        </div>
      </div>
    </div>
  );
}
