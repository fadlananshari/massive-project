import React from "react";
import Sidebar from "../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Perusahaan from "./Perusahaan";

function Dashboardperusahaan () {
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
                        <a class="navbar-brand text-white">Data Perusahaan</a>
                    </div>
                </nav>
                <Perusahaan />
            </div>
        </div>
    )
};

export default Dashboardperusahaan;