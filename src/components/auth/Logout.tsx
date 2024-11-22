import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LogoutPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    // Redirect to sign-in page or home page
    navigate("/");
  }, []);

  return null; // No UI needed for logout
};

export default LogoutPage;
