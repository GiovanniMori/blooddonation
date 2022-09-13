import React from "react";
import DataBlood from "../assets/data-blood.jpg";

const DataContainer = () => {
  return (
    <div className="bg-[#C08081] w-full my-16">
      <h1 className="text-gray-900 font-bold text-4xl mx-auto text-center pt-8">
        Dados da Doação de sangue no Brasil
      </h1>
      <img className="w-[500px] mx-auto my-4 py-8" src={DataBlood} alt="/" />

      <h2 className="text-red-200 font-bold text-4xl mx-auto text-center pb-16">Precisamos da sua ajuda. DOE</h2>
    </div>
  );
};

export default DataContainer;
