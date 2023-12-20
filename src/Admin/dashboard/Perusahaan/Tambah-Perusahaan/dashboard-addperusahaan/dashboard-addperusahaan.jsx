import React from "react";
import Sidebar from "../../../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../../navbar";
import Tambahperusahaan from "./tambahperusahaan";


function Dashboardtambahperusahaan () {
    return (
        <div className="d-flex">
           <div className="position-fixed">
                <Sidebar />
            </div>
            <div className=" invisible">
                <Sidebar />
            </div>
            <div className="col">
                <Navbar />
                <Tambahperusahaan />
            </div>
        </div>
    )
};
export default Dashboardtambahperusahaan;