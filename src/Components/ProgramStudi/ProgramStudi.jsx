import React from "react";
import ProgramStudiStyled from "./ProgramStudi.styled";
import CardProgram from "../CardProgram/CardProgram";
import ImgProgramSatu from "../../assets/program-studi-1.png";
import ImgProgramDua from "../../assets/program-studi-2.png";
import ImgProgramTiga from "../../assets/program-studi-3.png";
import ImgProgramEmpat from "../../assets/program-studi-4.png";
import ImgProgramLima from "../../assets/program-studi-5.png";
import ImgProgramEnam from "../../assets/program-studi-6.png";

const ProgramStudi = () => {
  return (
    <ProgramStudiStyled>
      <div className="bg-biru my-5">
        <div className="container">
          <h1 className="text-center text-title fw-bold pt-5">Program Studi</h1>
          <p className="text-center text-desc my-4">
            Program studi atau jurusan di SMKN 3 Bangkalan
          </p>

          <div className="row mb-3">
            <div className="col-12 col-lg-4 mb-3">
              <CardProgram
                title="Teknik dan Bisnis sepeda Motor"
                img={ImgProgramSatu}
                widthCard="22rem"
              />
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <CardProgram
                title="Teknik Komputer dan Jaringan"
                img={ImgProgramDua}
                widthCard="22rem"
              />
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <CardProgram
                title="Farmasi Klinis dan Industri"
                img={ImgProgramTiga}
                widthCard="22rem"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4 mb-3">
              <CardProgram
                title="Manajemen Perkantoran"
                img={ImgProgramEmpat}
                widthCard="22rem"
              />
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <CardProgram
                title="Perhotelan"
                img={ImgProgramLima}
                widthCard="22rem"
              />
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <CardProgram
                title="Akutansi"
                img={ImgProgramEnam}
                widthCard="22rem"
              />
            </div>
          </div>
        </div>
      </div>
    </ProgramStudiStyled>
  );
};

export default ProgramStudi;
