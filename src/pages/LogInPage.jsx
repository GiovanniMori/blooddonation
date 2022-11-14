import React from "react";
import LogIn from "../components/auth/LogIn";
import Logo from "../assets/blood-donation.png";

function LogInPage(props) {
  return (
    <div className="w-[100vw] bg-red-500 h-[100vh] flex flex-col">
      <div>
        <img
          src={Logo}
          className="w-24 h-24 pl-8 pt-8 mb-6  bg-green-500 absolute"
        />
      </div>
      <div className=" mt-auto mb-auto ml-auto mr-auto  bg-blue-500 md:mt-0 ">
        <LogIn isRegister={props.isRegister} />
      </div>
    </div>
  );
}

export default LogInPage;
