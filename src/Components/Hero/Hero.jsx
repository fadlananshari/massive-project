import HeroStyled from "./Hero.styled";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <HeroStyled>
      <div className="bg-image">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-12">
              <h1 className="text-title text-center">SMKN 3 BANGKALAN</h1>
              <h3 className="text-desc text-center mb-5">
                Praktik Kerja Lapangan
              </h3>
              <div className="d-flex justify-content-center">
                <Link
                  to="#login"
                  className="btn btn-primary btn-lg mt-5 btn-daftar"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroStyled>
  );
};

export default Hero;
