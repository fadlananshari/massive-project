import React from "react";
import JurusanCarousel from "../../../Components/Jurusan/JurusanCarousel";
import Img2 from "../../../assets/perusahaan/gambar2.png";
import Img1 from "../../../assets/perusahaan/gambar1.png";
import Navbar from "../../../Components/Navbar/Navbar";
import PerusahaanCard from "../../../Components/Perusahaan/PerusahaanCard";
import PerusahanList from "./PerusahaanList";
import CariPerusahaan_adminStyled from "./CariPerusahaan_admin.style";
import PerusahaanCard_admin from "../../../Components/Perusahaan/PerusahaanCard_admin";
import { Link } from "react-router-dom";

const CariPerusahaanadmin = () => {
  const data = [
    { label: "Beranda", url: "/homepage" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Notifikasi", url: "/notifikasi-admin" },
    { label: "Kegiatanku Siswa", url: "/kegiatan-siswa" },
  ];
  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <CariPerusahaan_adminStyled>
        <div className="bg-color">
          <div className="container mt-5 pt-4 pb-5">
            <div className="row row-cols-1 row-cols-lg-2 d-flex ">
              <div className="col">
                <div className="position-relative">
                  <img src={Img1} alt="" className="img-fluid" />
                  <div
                    className="ms-4 text-white position-absolute w-100"
                    style={{ top: "67%" }}
                  >
                    <h3 className=""> Teknik Komputer dan Jaringan (TKJ)</h3>
                  </div>
                </div>
              </div>
              <img
                src={Img2}
                alt=""
                className="col d-none d-lg-block img-fluid"
              />
            </div>

            <div className="d-flex justify-content-end mt-4">
              <Link to="/tambah-perusahaan" className="">
                <button type="submit" className="btn btn-primary py-2">
                  Tambah Tempat PKL
                </button>
              </Link>
            </div>

            <div className="rounded">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 d-flex">
                {PerusahanList.map((item, index) => {
                  return (
                    <PerusahaanCard_admin
                      perusahaan={item}
                      key={index}
                      className="col"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </CariPerusahaan_adminStyled>
    </>
  );
};

export default CariPerusahaanadmin;
