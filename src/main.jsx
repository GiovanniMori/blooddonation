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
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import { AuthContextProvider, UserAuth } from "./contexts/AuthContext";
import Modallog from "./components/modal/Modallog";
import ModalReg from "./components/modal/ModalReg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    /*loader: async ({ request, params }) => {
            return fetch(
                `/fake/api/teams/${params.teamId}.json`,
                { signal: request.signal }
            );
        },
        action: async ({ request }) => {
            return updateFakeTeam(await request.formData());
        },*/
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "aboutdonate",
        element: <AboutDonate />,
        errorElement: <ErrorPage />,
      },
      {
        path: "form",
        element: <Form />,
        errorElement: <ErrorPage />,
      },
      {
        path: "cadastre",
        element: <ModalReg />,
        errorElement: <ErrorPage />,
      },
      {
        path: "login",
        element: <Modallog />,
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
