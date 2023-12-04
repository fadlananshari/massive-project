import React from 'react';
import Important from '../../assets/High-Importance.png';
import { Link } from 'react-router-dom';

const PopUpConfirm = ({ id, desc, btn1, btn2 }) => {
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
            <button type="button" class={`btn ${btn2.cName}`} data-bs-dismiss="modal">
              <Link to={btn2.url} className="text-decoration-none text-white">
                {btn2.text}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpConfirm;
