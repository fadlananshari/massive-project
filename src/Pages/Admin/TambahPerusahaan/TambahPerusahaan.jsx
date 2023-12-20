import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "../../../Components/Navbar/Navbar";
import img_form from "../../../assets/img_form.jpeg";
import TambahPerusahaanStyled from "./TambahPerusahaan.styled";
import img_addpt from "../../../assets/foto-profile-perusahaan.jpeg";
import img_FPP1 from "../../../assets/FPP-1.jpeg";
import img_FPP2 from "../../../assets/FPP-2.jpeg";
import img_FPP3 from "../../../assets/FPP-3.jpeg";
import img_FPP4 from "../../../assets/FPP-4.jpeg";

const Addperusahaan = () => {
  const data = [
    { label: "Beranda", url: "/homepage" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Notifikasi", url: "/notifikasi-admin" },
    { label: "Kegiatan Siswa", url: "/kegiatan-siswa" },
  ];
  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <TambahPerusahaanStyled>
        <div className="mt-5 pt-5" style={{ background: "#DCE8FF" }}>
          <div className="container pb-5">
            <div className="d-flex flex-column">
              <div className="btn-custom btn-lg btn-primary mb-3 fs-2 fw-bold">
                Tambah Perusahaan
              </div>
            </div>
            <form
              className="form bg-white p-5 mt-3"
              style={{ borderRadius: "10px", width: "100%" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img
                      src={img_form}
                      alt=""
                      className="img-fluid"
                      style={{ borderRadius: "10px", width: "100%" }}
                    />
                  </div>
                  <div className="col row-mb-4  text-center d-flex flex-wrap">
                    <img
                      src={img_FPP1}
                      alt=""
                      className="img-fluid col-md-4 mb-4 mx-2"
                      style={{ borderRadius: "10px" }}
                    />
                    <img
                      src={img_FPP2}
                      alt=""
                      className="img-fluid col-md-4 mb-4 mx-2"
                      style={{ borderRadius: "10px" }}
                    />
                    <img
                      src={img_FPP3}
                      alt=""
                      className="img-fluid col-md-4 mb-4 mx-2"
                      style={{ borderRadius: "10px" }}
                    />
                    <img
                      src={img_FPP4}
                      alt=""
                      className="img-fluid col-md-4 mb-4 mx-2"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
              </div>
              <img src="" alt="" />
              <div className="row mb-3">
                <label htmlFor="inputname" className="col-sm-2 col-form-label">
                  Nama Perusahaan
                </label>
                <div className="col-sm-5">
                  <input type="name" className="form-control" id="inputname" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputnisn" className="col-sm-2 col-form-label">
                  ID Perusahaan
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    className="form-control"
                    id="inputname"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputnisn" className="col-sm-2 col-form-label">
                  Tanggal Pelaksanaan
                </label>
                <div className="col-sm-5 d-flex TanggalPelaksanaan">
                  <div
                    className="startDate"
                    style={{ width: "45%", marginRight: "10%" }}
                  >
                    <input
                      type="date"
                      className="form-control"
                      id="inputname"
                    />
                  </div>
                  <div className="endDate" style={{ width: "45%" }}>
                    <input
                      type="date"
                      className="form-control"
                      id="inputname"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <label
                  htmlFor="inputalamat"
                  className="col-sm-2 col-form-label"
                >
                  Rincian Kegiatan
                </label>
                <div className="col-sm-5">
                  <textarea
                    type="text"
                    id="inputalamat"
                    className="form-control"
                    rows="5"
                    aria-describedby="nisnHelpInline"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputalamat"
                  className="col-sm-2 col-form-label"
                >
                  Syarat Pendaftaran
                </label>
                <div className="col-sm-5">
                  <textarea
                    type="text"
                    id="inputalamat"
                    className="form-control"
                    rows="5"
                    aria-describedby="nisnHelpInline"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputalamat"
                  className="col-sm-2 col-form-label"
                >
                  Alamat Perusahaan
                </label>
                <div className="col-sm-5">
                  <textarea
                    type="text"
                    id="inputalamat"
                    className="form-control"
                    aria-describedby="nisnHelpInline"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <Link to="/cari-perusahaan-admin/:id" className="">
                  <button type="submit" className="btn btn-primary">
                    Tambah
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </TambahPerusahaanStyled>
    </>
  );
};

export default Addperusahaan;
