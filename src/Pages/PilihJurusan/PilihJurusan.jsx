import React from "react";
import JurusanCarousel from "../../Components/Jurusan/JurusanCarousel";
import Img from "../../assets/pilih-jurusan/pilih-jurusan-img.png";
import Navbar from "../../Components/Navbar/Navbar";
import JurusanCard from "../../Components/Jurusan/JurusanCard";
import JurusanList from "./JurusanList";
import PilihJurusanStyled from "./PilihJurusan.styled.js";

const PilihJurusan = () => {
  const data = [
    { label: "Beranda", url: "/homepage" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Notifikasi", url: "/notifikasi" },
    { label: "Kegiatanku", url: "/kegiatanku" },
  ];
  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <PilihJurusanStyled>
        <div className="bg-color">
          <div className="container mt-5 pt-4 pb-5">
            <div className="row row-cols-1 row-cols-lg-2 d-flex ">
              <div className="col">
                <JurusanCarousel />
              </div>
              <img
                src={Img}
                alt=""
                className="col d-none d-lg-block img-fluid"
              />
            </div>

            <div className="bg-white px-4 pt-4 rounded mt-4">
              <h1 className="text-blue text-center fw-bold">
                Cari Jurusan Yang kamu Tempuh
              </h1>

              <div className="row row-cols-2 row-cols-lg-3 d-flex">
                {JurusanList.map((item, index) => {
                  return (
                    <JurusanCard jurusan={item} key={index} className="col" />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </PilihJurusanStyled>
    </>
  );
};

export default PilihJurusan;
