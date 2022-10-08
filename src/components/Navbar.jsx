import { React, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../dist/blood-donation.png";
import Auth from "../Auth";

const Navbar = () => {
  
  return (
    <>
      <div
        className="flex justify-between items-center w-full h-24 px-7 bg-primary text-white"
        id="navbar-container"
      >
        <img src={Logo} className="w-16" />
        <ul className="flex px-16">
          <li className="p-4 font-bold">Home</li>
          <li className="p-4 font-bold">Doe</li>
          <Link className="p-4 font-bold" to="/login">Login</Link>
          <li className="p-4 font-bold">{<Auth />}</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
