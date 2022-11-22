import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
  const { user } = UserAuth();
  if (!user) {
    console.log("entrou");
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
