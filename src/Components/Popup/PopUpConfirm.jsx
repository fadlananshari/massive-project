import React from 'react';
import Important from '../../assets/High-Importance.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PopUpConfirm = ({ id, desc, btn1, btn2, data }) => {
  const postData = async () => {
    try {
      const tanggal_h = data.tanggal_h;
      const foto_kegiatan_h = data.foto_kegiatan_h;
      const aktifitas_h = data.aktifitas_h;
      const absen_h = data.absen_h;
      const user_id = data.user_id;
      const status_id = data.status_id;

      const response = await axios.post('http://localhost:4000/api/v1/laporan', {
        tanggal_h,
        foto_kegiatan_h,
        aktifitas_h,
        absen_h,
        user_id,
        status_id,
      });
      console.log('berjalan');
      if (response.status === 200) {
        console.log('Laporan uploaded successfully!');
      } else {
        console.error('Failed to upload laporan');
      }

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error uploading laporan data:', error);
    }
    window.location.reload();
  };

  return (
    <div class="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered border-0">
        <div class="modal-content border-0 py-2">
          <div class="modal-body border-0 text-center">
            <img src={Important} alt="" className="mb-2" />
            <h3>Konfirmasi</h3>
            <p className="m-0">{desc}</p>
          </div>
          <div class="modal-footer border-0 d-flex justify-content-center gap-5">
            <button type="button" class={`btn ${btn1.cName}`} data-bs-dismiss="modal">
              <Link to={btn1.url} className="text-decoration-none text-white">
                {btn1.text}
              </Link>
            </button>
            <button type="button" class={`btn ${btn2.cName}`} data-bs-dismiss="modal" onClick={data ? postData : null}>
              {data ? (
                btn2.text
              ) : (
                <Link to={btn2.url} className="text-decoration-none text-white">
                  {btn2.text}
                </Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpConfirm;
