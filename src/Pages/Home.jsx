import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Hero from "../Components/Hero/Hero";
import Syarat from "../Components/Syarat/Syarat";
import Pkl from "../Components/Pkl/Pkl";
import Footer from "../Components/Footer.jsx/Footer";
import Contact from "../Components/Contact/Contact";
import TentangKami from "../Components/TentangKami/TentangKami";
import VisiMisi from "../Components/VisiMisi/VisiMisi";
import ProgramStudi from "../Components/ProgramStudi/ProgramStudi";

const Home = () => {
  return (
    <>
      <Hero />
      <TentangKami />
      <VisiMisi />
      <ProgramStudi />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
