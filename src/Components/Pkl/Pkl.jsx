import React from "react";
import Pkl_img from "../../assets/pkl-img.png";

const Pkl = () => {
  return (
    <div className="container mb-5">
      <h2 className="text-center fw-bold">Praktik Kerja Lapangan</h2>
      <div className="row  my-4 justify-content-evenly">
        <div className="col-12 col-lg-6 my-auto">
          <p className="lead">
            <span className="fw-bold">Praktik Kerja Lapangan (PKL)</span> adalah
            pembelajaran bagi peserta didik Sekolah Menengah Kejuruan
            (SMK)/Madrasah Aliyah Kejuruan (MAK) yang dilaksanakan melalui
            praktik kerja di dunia kerja dalam jangka waktu tertentu sesuai
            dengan kurikulum dan kebutuhan kerja. PKL merupakan salah satu mata
            pelajaran sebagai wahana pembelajaran di dunia kerja (termasuk
            teaching factory). Pada Kurikulum Merdeka, PKL menjadi mata
            pelajaran yang harus diikuti oleh seluruh peserta didik SMK dengan
            ketentuan sekurang-kurangnya 6 bulan.
          </p>
        </div>
        <div className="col-12 col-lg-5">
          <img
            src={Pkl_img}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Pkl;
