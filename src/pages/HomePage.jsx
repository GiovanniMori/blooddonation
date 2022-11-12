import { React, useState, useContext } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Ilustration from "../assets/ilustration.svg";
import { AuthContextProvider, UserAuth } from "../contexts/AuthContext";
import Modallog from "../components/modal/ModalLogIn";
import ModalReg from "../components/modal/ModalSignUp";
import Navbar from "../components/Navbar";

const HomePage = () => {
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
    <div>
      <Navbar />
      <div className="flex justify-evenly p-8 pt-10 flex-wrap text-center  ">
        <span className="w-[525px]  top-6 align-middle mt-auto mb-auto ">
          <h1 className="text-5xl mb-6 leading-tight ">
            Você sabia que <b className="text-red-500">doar</b> sangue pode
            salvar mais de uma vida?
          </h1>
          <h1 className="text-2xl mb-6">
            Nem todo <b className="text-red-500">herói</b> usa capa, mas todo
            doador é um herói para alguém
          </h1>
          <aside>
            <button className="rounded-lg w-36 h-14 bg-red-500 text-white hover:scale-105 align-middle">
              Saber mais
            </button>
          </aside>
        </span>
        <aside className="max-w-5xl mt-8 ">
          <img src={Ilustration} />
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
