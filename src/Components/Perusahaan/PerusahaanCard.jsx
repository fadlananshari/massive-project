import React from "react";
import PerusahaanCardStyled from "./PerusahaanCard.style";

const PerusahaanCard = ({
  gambar,
  bidang_pkl,
  nama_pt,
  lokasi,
  url_daftar,
  url_detail,
}) => {
  return (
    <PerusahaanCardStyled>
      <div className="card rounded-4 my-4 shadow">
        <img src={gambar} className="card-img-top rounded-top-4" alt="..." />
        <div className="card-body">
          <h5 className="card-title fw-bold m-0 fs-17px">{bidang_pkl}</h5>
          <p className="card-text m-0 text-secondary fs-12px">{nama_pt}</p>
          <p className="card-text text-secondary fs-12px">{lokasi}</p>
          <div className="d-flex justify-content-between">
            <a href={url_daftar} className="btn-daftar">
              Daftar
            </a>
            <a href={url_detail} className="btn-detail">
              Detail
            </a>
          </div>
        </div>
      </div>
    </PerusahaanCardStyled>
  );
};

export default PerusahaanCard;
