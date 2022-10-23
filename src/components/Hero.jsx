import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import {Link} from "react-router-dom";
 

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
        <span className='text-4xl text-tertiary font bold px-4' ref={el}></span>
        
      </div>
      <Link to="/about" className="bg-primary w-[200px] rounded-md font-medium text-white text-center px-2 py-4 mx-auto my-6">
        Saiba mais
      </Link>
    </div>
  );
};

export default Hero;
