import { React, useState, useContext } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Logo from "../../dist/blood-donation.png";
import Cadastre from "./Cadastre"
import { AuthContextProvider, UserAuth } from "../contexts/AuthContext";
import Modallog from "./modal/Modallog";
import ModalReg from "./modal/ModalReg";

const Navbar = () => {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout()
      navigate('/')
    } catch (e) {
      console.log(e.message)
    }
  };



  return (
    <div>
      <div className="flex justify-between items-center w-full h-24 px-7 bg-gradient-to-r from-primary to-red-900 text-white"
        id="navbar-container">
        <Link to="/">
          <img src={Logo} className="w-16" />
        </Link>
        <ul className="flex px-16">
          <li className="p-4 font-bold">
            <Link to="/" relative="path">Início</Link></li>
          <li className="p-4 font-bold">
            <Link to="/aboutdonate" relative="path">Sobre</Link>
          </li>
          <li className="p-4 font-bold">
            <Link to="/form" relative="path">Form</Link>
          </li>
          {user ?
            (<div className="p-4 font-bold">
              {user.displayName}
              <li>
                <button onClick={handleLogout}>Sair</button>
              </li>
            </div>) : (<div>
              <ul className="flex px-16">
                <li className="p-4 font-bold">
                  <Modallog />
                </li>
                <li className="p-4 font-bold">
                  <ModalReg />
                </li>
              </ul>
            </div>)
          }
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
