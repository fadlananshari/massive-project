import React from "react";
import Sidebar from "../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Siswa from "./Siswa";

function Dashboardsiswa () {
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
                        <a class="navbar-brand text-white">Data Siswa</a>
                    </div>
                </nav>
                <Siswa />
            </div>
        </div>
    )
};
export default Dashboardsiswa;