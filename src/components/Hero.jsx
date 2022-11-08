import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import OndeDoar from "../components/Onde doar/OndeDoar";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Doe", "Ganhe", "Ajude"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full text-center flex flex-col py-16 bg-primary mx-auto justify-center">
        <h1 className="text-5xl md:py-6 text-white font-bold">
          Doe Sangue, Salve uma vida
        </h1>
        <h1 className="text-3xl md:py-6 text-white font-bold">
          Ganhe Beneficios doando sangue
        </h1>
        <div className="flex justiify-center text-4x1 items-center mx-auto">
          <p className="text-4xl text-white font-bold ">
            Por um Brasil mais doador
          </p>
          <span
            className="text-4xl text-tertiary font bold px-4"
            ref={el}
          ></span>
        </div>
        <Link
          to="/aboutdonate"
          className="bg-primary w-[200px] border-4 border-white mt-16 border-opacity-70 text-3xl py-6 rounded-md font-medium text-white text-center px-2 mx-auto my-6"
        >
          Saiba mais
        </Link>
        <OndeDoar />
      </div>
    </>
  );
};

export default Hero;
