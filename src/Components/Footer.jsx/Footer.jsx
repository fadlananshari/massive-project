import React from "react";
import FooterStyled from "./Footer.styled";
import Logo from "../../assets/logo-f.png";
import MedsosFacebook from "../../assets/medsos-facebook.png";
import MedsosInstagram from "../../assets/medsos-instagram.png";
import MedsosTwitter from "../../assets/medsos-twitter.png";
import MedsosYoutube from "../../assets/medsos-youtube.png";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="bg-footer">
        <div className="container mt-5 pt-5">
          <footer className="row">
            <div className="col mb-3">
              <img src={Logo} alt="logo" className="img-fluid" />
            </div>

            <div className="col mb-3">
              <h5 className="text-white mb-4">SMKN 3 Bangkalan</h5>
              <h5 className="text-white mb-4">
                <a
                  href="http://www.smkn3bangkalan.sch.id/"
                  className="text-white text-decoration-none"
                >
                  http://www.smkn3bangkalan.sch.id/
                </a>
              </h5>
              <h5 className="text-white mb-4">
                Jl. Mertajasah No.70, Blandungan, Mertajasah, Kec. Bangkalan,
                Kabupaten Bangkalan, Jawa Timur
              </h5>
            </div>

            <div className="col mb-3">
              <h5 className="text-white">Navigasi</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white fs-5">
                    Beranda
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white fs-5">
                    Tentang Kami
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white fs-5">
                    Program
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white fs-5">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5 className="text-center text-white">Media Sosial</h5>
              <div className="d-flex justify-content-center">
                <a href="#">
                  <img src={MedsosFacebook} alt="facebook" />
                </a>
                <a href="#">
                  <img src={MedsosInstagram} alt="instagram" />
                </a>
                <a href="#">
                  <img src={MedsosTwitter} alt="twitter" />
                </a>
                <a href="#">
                  <img src={MedsosYoutube} alt="youtube" />
                </a>
              </div>
            </div>
          </footer>
          <div className="row">
            <div className="col">
              <p className="text-center text-white">
                Copyright Smektabisa All Rights Reserved &copy; 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
