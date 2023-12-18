import React from "react";
import JurusanCarousel from "../../../Components/Jurusan/JurusanCarousel";
import Img from "../../../assets/pilih-jurusan/pilih-jurusan-img.png";
import Navbar from "../../../Components/Navbar/Navbar";
import JurusanCard from "../../../Components/Jurusan/JurusanCard";
import PilihJurusanStyled from "./PilihJurusan.styled.js";

import { useEffect, useState } from "react";
import axios from "axios";

const PilihJurusan = () => {
  const data = [
    { label: "Beranda", url: "/homepage" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Notifikasi", url: "/notifikasi" },
    { label: "Kegiatanku", url: "/status-register" },
  ];

  const [dataJurusan, setDataJurusan] = useState([]);
  const dataJurusanUrl = "http://localhost:4000/api/v1/jurusan";

  const getDataJurusan = async () => {
    const response = await axios.get(dataJurusanUrl);
    const data = response.data.data;
    setDataJurusan(data);
  };

  useEffect(() => {
    try {
      getDataJurusan();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
                {dataJurusan.map((item, index) => (
                  <JurusanCard
                    key={index}
                    gambar={item.gambar_jurusan}
                    nama={item.nama_jurusan}
                    url={`/cari-perusahaan/${item.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </PilihJurusanStyled>
    </>
  );
};

export default PilihJurusan;
