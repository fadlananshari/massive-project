// import JurusanCarousel from '../../Components/Jurusan/JurusanCarousel';
import Img2 from "../../../assets/perusahaan/gambar2.png";
import Img1 from "../../../assets/perusahaan/gambar1.png";
import Navbar from "../../../Components/Navbar/Navbar";
import PerusahaanCard from "../../../Components/Perusahaan/PerusahaanCard";
import CariPerusahaanStyled from "./CariPerusahaan.style";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CariPerusahaan = () => {
  const { id } = useParams();

  const dataPklByJurusan = `http://localhost:4000/api/v1/pkl-jurusan/${id}`;
  const [dataPkl, setDataPkl] = useState([]);

  const getDataPkl = async () => {
    const response = await axios.get(dataPklByJurusan);
    const data = response.data.data;
    setDataPkl(data);
  };

  useEffect(() => {
    try {
      getDataPkl();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // filter data by jurusan
  const getJurusanByID = dataPkl.filter((item) => item.jurusan_id);

  const data = [
    { label: "Beranda", url: "/homepage" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Notifikasi", url: "/notifikasi" },
    { label: "Kegiatanku", url: "/status-register" },
  ];

  if (getJurusanByID.length === 0) {
    return (
      <>
        <Navbar data={data} login={false} profile={true} />
        <CariPerusahaanStyled>
          <div className="bg-color">
            <div className="container mt-5 pt-5 pb-5">
              <div
                style={{ height: "50vh" }}
                className="d-flex justify-content-center align-items-center"
              >
                <h5 className="fw-bold">
                  Lowongan PKL jurusan ini belum tersedia
                </h5>
              </div>
            </div>
          </div>
        </CariPerusahaanStyled>
      </>
    );
  } else {
    return (
      <>
        <Navbar data={data} login={false} profile={true} />
        <CariPerusahaanStyled>
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

              <div className="rounded mt-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 d-flex">
                  {dataPkl.map((item, index) => (
                    <PerusahaanCard
                      key={index}
                      gambar={item.gambar_pkl}
                      bidang_pkl={item.bidang_pkl}
                      nama_pt={item.nama_perusahaan}
                      lokasi={item.kabupaten}
                      url_daftar={`/pendaftaran/${item.kode_pkl}`}
                      url_detail={`/detail-perusahaan/${item.kode_pkl}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CariPerusahaanStyled>
      </>
    );
  }
};

export default CariPerusahaan;
