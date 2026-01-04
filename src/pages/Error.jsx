import { useNavigate } from "react-router-dom";
import './Error.css';

export default function Error() {
  const navigate = useNavigate(); // ✅ useNavigate for back

  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oops! Page Not Found</p>
      <p>The page you are looking for might have been removed or is temporarily unavailable.</p>

          <a href="/">Go Back Home</a>
    </div>
  );
}
