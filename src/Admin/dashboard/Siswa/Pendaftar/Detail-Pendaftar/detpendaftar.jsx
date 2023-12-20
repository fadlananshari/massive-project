import React, { useState } from "react";
import { Link} from "react-router-dom";

function Detmingguan() {
    const Datesiswa = [
        { id: 1, document: "FotoCopy raport"},
        { id: 2, document: "Surat Izin Orang Tua"},
        { id: 3, document: "FotoCopy KTP/KTS"},
        { id: 4, document: "Surat Pernyataan"},
        { id: 5, document: "BPJS"},
    ];

    
    return(
        <div className="form" style={{ width:'100%'}}>
            <div className="card mb-3">
                <form className="akun_pendaftar" style={{ marginLeft:'20px', marginTop:'20px' }}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nama Lengkap</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width:'50%' }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">NIS</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" style={{ width:'50%' }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Jenis Kelamin</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" style={{ width:'50%' }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mitra</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" style={{ width:'50%' }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Alamat</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" style={{ width:'50%' }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">No Telephone</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" style={{ width:'50%' }} />
                    </div>
                </form>

                <div className="table-responsive mt-5" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    <table className="table table-bordered">
                        <thead className="text-center text-white" style={{ position: 'sticky', top: 0, background: 'white', zIndex: 99 }}>
                                <tr className="table-primary">
                                    <th scope="col">No</th>
                                    <th scope="col">Document</th>
                                </tr>
                        </thead>
                        <tbody>
                            {Datesiswa.map((data, index) => (
                                <tr key={index}>
                                    <th className="text-center" scope="row">{index + 1}</th>
                                    <td className="text-center text-primary">{data.document}</td>
                                </tr>
                            ))};
                        </tbody>
                    </table>
                    <div className="status_lapmingguan">
                        <div classNameName="button_users mt-3 d-flex justify-content-center">
                            <Link to='/pendaftar' type="button" className="btn btn-primary m-2">Setujui</Link>
                            <button type="button" className="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target="#popup_revisi">Tolak</button>
                        </div>
                        <div className="modal fade" id="popup_revisi" tabindex="-1" aria-labelledby="popup_revisi" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <h5 classNameName="title">Masukan catatan kenapa siswa ditolak PKL</h5>
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
            
        </div>
    )
};

export default Detmingguan;