import React from "react";
import Sidebar from "../../../../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailLaporan from "../../../Lihat-Siswa/Laporan-Mingguan/Detail-Lapmingguan/detail-lapmingguan";

function DashboardDetaillapmingguan () {
    return (
        <div className="d-flex">
           <div className="position-fixed">
                <Sidebar />
            </div>
            <div className=" invisible">
                <Sidebar />
            </div>
            <div className="col">
                <nav class="navbar bg-primary">
                    <div class="container-fluid">
                        <a class="navbar-brand text-white">Laporan Mingguan</a>
                    </div>
                </nav>
                <DetailLaporan />
            </div>
        </div>
    )
};
export default DashboardDetaillapmingguan;