import React from "react";
import CardProgramStyled from "./CardProgram.styled";

const CardProgram = ({ title, img, widthCard }) => {
  return (
    <CardProgramStyled>
      <div className="card rounded-3 h-100" style={{ width: widthCard }}>
        <img src={img} className="card-img" alt={title} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
        </div>
      </div>
    </CardProgramStyled>
  );
};

export default CardProgram;
