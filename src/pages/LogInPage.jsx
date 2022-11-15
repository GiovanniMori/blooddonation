import React from "react";
import LogIn from "../components/auth/LogIn";
import Logo from "../assets/blood-donation.png";
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
            <img src={Logo} className="w-24 h-24 pl-8 pt-8 mb-6   absolute" />
          </Link>
        </div>
        <div className="mt-28 mb-auto ml-auto mr-auto  sm:mt-auto">
          <LogIn isRegister={props.isRegister} />
        </div>
      </div>
    );
  }
};

export default LogInPage;
