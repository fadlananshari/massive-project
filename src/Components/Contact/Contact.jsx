import React from 'react';
import 'bootstrap/dist/js/bootstrap.js';

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
    <div className="container">
      <h2>Contact Us</h2>
      <p>silahkan tinggalkan pesan Anda pada kolom yang tersedia</p>
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <form>
            <div class="mb-3">
              {/* <label class="form-label">Nama</label> */}
              <input type="text" id="nama" class="form-control" placeHolder="Nama" />
            </div>
            <div class="mb-3">
              {/* <label class="form-label">No WhatsApp</label> */}
              <input type="text" id="noWa" class="form-control" placeHolder="Email" />
            </div>
            <div className="mb-3 form-floating">
              <textarea id="pesan" className="form-control" style={{ height: '100px' }} />
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>

            <div class="text-center mt-4">
              <button class="btn btn-primary" onClick={handleSendMessage}>
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
        <div className="col">
          <div className="d-flex"></div>
          <div className="d-flex"></div>
          <div className="d-flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
