import React from "react";
import loader from "../assets/loader.json";
import Lottie from "lottie-react";
import Navbar from "../components/Navbar";

const AboutDonate = () => {
  return (
    <>
      <Navbar />
      <div className=" w-full py-8 px-10">
        <div className="flex flex-col px-6">
          <h1 className="text-gray-900 font-bold text-4xl mx-auto text-center py-4">
            Sobre a doação de sangue
          </h1>
          <Lottie className="w-60" animationData={loader} loop={true} />
          <p className="text-primary text-xl font-bold">
            Doar sangue é um processo simples, rápido e totalmente seguro. Onde
            em muitos casos, a transfusão de sangue é a única esperança de vida
            para algumas pessoas. Tem sempre alguém necessitando de uma doação.
          </p>
        </div>
        <div className="flex flex-col px-6">
          <h1 className="text-gray-900 font-bold text-4xl mx-auto text-center py-4">
            Qual a importância da doação de sangue
          </h1>
          <p className="text-primary text-xl font-bold">
            O ato de doar sangue é, em si, um ato extremamente importante, uma
            vez que o sangue humano não pode ser fabricado artificialmente, ou
            seja, ele é insubstituível, agora mais que nunca a doação é de
            extrema importância, uma vez que, devido a pandemia, os estoques
            foram impactados de maneira negativa. Além do mais, em algumas
            situações, a transfusão é inevitável, sendo, portanto, essencial que
            haja sangue em estoque, o qual é conseguido exclusivamente por
            doação.
          </p>
        </div>
        <h2 className="text-quartenary font-bold text-4xl mx-auto text-center py-8">
          Precisamos da sua ajuda. DOE
        </h2>
        <div className="bg-primary flex justify-between px-10 py-9">
          <div className="px-10">
            <h1 className="font-bold text-white text-2xl py-2">
              Requisitos para doação
            </h1>
            <ul className="py-4">
              <li className="font-bold text-base text-quartenary">
                ● Estar em boas condições de saúde.
              </li>
              <li className="font-bold text-base text-quartenary">
                ● Pesar no mínimo 50 kg.
              </li>
              <li className="font-bold text-base text-quartenary">
                ● Ter entre 16 e 69 anos, desde que a primeira doação tenha sido
                feita até 60 anos.
              </li>
              <li className="font-bold text-base text-quartenary">
                ●Apresentar documento original com foto recente, que permita a
                identificação do candidato, emitido por órgão oficial;
              </li>
            </ul>
          </div>
          <div className="px-10">
            <h1 className="font-bold text-white text-2xl py-2">
              Pessoas que não podem doar:
            </h1>
            <ul className="py-4">
              <li className="font-bold text-base text-quartenary">
                ● Pessoas que tiveram Hepatite após os 11 anos de idade.
              </li>
              <li className="font-bold text-base text-quartenary">
                ● Pessoas que usaram de drogas ilícitas injetáveis.
              </li>
              <li className="font-bold text-base text-quartenary">
                ● Pessoas que possuem evidência clínica ou laboratorial das
                seguintes doenças infecciosas transmissíveis pelo sangue:
                Hepatites B e C, AIDS (vírus HIV), doenças associadas aos vírus
                HTLV I e II e Doença de Chagas.
              </li>
              <li className="font-bold text-base text-quartenary">
                ● Pessoas que tiveram Malária.
              </li>
              <li className="font-bold text-base text-quartenary">
                ● Pessoas que tem Mal de Parkinson
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDonate;
