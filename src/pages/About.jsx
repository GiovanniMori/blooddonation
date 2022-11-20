import React from "react";
import loader from "../assets/loader.json";
import Lottie from "lottie-react";
import Navbar from "../components/Navbar";
import Caminho from "../Caminho/Caminho";
import Ilustration from "../assets/ilustration.svg";

const AboutDonate = () => {
  return (
    <>
      <Navbar />
      <div className="w-full py-8 px-10">
        <div className="flex pl-20 pt-10 pr-6 h-50 justify-between">
          <div className="flex flex-col my-auto">
            <h1 className="text-8xl text-primary font-semibold mb-8">Voce sabia que apenas 1% da população doa sangue?</h1>
            <h3 className="text-black text-3xl mb-8">Esse FATO é um grande problema, pois a escassez por sangue nos hemocentros nacionais
             se torna uma realidade fazendo com que pessoas corram risco de vida por falta desse recurso natural e fundamental para nossa existência.
           </h3>
           <h1 className="text-red-900 inline-block text-4xl font-semibold ">O que falta para você nos ajudar nessa batalha?</h1>
          </div>
          <img src={Ilustration} />
        </div> 
        <div className="p-32">
          <h1 className="text-7xl text-orange-900 font-bold text-center">Como saber se eu posso DOAR?</h1>
        </div>
        <Caminho />
      </div>
    </>
  );
};

export default AboutDonate;
