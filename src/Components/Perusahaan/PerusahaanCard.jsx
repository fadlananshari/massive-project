import React from 'react';
import PerusahaanCardStyled from './PerusahaanCard.style';

const PerusahaanCard = ({ perusahaan }) => {
  return (
    <PerusahaanCardStyled>
      <div class="card rounded-4 my-4 shadow">
        <img src={perusahaan.gambar} class="card-img-top rounded-top-4" alt="..." />
        <div class="card-body">
          <h5 class="card-title fw-bold m-0 fs-17px">{perusahaan.nama}</h5>
          <p class="card-text m-0 text-secondary fs-12px">{perusahaan.tempat}</p>
          <p class="card-text text-secondary fs-12px">{perusahaan.lokasi}</p>
          <div className="d-flex justify-content-between">
            <a href={perusahaan.url[0]} class="btn-daftar">
              Daftar
            </a>
            <a href={perusahaan.url[1]} class="btn-detail">
              Detail
            </a>
          </div>
        </div>
      </div>
    </PerusahaanCardStyled>
  );
};

export default PerusahaanCard;
