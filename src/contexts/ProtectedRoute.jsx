import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";
import loader from "../assets/loader.json";
import Lottie from "lottie-react";

function ProtectedRoute({ children }) {
  const { user } = UserAuth();
  console.log(user);

  if (!user?.displayName && user != null) {
    // console.log("entrou", user);
    return (
      <div
        className=""
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Lottie className="w-36" animationData={loader} loop={true} />
      </div>
    );
    console.log("está");
  } else if (user === null) {
    console.log("user===null");
    return <Navigate to="/login" />;
  } else if (user.displayName) {
    return children;
  }
}

export default ProtectedRoute;
