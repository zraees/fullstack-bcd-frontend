import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType, IUser } from "../types/types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  //   const [user, setUser] = useLocalStorage("user", null);
  const [user, setUser] = useState(() => {
    try {
      const value = window.localStorage.getItem("user");
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem("user", JSON.stringify(null));
        return null;
      }
    } catch (err) {
      return null;
    }
  }); //JSON.parse(localStorage.getItem("user"))

  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: IUser) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
    navigate("/businesses");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  //   const value = useMemo(
  //     () => ({
  //       user,
  //       login,
  //       logout,
  //     }),
  //     [user]
  //   );
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
