import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import AboutDonate from "./pages/About";
import UserPage from "./components/User/UserPage";
import ErrorPage from "./error-page";
import HomePage from "./pages/HomePage";
import Hero from "./components/Hero";
import Form from "./components/Form";
import LogIn from "./components/auth/LogIn";

import loader from "./assets/loader.json";
import Lottie from "lottie-react";
import Beneficios from "./components/Beneficios/Beneficios";
import LogInPage from "./pages/LogInPage";
import ProtectedRoute from "./contexts/ProtectedRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "form",
    element: (
      <ProtectedRoute>
        <Form />
      </ProtectedRoute>
    ),
  },
  {
    path: "user",
    element: (
      <ProtectedRoute>
        <UserPage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: "sobre",
    element: <AboutDonate />,
  },
  {
    path: "servicos",
    element: <Hero />,
  },
  {
    path: "login",
    element: <LogInPage isRegister={false} />,
  },
  {
    path: "cadastrar",
    element: <LogInPage isRegister={true} />,
  },
  {
    path: "beneficios",
    element: <Beneficios />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
