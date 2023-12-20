import React from "react";
import Sidebar from "../../../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../../navbar";
import Tambahpembimbing from "./pembimbing-tambah";


function Dashboardtambahpembimbing () {
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
                <Tambahpembimbing />
            </div>
        </div>
    )
};
export default Dashboardtambahpembimbing;