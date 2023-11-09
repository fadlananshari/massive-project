import React from 'react';
import { PiMapPinFill } from 'react-icons/pi';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  const handleSendMessage = () => {
    const nama = document.querySelector('#nama').value;
    const noWa = document.querySelector('#noWa').value;
    const pesan = document.querySelector('#pesan').value;
    const email = 'pklsmkn3bangkalan@gmail.com';

    if (nama.trim() === '' || pesan.trim() === '') {
      alert('Harap lengkapi nama, no WA, dan isi pesan terlebih dahulu!');
      return;
    }

    const emailSubject = encodeURIComponent('Pesan Dari Website PKL SMKN 3 Bangkalan');
    const emailBody = `Nama : ${nama}\n` + `No Wa : ${noWa}\n` + `isi pesan : ${pesan}`;

    const mailtoLink = 'mailto:' + email + '?subject=' + emailSubject + '&body=' + encodeURIComponent(emailBody);

    window.location.href = mailtoLink;
  };
  return (
    <div className="container my-5">
      <h2 className="fw-bolder text-center my-4">Kontak Kami</h2>
      <p>Silahkan tinggalkan pesan Anda pada kolom yang tersedia</p>
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <form>
            <div class="mb-3">
              <input type="text" id="nama" class="form-control" placeHolder="Nama" />
            </div>
            <div class="mb-3">
              <input type="text" id="noWa" class="form-control" placeHolder="Email" />
            </div>
            <div className="mb-3 form-floating">
              <textarea id="pesan" className="form-control" style={{ height: '200px' }} />
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>

            <div class="text-center mt-4 d-grid">
              <button class="btn btn-primary" onClick={handleSendMessage}>
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
        <div className="col justify-items-between">
          <div className="d-flex gap-4 my-3 mb-lg-4">
            <PiMapPinFill size={100} />
            <div>
              <h4>Address</h4>
              <a
                href="https://www.google.com/maps/place/Jl.+Mertajasah+No.70,+Blandungan,+Mertajasah,+Kec.+Bangkalan,+Kabupaten+Bangkalan,+Jawa+Timur+69116/@-7.0419511,112.7163418,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd805e3d78bed45:0xf8e228f9cc8494cd!8m2!3d-7.0419564!4d112.7189167!16s%2Fg%2F11gfgbvndd?entry=ttu"
                className="text-dark"
              >
                Jl. Mertajasah No.70, Blandungan, Mertajasah, Kec. Bangkalan, Kabupaten Bangkalan, Jawa Timur
              </a>
            </div>
          </div>
          <div className="d-flex gap-4 my-3 my-lg-4">
            <BsTelephoneFill size={65} />
            <div>
              <h4>Telepon</h4>
              <a href="tel:0313062126" className="text-dark">
                (031) 3062126
              </a>
            </div>
          </div>
          <div className="d-flex gap-4 my-3 my-lg-4">
            <AiOutlineMail size={70} />
            <div>
              <h4>Email</h4>
              <a href="mailto:smkn3bangkalan.adm@gmail.com" className="text-dark">
                smkn3bangkalan.adm@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
