import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import { Index as Home } from "./pages/home/Index";
import { Index as Services } from "./pages/services/Index";
import { Index as Businesses } from "./pages/businesses/Index";
import { Index as AboutUs } from "./pages/about-us/Index";
import { Index as UserProfile } from "./pages/user-profile";
import { ThemeProvider } from "./contexts/ThemeContext";
import BusinessDetail from "./components/business/BusinessDetail";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { AuthLayout } from "./components/auth/AuthLayout";
import { LoginPage } from "./components/auth/Login";
import { AuthProvider } from "./contexts/AuthContext";
import LogoutPage from "./components/auth/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <AuthLayout />
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/login", element: <LoginPage /> },
          { path: "/logout", element: <LogoutPage /> },
          { path: "businesses", element: <Businesses /> },
          { path: "business-detail/:id", element: <BusinessDetail /> },
          { path: "services", element: <Services /> },
          { path: "about-us", element: <AboutUs /> },
          {
            path: "/auth/user-profile",
            element: (
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);

// createRoot(document.getElementById("root")!).render(
//   // <StrictMode>
//   <ThemeProvider>
//           <AuthProvider>

//     <RouterProvider router={router}></RouterProvider>
// </AuthProvider>
//   </ThemeProvider>

//   // </StrictMode>
// );
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>
);
