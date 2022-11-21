import React from "react";
import loader from "../assets/loader.json";
import Lottie from "lottie-react";
import Navbar from "../components/Navbar";
import Caminho from "../Caminho/Caminho";
import Ilustration from "../assets/blood-data.jpeg";
import LottieView from "lottie-react"
import bloodDance from "../assets/blood-dance.json"

const AboutDonate = () => {
  return (
    <>
      <Navbar />
      <div className="w-full py-8 px-10">
        <div className="flex pl-20 pt-10 pr-20 h-50 justify-between">
          <div className="flex flex-col my-auto">
            <h1 className="text-8xl text-primary font-semibold mb-8">No BRASIL apenas 1% da população doa sangue</h1>
            <h3 className="text-black text-3xl mb-8">Esse FATO é um grande problema, pois a escassez por sangue nos hemocentros nacionais
             se torna uma realidade fazendo com que pessoas corram risco de vida por falta desse recurso natural e fundamental para nossa existência.
           </h3>
           <h1 className="text-red-900 inline-block text-4xl font-semibold ">O que falta para você nos ajudar nessa batalha?</h1>
          </div>
          <img src={Ilustration} />
        </div> 
        <div className="py-32 flex">
          <div className="p-8">
            <h1 className="text-7xl text-orange-900 font-bold text-center">Motivos para doar sangue</h1>
            <ul className="mt-16">
              <li className="text-4xl font-semibold text-gray-700 mb-3">1-Uma única doação pode salvar até quatro vidas</li>
              <li className="text-4xl font-semibold text-gray-700 mb-3">2- Não existe substituto para o sangue</li>
              <li className="text-4xl font-semibold text-gray-700 mb-3">3- Não há risco de contrair doenças durante a doação</li>
              <li className="text-4xl font-semibold text-gray-700 mb-3">4 - Seu organismo repõe rapidamente o sangue doado</li>
              <li className="text-4xl font-semibold text-gray-700 mb-3">5- O doador tem direito a um dia de folga no trabalho</li>
            </ul>
          </div>

          <div className="p-8">
            <h1 className="text-7xl text-orange-900 font-bold text-center">Requisitos para doar sangue</h1>
            <ul className="mt-16">
              <li className="text-4xl font-semibold text-gray-700 mb-3">1-Pesar no mínimo 50 quilos</li>
              <li className="text-4xl font-semibold text-gray-700 mb-3">2-Ter idade entre 16 e 69 anos de idade</li>
              <li className="text-4xl font-semibold text-gray-700 mb-3">3-Apresentar documento original com foto recente</li>
              <li className="text-4xl font-semibold text-gray-700 mb-3">4-Não fazer uso de drogas ilícitas injetáveis</li>
              <li className="text-4xl font-semibold text-gray-700 mb-3">5- O doador tem direito a um dia de folga no trabalho</li>
            </ul>
          </div>
        </div>
        <Caminho />
      </div>
    </>
  );
};

export default AboutDonate;
