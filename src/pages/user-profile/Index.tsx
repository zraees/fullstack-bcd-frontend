import { useAuth } from "../../hooks/useAuth";

export const Index = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>This is a Secret page  User: {user}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};