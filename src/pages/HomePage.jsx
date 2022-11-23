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
      {loading ? (
        <div className="bg-blue-500 h-screen flex ">
          CARREGANDO
          <Lottie
            className=" h-36 m-auto bg-red-500"
            animationData={loader}
            loop={true}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="flex justify-evenly p-8 pt-10 flex-wrap text-center  ">
            <span className="w-[525px]  top-6 align-middle mt-auto mb-auto ">
              <h1 className="text-5xl mb-6 leading-tight ">
                Você sabia que <b className="text-red-500">doar</b> sangue pode
                salvar mais de uma vida?
              </h1>
              <h1 className="text-2xl mb-6">
                Nem todo <b className="text-red-500">herói</b> usa capa, mas
                todo doador é um herói para alguém.
              </h1>
              <aside>
                <Link to="/sobre" relative="path">
                  <button className="rounded-lg w-36 h-14 bg-red-500 text-white hover:scale-105 align-middle">
                    Saber mais
                  </button>
                </Link>
              </aside>
            </span>
            <aside className="max-w-5xl mt-8 ">
              <img src={Ilustration} />
            </aside>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
