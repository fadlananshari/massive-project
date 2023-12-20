import React from "react";
import { Link } from "react-router-dom";
import JurusanCardStyled from "./JurusanCard.styled";

const JurusanCard = ({ gambar, nama, url }) => {
  return (
    <JurusanCardStyled>
      <div className="py-3">
        <img src={gambar} alt="" className="img-fluid rounded-4" />
        <div className="d-md-flex justify-content-between px-3 py-2">
          <p className="mb-2">{nama}</p>
          <Link to={url} className="btn-cari px-4">
            Cari
          </Link>
        </div>
      </div>
    </JurusanCardStyled>
  );
};

export default JurusanCard;
