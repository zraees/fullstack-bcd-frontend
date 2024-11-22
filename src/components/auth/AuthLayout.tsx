import { useOutlet } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";

export const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <AuthProvider>{outlet}</AuthProvider>
  );
};