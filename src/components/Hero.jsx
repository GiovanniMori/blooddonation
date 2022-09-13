import React from "react";
//import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="w-full text-center flex mt-16 max-w-[800px] flex-col  mx-auto justify-center">
      <h1 className="text-3xl md:py-6 text-red-500 font-bold">
        Doe Sangue, Salve uma vida
      </h1>
      <h1 className="text-5xl md:py-6 text-white font-bold">
        Ganhe Beneficios doando sangue
      </h1>
      <div className="flex px-16">
        <p className="text-4xl md:py-6 text-white font-bold px-5">
          Por um Brasil mais doador
        </p>

      </div>
      <button className="bg-[#65000B] w-[200px] rounded-md font-medium text-white text-center px-2 py-4 mx-auto my-6">
        Saiba mais
      </button>
    </div>
  );
};

export default Hero;
