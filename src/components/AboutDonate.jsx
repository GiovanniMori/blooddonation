import React from "react";
import loader from '../assets/loader.json'
import Lottie from "lottie-react";

const AboutDonate = () => {
  return (
    <div className="bg-white w-full py-8 px-10">
      <div className="flex flex-col px-6">
        <h1 className="text-gray-900 font-bold text-4xl mx-auto text-center py-4">
          Sobre a doação de sangue
        </h1>
        <Lottie className='w-60' animationData={loader} loop={true} />
        <p className='text-primary text-xl font-bold'>
          Doar sangue é um processo simples, rápido e totalmente seguro. Onde em
          muitos casos, a transfusão de sangue é a única esperança de vida para
          algumas pessoas. Tem sempre alguém necessitando de uma doação.
        </p>
      </div>
      <div className='flex flex-col px-6'>
        <h1 className="text-gray-900 font-bold text-4xl mx-auto text-center py-4">
          Qual a importância da doação de sangue
        </h1>
        <p className="text-primary text-xl font-bold">
          O ato de doar sangue é, em si, um ato extremamente importante, uma vez
          que o sangue humano não pode ser fabricado artificialmente, ou seja, ele
          é insubstituível, agora mais que nunca a doação é de extrema
          importância, uma vez que, devido a pandemia, os estoques foram
          impactados de maneira negativa. Além do mais, em algumas situações, a
          transfusão é inevitável, sendo, portanto, essencial que haja sangue em
          estoque, o qual é conseguido exclusivamente por doação.
        </p>
      </div>
      <h2 className="text-quartenary font-bold text-4xl mx-auto text-center py-8">
        Precisamos da sua ajuda. DOE
      </h2>
    </div>
  );
};

export default AboutDonate;
