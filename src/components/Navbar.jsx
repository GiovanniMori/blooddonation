import { React, useState } from "react";
import Logo from "../../dist/blood-donation.png";
import Auth from "../Auth";
import SignIn from "../SignIn";

const Navbar = () => {
  
  return (
    <>
      <div
        className="flex justify-between items-center w-full h-24 px-7 bg-primary text-white"
        id="navbar-container"
      >
        <img src={Logo} className="w-16" />
        <ul className="flex px-16">
          <li className="p-4 font-bold">{<Auth />}</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
