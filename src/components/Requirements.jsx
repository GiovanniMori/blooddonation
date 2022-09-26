import React from "react";

const Requirements = () => {
  return (
    <div className="bg-primary flex justify-between px-10 py-9">
      <div className='px-10'>
        <h1 className="font-bold text-white text-2xl py-2">Requisitos para doação</h1>
        <ul className='py-4'> 
          <li className='font-bold text-base text-quartenary'>● Estar em boas condições de saúde.</li>
          <li className='font-bold text-base text-quartenary'>● Pesar no mínimo 50 kg.</li>
          <li className='font-bold text-base text-quartenary'>
          ● Ter entre 16 e 69 anos, desde que a primeira doação tenha sido feita
            até 60 anos.
          </li>
          <li className='font-bold text-base text-quartenary'>
          ●Apresentar documento original com foto recente, que permita a
            identificação do candidato, emitido por órgão oficial;
          </li>
        </ul>
      </div>
      <div className='px-10'>
        <h1 className="font-bold text-white text-2xl py-2">Pessoas que não podem doar:</h1>
        <ul className='py-4'>
          <li className='font-bold text-base text-quartenary'>● Pessoas que tiveram Hepatite após os 11 anos de idade.</li>
          <li className='font-bold text-base text-quartenary'>● Pessoas que usaram de drogas ilícitas injetáveis.</li>
          <li className='font-bold text-base text-quartenary'>
          ● Pessoas que possuem evidência clínica ou laboratorial das seguintes doenças infecciosas
            transmissíveis pelo sangue: Hepatites B e C, AIDS (vírus HIV),
            doenças associadas aos vírus HTLV I e II e Doença de Chagas.
          </li>
          <li className='font-bold text-base text-quartenary'>● Pessoas que tiveram Malária.</li>
          <li className='font-bold text-base text-quartenary'>● Pessoas que tem Mal de Parkinson</li>
        </ul>
      </div>
    </div>
  );
};

export default Requirements;
