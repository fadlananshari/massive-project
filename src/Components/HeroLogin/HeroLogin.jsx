import React from "react";
import HeroStyled from "../Hero/Hero.styled";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const HeroLogin = () => {
  return (
    <HeroStyled>
      <div className="bg-image-login">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-12">
              <h1 className="text-title text-center">SELAMAT DATANG</h1>
              <h1 className="text-desc text-center mb-5">
                PENDAFTARAN PKL SMKN 3 BANGKALAN
              </h1>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  className="btn btn-secondary text-btn-login"
                  type="submit"
                >
                  <Link
                    to="/#persyaratan-pkl"
                    className="btn-syarat-pkl text-white text-decoration-none fw-bold"
                  >
                    Persyaratan PKL
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroStyled>
  );
};

export default HeroLogin;
