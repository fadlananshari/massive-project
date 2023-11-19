import React from "react";
import { PiMapPinFill } from "react-icons/pi";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import ImgKontakKami from "../../assets/kontak-kami.png";
import ImgKontakAddress from "../../assets/kontak-address.png";
import ImgKontakPhone from "../../assets/kontak-phone.png";
import ImgKontakEmail from "../../assets/kontak-email.png";
import ContactStyled from "./Contact.styled";

const Contact = () => {
  const iconStyle = {
    item: { width: "100px" },
  };

  if (window.innerWidth < 1000) {
    iconStyle.item.width = "100%";
  }

  const handleSendMessage = () => {
    const nama = document.querySelector("#nama").value;
    const noWa = document.querySelector("#noWa").value;
    const pesan = document.querySelector("#pesan").value;
    const email = "pklsmkn3bangkalan@gmail.com";

    if (nama.trim() === "" || pesan.trim() === "") {
      alert("Harap lengkapi nama, no WA, dan isi pesan terlebih dahulu!");
      return;
    }

    const emailSubject = encodeURIComponent(
      "Pesan Dari Website PKL SMKN 3 Bangkalan"
    );
    const emailBody =
      `Nama : ${nama}\n` + `No Wa : ${noWa}\n` + `isi pesan : ${pesan}`;

    const mailtoLink =
      "mailto:" +
      email +
      "?subject=" +
      emailSubject +
      "&body=" +
      encodeURIComponent(emailBody);

    window.location.href = mailtoLink;
  };
  return (
    <ContactStyled>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              className="img-fluid"
              alt="img kontak kami"
              src={ImgKontakKami}
              width=""
            />
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="text-title fw-bolder text-center my-4">
              Hubungi Kami
            </h2>
            <p className="text-center text-p">
              Silahkan Hubungi Kontak Kami Dibawah Ini
            </p>
            <div className="card bg-card p-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 mb-4">
                    <div className="d-flex align-items-center">
                      <img src={ImgKontakPhone} alt="Phone" />
                      <div className="ms-3">
                        <h5 className="card-title">Alamat</h5>
                        <p className="card-text">
                          Jl. Mertajasah No.70, Blandungan, Mertajasah, Kec.
                          Bangkalan, Kabupaten Bangkalan, Jawa Timur
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="d-flex align-items-center">
                      <img src={ImgKontakAddress} alt="Address" />
                      <div className="ms-3">
                        <h5 className="card-title">Telepon</h5>
                        <p className="card-text">031-3095333</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <img src={ImgKontakEmail} alt="Email" />
                      <div className="ms-3">
                        <h5 className="card-title">Email</h5>
                        <p className="card-text">
                          <a
                            href="mailto:smkn3bangkalan.adm@gmail.com"
                            className="text-decoration-none"
                          >
                            smkn3bangkalan.adm@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactStyled>
  );
};

export default Contact;
