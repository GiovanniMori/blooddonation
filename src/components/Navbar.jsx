import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/blood-donation.png";

import { UserAuth } from "../contexts/AuthContext";
import ModalLogIn from "./modal/ModalLogIn";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="pt-6 pl-8 pr-8 pb-6 flex justify-between text-xl text-weigh font-medium h-20 items-center overflow-hidden ">
      <div className="flex gap-5 mr-36 items-center">
        <img src={Logo} width="40px" />
        <h1>Blood Donation</h1>
      </div>
      <div className=" items-center hidden lg:flex ">
        <ul className="flex gap-20 items-center ">
          <li>
            <Link to="/" relative="path">
              Início
            </Link>
          </li>
          <li>
            <Link to="/sobre" relative="path">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/servicos" relative="path">
              Serviços
            </Link>
          </li>
          {user ? (
            <>
              <li className="text-red-500">{user.displayName}</li>
              <button onClick={handleLogout}>Sair</button>
            </>
          ) : (
            <>
              <li>
                <ModalLogIn title="Logar" />
              </li>
              <li className="rounded-lg p-4 bg-red-500 text-white hover:scale-105 ">
                <Link to="/cadastrar" relative="path">
                  Cadastrar
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
