import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Hero from "../Components/Hero/Hero";
import Syarat from "../Components/Syarat/Syarat";
import Pkl from "../Components/Pkl/Pkl";
import Contact from "../Components/Contact/Contact";
import TentangKami from "../Components/TentangKami/TentangKami";
import VisiMisi from "../Components/VisiMisi/VisiMisi";
import ProgramStudi from "../Components/ProgramStudi/ProgramStudi";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  const data = [
    { label: "Beranda", url: "/" },
    { label: "Tentang Kami", url: "/#Tentang" },
    { label: "Program", url: "/#program" },
    { label: "Kontak", url: "/#Kontak" },
  ];
  return (
    <>
      <Navbar data={data} login={true} profile={false} />
      <Hero />
      <TentangKami />
      <VisiMisi />
      <ProgramStudi />
      <Contact />
    </>
  );
};

export default Home;
