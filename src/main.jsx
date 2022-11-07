import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "../src/components/Home";
import Form from "../src/components/Form";
import ErrorPage from "./error-page";
import AboutDonate from "./components/AboutDonate";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./contexts/AuthContext";
import Modallog from "./components/modal/Modallog";
import ModalReg from "./components/modal/ModalReg";
import UserPage from "./components/User/UserPage";
import SudesteModal from "./components/Onde doar/modais/sudesteModal"
import SulModal from "./components/Onde doar/modais/sulModal"
import CentroModal from "./components/Onde doar/modais/centroModal"
import NorteModal from "./components/Onde doar/modais/norteModal";
import NordesteModal from "./components/Onde doar/modais/nordesteModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutdonate",
        element: <AboutDonate />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "user",
        element: <UserPage />,
        errorElement: <ErrorPage />,
      },
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
]);

const teste = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="form" element={<Form />} />
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
