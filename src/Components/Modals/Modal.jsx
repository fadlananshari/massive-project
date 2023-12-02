import React from 'react';
import Important from '../../assets/High-Importance.png';
import { Link } from 'react-router-dom';


const Modal = () => {
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered border-0">
        <div class="modal-content border-0 py-2">
          <div class="modal-body border-0 text-center">
            <img src={Important} alt="" className="mb-2" />
            <h3>Konfirmasi</h3>
            <p className="m-0">Anda ingin keluar akun?</p>
          </div>
          <div class="modal-footer border-0 d-flex justify-content-center gap-5">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
              Batal
            </button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
              <Link to="/" className="text-decoration-none text-white">
                Keluar
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
