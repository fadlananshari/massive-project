import React from "react";
import Sidebar from "../../../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lapakhir from "./lapakhir";

function Dashboardlapakhir () {
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
                        <a class="navbar-brand text-white">Laporan Akhir</a>
                    </div>
                </nav>
                <Lapakhir />
            </div>
        </div>
    )
};
export default Dashboardlapakhir;