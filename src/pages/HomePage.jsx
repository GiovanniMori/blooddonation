import { React, useState, useContext, useEffect } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Ilustration from "../assets/ilustration.svg";
import { AuthContextProvider, UserAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import loader from "../assets/loader.json";
import Lottie from "lottie-react";

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

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex justify-between pl-20 pt-10 pr-6 h-50 ">
        <div className="my-auto">
        <span className=" w-[525px]">
          <h1 className="text-[3rem] mb-6">
            Você sabia que <b className="text-red-500">doar</b> sangue pode
            salvar mais de uma vida?
          </h1>
          <h1 className="text-[2rem] mb-10">
            Nem todo <b className="text-red-500">héroi</b> usa capa, mas todo
            doador é um herói para alguém
          </h1>
          <Link to="sobre" className="rounded-lg py-7 px-7 items-center bg-red-500 text-white hover:scale-105">
            Saber mais
          </Link>
        </span>
        </div>
        <aside className=" ">
          <img src={Ilustration} />
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
