import React from "react";
import JurusanCarousel from "../../Components/Jurusan/JurusanCarousel";
import Img from "../../assets/pilih-jurusan/pilih-jurusan-img.png";
import Navbar from "../../Components/Navbar/Navbar";

const PilihJurusan = () => {
  const data = [
    { label: "Beranda", url: "/homepage" },
    { label: "Program", url: "/program" },
    { label: "Notifikasi", url: "/notifikasi" },
    { label: "Kegiatanku", url: "/kegiatanku" },
  ];
  return (
    <>
      <Navbar data={data} />
      <div className="container my-5 pt-5">
        <div className="row row-cols-1 row-cols-lg-2 d-flex ">
          <div className="col">
            <JurusanCarousel />
          </div>
          <img src={Img} alt="" className="col" />
        </div>
      </div>
    </>
  );
};

export default PilihJurusan;
