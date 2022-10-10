import React from "react";
import Hero from './Hero';
import Navbar from './Navbar';
import AboutDonate from './AboutDonate';
import Requirements from './Requirements';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutDonate />
      <Requirements />
    </div>
  );
};

export default Home;