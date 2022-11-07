import React from "react";
import Hero from './Hero';
import Navbar from './Navbar';
import AboutDonate from './AboutDonate';
import Requirements from './Requirements';
import OndeDoar from "./Onde doar/OndeDoar";

const Home = () => {
  return (
    <div>
      <Hero />
      <OndeDoar />
      <Requirements />
    </div>
  );
};

export default Home;