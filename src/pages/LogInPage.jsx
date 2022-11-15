import React from "react";
import LogIn from "../components/auth/LogIn";
import Logo from "../assets/blood-donation.png";

function LogInPage(props) {
  return (
    <div className="w-[100vw]  h-[100vh] flex flex-col">
      <div>
        <img src={Logo} className="w-24 h-24 pl-8 pt-8 mb-6   absolute" />
      </div>
      <div className="mt-28 mb-auto ml-auto mr-auto  sm:mt-auto">
        <LogIn isRegister={props.isRegister} />
      </div>
    </div>
  );
}

export default LogInPage;
