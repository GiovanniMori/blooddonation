import React from "react";
import LogIn from "../components/auth/LogIn";
import Logo from "../assets/logo.svg";
import { Link, Navigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const LogInPage = (props) => {
  const { user } = UserAuth();
  if (user) {
    console.log("oi", user);
    return <Navigate to="/" />;
  } else {
    return (
      <div className="w-[100vw]  h-[100vh] flex flex-col">
        {console.log("return2", user)}
        <div>
          <Link to="/" relative="path">
            <img src={Logo} className="w-8 h-12 ml-8 mt-6  " />
          </Link>
        </div>
        <div className="items-center flex mt-6 p-6 sm:mt-36 sm:p-0">
          <LogIn isRegister={props.isRegister} />
        </div>
      </div>
    );
  }
};

export default LogInPage;
