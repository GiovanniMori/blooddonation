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
      <div className="w-full text-center flex flex-col pt-32  mx-auto justify-center">
        <h1 className="text-7xl md:py-6 text-primary font-bold mt-8 ">
          Descubra a localização do Hemocentro mais próximo
        </h1>
        <h1 className="text-5xl mt-8 md:py-6 text-tertiary font-bold">
          Ganhe Benefícios doando sangue
        </h1>
        <div className="flex justiify-center text-4x1 items-center mx-auto">
          <p className="text-6xl text-red-900 font-bold mt-8  ">
            Juntos por um Brasil mais doador
          </p>
          <span
            className="text-6xl text-tertiary font bold px-4 mt-8 "
            ref={el}
          ></span>
        </div>
        <OndeDoar />
      </div>
    </>
  );
};

export default Hero;
