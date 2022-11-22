import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutDonate from "./pages/About";
import UserPage from "./components/User/UserPage";
import ErrorPage from "./error-page";
import HomePage from "./pages/HomePage";
import Hero from "./components/Hero";
import Form from "./components/Form";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import loader from "./assets/loader.json";
import Lottie from "lottie-react";
import Beneficios from "./components/Beneficios/Beneficios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "form",
    element: <Form />,
  },
  {
    path: "user",
    element: <UserPage />,
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
    element: <LogIn />,
  },
  {
    path: "cadastre",
    element: <SignUp />,
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
