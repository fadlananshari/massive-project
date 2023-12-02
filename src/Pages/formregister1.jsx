import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import img_form from "../assets/img_form.jpeg";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const FormRegist1 = () => {
  const data = [
    { label: "Beranda", url: "/homepage" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Notifikasi", url: "/notifikasi" },
    { label: "Kegiatanku", url: "/kegiatanku" },
  ];

  return (
    <>
      <Navbar data={data} login={false} profile={true} />

      <div className="form p-5" style={{ background: "#DCE8FF" }}>
        <form
          className="form bg-white p-5 mt-5"
          style={{ borderRadius: "10px" }}
        >
          <div className="img text-center">
            <img
              src={img_form}
              alt=""
              className="img-fluid"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <img src="" alt="" />
          <div className="text-center mb-5">
            <h2 className="text-primary">Formulir Pendaftaran</h2>
            <h5>Praktik Kerja Lapangan</h5>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputname" className="col-sm-2 col-form-label">
              Nama
            </label>
            <div className="col-sm-5">
              <input type="name" className="form-control" id="inputname" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputnisn" className="col-sm-2 col-form-label">
              NISN
            </label>
            <div className="col-sm-5">
              <input type="number" className="form-control" id="inputname" />
            </div>
          </div>
          <div className="row  mb-3">
            <label htmlFor="inputjurusan" className="col-sm-2 col-form-label">
              Jurusan
            </label>
            <div className="col-md-5">
              <select
                id="inputJurusan"
                className="form-select"
                aria-describedby="nisnHelpInline"
              >
                <option selected disabled>
                  Pilih Jurusan
                </option>
                <option value="Teknik Sepeda Mesin Motor">
                  Teknik Sepeda Mesin Motor
                </option>
                <option value="Teknik Komputer & Jaringan">
                  Teknik Komputer & Jaringan
                </option>
                <option value="Perhotelan">Perhotelan</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Farmasi">Farmasi</option>
                <option value="Perkantoran">Perkantoran</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="inputjeniskelamin"
              className="col-sm-2 col-form-label"
            >
              Jenis Kelamin
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="inlineCheckbox1"
                value="Laki-Laki"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Laki-laki
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="inlineCheckbox2"
                value="Perempuan"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Perempuan
              </label>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="inputalamat" className="col-sm-2 col-form-label">
              Alamat
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
          <div className="row mb-3">
            <label htmlFor="inputemail" className="col-sm-2 col-form-label">
              Alamat Email
            </label>
            <div className="col-sm-5">
              <input type="email" className="form-control" id="inputemail" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputnohp" className="col-sm-2 col-form-label">
              Nomor Telephone
            </label>
            <div className="col-sm-5">
              <input type="number" className="form-control" id="inputnohp" />
            </div>
          </div>

          <div className="mb-3 form-check">
            <input
              type="radio"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Formulir ini Benar dan Selesai
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Selanjutnya
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default FormRegist1;
