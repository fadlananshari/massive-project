import React from 'react';
import { PiMapPinFill } from 'react-icons/pi';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaMapMarkedAlt } from 'react-icons/fa';

const Contact = () => {
  const iconStyle = {
    item: { width: '100px' },
  };

  if (window.innerWidth < 1000) {
    iconStyle.item.width = '100%';
  }

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
              <input type="text" id="noWa" class="form-control" placeHolder="No. Whatsapp" />
            </div>
            <div className="mb-3 form-floating">
              <textarea id="pesan" className="form-control" style={{ height: '200px' }} />
              <label htmlFor="floatingTextarea2">Pesan</label>
            </div>

            <div class="text-center mt-4 d-grid">
              <button class="btn btn-primary" onClick={handleSendMessage}>
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
        <div className="col text-center text-lg-start mt-5 mt-lg-0">
          <div className="d-lg-flex gap-4 my-3 mb-lg-4">
            <PiMapPinFill style={iconStyle.item} size={50} />
            <div>
              <h4>Alamat</h4>
              <a href="https://maps.app.goo.gl/kK4KaonjJJcjRh249" className="text-dark">
                Jl. Mertajasah No.70, Blandungan, Mertajasah, <br />
                Kec. Bangkalan, Kabupaten Bangkalan, Jawa Timur
              </a>
            </div>
          </div>
          <div className="d-lg-flex gap-4 my-3 my-lg-4">
            <BsTelephoneFill style={iconStyle.item} size={50} />
            <div>
              <h4>Telepon</h4>
              <a href="tel:0313062126" className="text-dark">
                (031) 3062126
              </a>
            </div>
          </div>
          <div className="d-lg-flex gap-4 my-3 my-lg-4">
            <AiOutlineMail style={iconStyle.item} size={50} />
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
