import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import img_form from "../assets/img_form.jpeg";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import LaporanStyled from "./Laporan/Laporan.styled";

const Statusregister = () => {
  const data = [
    { label: "Beranda", url: "/homepage" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Notifikasi", url: "/notifikasi" },
    { label: "Kegiatanku", url: "/status-register" },
  ];

  return (
    <LaporanStyled>
      <Navbar data={data} login={false} profile={true} />
      <div className="form" style={{ background: "#DCE8FF" }}>
        <div className="card mt-5 mb-3 pt-3 bg-shadow">
          <div className="card-body">
            <h1 className="card-title text-center fw-bold mb-4 text-blue">
              Kegiatanku
            </h1>

            <div className="d-flex justify-content-center">
              <Link to="/laporan">
                <button type="submit" className="btn btn-outline-primary me-4">
                  Kegiatan Aktif
                </button>
              </Link>
              <Link to="/status-register">
                <button type="submit" className="btn btn-primary">
                  Status Pendaftaran
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div
                className="card col-md-4"
                style={{ width: "289px", height: "auto" }}
              >
                <img
                  src={img_form}
                  className="card-img-top"
                  alt=""
                  style={{ width: "auto", height: "174px" }}
                />
                <div
                  className="card-body"
                  style={{ width: "auto", height: "167px" }}
                >
                  <p className="card-text float-end text-primary">Proses</p>
                  <h5 className="mb-0">Service Computer</h5>
                  <p className="card-text mb-0">Aulia Computer</p>
                  <p className="card-text">Griya Abadi - Bangkalan</p>
                  <button
                    type="sebelumnya"
                    className="btn btn-outline-primary float-start"
                    style={{ width: "50%", height: "auto" }}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card col-md-4"
                style={{ width: "289px", height: "auto" }}
              >
                <img
                  src={img_form}
                  className="card-img-top"
                  alt=""
                  style={{ width: "auto", height: "174px" }}
                />
                <div
                  className="card-body"
                  style={{ width: "auto", height: "167px" }}
                >
                  <p className="card-text float-end text-success">Diterima</p>
                  <h5 className="mb-0">Service Computer</h5>
                  <p className="card-text mb-0">Aulia Computer</p>
                  <p className="card-text">Griya Abadi - Bangkalan</p>
                  <button
                    type="sebelumnya"
                    className="btn btn-outline-primary float-start"
                    style={{ width: "50%", height: "auto" }}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card col-md-4"
                style={{ width: "289px", height: "auto" }}
              >
                <img
                  src={img_form}
                  className="card-img-top"
                  alt=""
                  style={{ width: "auto", height: "174px" }}
                />
                <div
                  className="card-body"
                  style={{ width: "auto", height: "167px" }}
                >
                  <p className="card-text float-end text-danger">Ditolak</p>
                  <h5 className="mb-0">Service Computer</h5>
                  <p className="card-text mb-0">Aulia Computer</p>
                  <p className="card-text">Griya Abadi - Bangkalan</p>
                  <button
                    type="sebelumnya"
                    className="btn btn-outline-primary float-start"
                    style={{ width: "50%", height: "auto" }}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </LaporanStyled>
  );
};

export default Statusregister;
