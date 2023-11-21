import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import HeroLogin from "../Components/HeroLogin/HeroLogin";

const Homepage = () => {
  const data = [
    { label: "Beranda", url: "homepage" },
    { label: "Tentang Kami", url: "/#tentang-kami" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Kontak", url: "/#kontak" },
    { label: "Notifikasi", url: "/#notifikasi" },
    { label: "Kegiatanku", url: "/#kegiatanku" },
  ];

  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <HeroLogin />
    </>
  );
};

export default Homepage;
