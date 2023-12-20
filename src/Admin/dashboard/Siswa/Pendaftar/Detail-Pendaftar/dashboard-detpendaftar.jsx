import React from "react";
import Sidebar from "../../../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Detdocpendaftar from "./detpendaftar";

function Dashboarddocument () {
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
                        <a class="navbar-brand text-white">Document Pendaftaran</a>
                    </div>
                </nav>
                <Detdocpendaftar />
            </div>
        </div>
    )
};
export default Dashboarddocument;