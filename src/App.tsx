import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { isDarkTheme } = useTheme();
  return (
    <div
      data-bs-theme={isDarkTheme ? "dark" : "light"}
      className={isDarkTheme ? "bg-dark text-white" : "bg-light text-dark"}
    >
      {/* <AuthProvider> */}
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
