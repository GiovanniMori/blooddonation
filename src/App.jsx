import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutDonate from "./pages/About";
import CentroModal from "./components/Onde doar/modais/centroModal";
import NordesteModal from "./components/Onde doar/modais/nordesteModal";
import NorteModal from "./components/Onde doar/modais/norteModal";
import SudesteModal from "./components/Onde doar/modais/sudesteModal";
import SulModal from "./components/Onde doar/modais/sulModal";
import UserPage from "./components/User/UserPage";
import ErrorPage from "./error-page";
import HomePage from "./pages/HomePage";
import Hero from "./components/Hero";
import Form from "./components/Form";
import LogIn from "./components/auth/LogIn";
import LogInPage from "./pages/LogInPage";

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
    children: [
      {
        path: "sudeste",
        element: <SudesteModal />,
        errorElement: <ErrorPage />,
      },
      {
        path: "sul",
        element: <SulModal />,
        errorElement: <ErrorPage />,
      },
      {
        path: "centro",
        element: <CentroModal />,
        errorElement: <ErrorPage />,
      },
      {
        path: "norte",
        element: <NorteModal />,
        errorElement: <ErrorPage />,
      },
      {
        path: "nordeste",
        element: <NordesteModal />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LogInPage isRegister={false} />,
  },
  {
    path: "cadastre",
    element: <LogInPage isRegister={true} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
