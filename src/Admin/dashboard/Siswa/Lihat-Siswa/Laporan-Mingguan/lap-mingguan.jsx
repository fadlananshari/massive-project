import React from "react";
import Sidebar from "../../../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../../navbar";
import Lapmingguan from "./laporan-mingguan";

function Dashboardlihatlapmingguan () {
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
                <Lapmingguan />
            </div>
        </div>
    )
};
export default Dashboardlihatlapmingguan;