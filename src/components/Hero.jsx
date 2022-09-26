import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="w-full text-center flex pt-8 flex-col bg-quartenary mx-auto justify-center">
      <h1 className="text-5xl md:py-6 text-primary font-bold">
        Doe Sangue, Salve uma vida
      </h1>
      <h1 className="text-3xl md:py-6 text-white font-bold">
        Ganhe Beneficios doando sangue
      </h1>
      <div className="flex justiify-center text-4x1 items-center mx-auto">
        <p className="text-4xl text-white font-bold ">
          Por um Brasil mais doador
        </p>
        <Typed className="text-4xl text-tertiary font bold px-4"
          strings={["Doe", "Ganhe", "Ajude"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
      <button className="bg-primary w-[200px] rounded-md font-medium text-white text-center px-2 py-4 mx-auto my-6">
        Saiba mais
      </button>
    </div>
  );
};

export default Hero;
