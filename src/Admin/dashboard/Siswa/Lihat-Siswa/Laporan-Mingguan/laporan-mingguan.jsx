import React, { useState } from "react";
import { Link} from "react-router-dom";

function Lapmingguan() {
    const Datesiswa = [
        { id: 1, tanggal: "1 - 7 Januari 2023"},
        { id: 2, tanggal: "1 - 7 Februari 2023"},
        { id: 3, tanggal: "1 - 7 Februari 2023"},
        { id: 4, tanggal: "1 - 7 Februari 2023"},
        { id: 5, tanggal: "1 - 7 Februari 2023"},
        { id: 6, tanggal: "1 - 7 Februari 2023"},
        { id: 7, tanggal: "1 - 7 Februari 2023"},
        { id: 8, tanggal: "1 - 7 Februari 2023"},
        { id: 9, tanggal: "1 - 7 Februari 2023"},
        { id: 10,tanggal: "1 - 7 Februari 2023"},
        { id: 11,tanggal: "1 - 7 Februari 2023"},
        { id: 12,tanggal: "1 - 7 Februari 2023"},
        { id: 13,tanggal: "1 - 7 Februari 2023"},
        { id: 14,tanggal: "1 - 7 Februari 2023"},
        { id: 15,tanggal: "1 - 7 Februari 2023"},
        { id: 16,tanggal: "1 - 7 Februari 2023"},
        { id: 17,tanggal: "1 - 7 Februari 2023"},
        { id: 18,tanggal: "1 - 7 Februari 2023"},
        { id: 19,tanggal: "1 - 7 Februari 2023"},
        { id: 20,tanggal: "1 - 7 Februari 2023"},
    ];

    
    return(
        <div className="form" style={{ width:'100%'}}>
            <div className="card mb-3 pt-3 bg-shadow">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="text-center text-white" style={{ position: 'sticky', top: 0, background: 'white', zIndex: 99 }}>
                                <tr className="table-primary">
                                    <th scope="col">Minggu</th>
                                    <th scope="col">Tanggal</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                        </thead>
                        <tbody>
                            {Datesiswa.map((data, index) => (
                                <tr key={index}>
                                    <td className="text-center">{data.id}</td>
                                    <td className="text-center">{data.tanggal}</td>
                                    <td className="text-center">{data.status}</td>
                                    <td className="d-flex" style={{ justifyContent:'center', alignItems:'center' }}>
                                        <Link to="/detaillaporan" type="view" className="btn btn-primary bi bi-eye-fill btn-sm me-2"><span className="ms-1">Detail</span></Link>
                                    </td>
                                </tr>
                            ))};
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    )
};

export default Lapmingguan;