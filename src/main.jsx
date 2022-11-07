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
    ],
  },
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "cadastre",
    element: <SignUp />,
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
