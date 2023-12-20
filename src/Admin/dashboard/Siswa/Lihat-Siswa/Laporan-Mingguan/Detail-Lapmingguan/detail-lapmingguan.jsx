import React, { useState } from "react";
import { Link} from "react-router-dom";

function Detmingguan() {
    const Datesiswa = [
        { id: 1, tanggal: "1  Januari 2023"},
        { id: 2, tanggal: "2  januari 2023"},
        { id: 3, tanggal: "3  januari 2023"},
        { id: 4, tanggal: "4  januari 2023"},
        { id: 5, tanggal: "5  januari 2023"},
        { id: 6, tanggal: "6  januari 2023"},
        { id: 7, tanggal: "7  januari 2023"},
    ];

    
    return(
        <div className="form" style={{ width:'100%'}}>
            <div className="card mb-3">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="text-center text-white" style={{ position: 'sticky', top: 0, background: 'white', zIndex: 99 }}>
                                <tr className="table-primary">
                                    <th scope="col">Tanggal</th>
                                    <th scope="col">Absen</th>
                                    <th scope="col">Aktivitas</th>
                                    <th scope="col">Foto Kegiatan</th>
                                </tr>
                        </thead>
                        <tbody>
                            {Datesiswa.map((data, index) => (
                                <tr key={index}>
                                    <td className="text-center">{data.id}</td>
                                    <td className="text-center">{data.keterangan}</td>
                                    <td className="text-center">{data.deskripsi}</td>
                                    <td className="text-center">{data.documentasi}</td>
                                </tr>
                            ))};
                        </tbody>
                    </table>
                </div>
                <div class="mb-3">
                    <h3 className="text-primary" style={{ marginLeft:'10px' }}>Laporan Mingguan</h3>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ border:'1px solid #007bff' }}></textarea>
                </div>
                <div className="status_lapmingguan">
                    <div classNameName="button_users mt-5 d-flex justify-content-center">
                        <Link to='/lapmingguan' type="button" className="btn btn-primary m-2">Setujui</Link>
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

export default Detmingguan;