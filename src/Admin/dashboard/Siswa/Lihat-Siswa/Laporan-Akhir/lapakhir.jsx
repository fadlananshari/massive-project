import React, { useState } from "react";
import { Link} from "react-router-dom";

function Lapakhir() {

    
    return(
        <div className="form" style={{ width:'100%'}}>
            <div className="card mb-3">
                <div class="mb-3 mt-5">
                    <h5 className="text-primary" style={{ marginLeft:'10px' }}>Berkas Laporan</h5>
                    <a href="" className="file_lapakhir" style={{ marginLeft:'10px', textDecoration:'none', border:'1px solid', borderRadius:'10px' , padding:'10px', display:'inline-block'  }}>Nanik Hidayati_laporan akhir.pdf</a>
                </div>
                <div className="status_lapakhir">
                    <div className="button_users mt-5 d-flex justify-content-center">
                        <Link to='/lihat-siswa' type="button" className="btn btn-primary m-2">Setujui</Link>
                        <button type="button" className="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target="#popup_revisi">Revisi</button>
                    </div>
                    <div className="modal fade" id="popup_revisi" tabindex="-1" aria-labelledby="popup_revisi" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body text-center">
                                    <h5 classNameName="title">Masukan catatan yang perlu diperbaiki</h5>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ border:'1px solid #007bff' }}></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Selesai</button>
                                        <button type="button" className="btn btn-danger">Batal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Lapakhir;