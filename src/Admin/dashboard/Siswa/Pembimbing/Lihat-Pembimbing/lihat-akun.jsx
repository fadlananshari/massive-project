import React from "react";
import Sidebar from "../../../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../../navbar";
import Akunpembimbing from "./akun-lihat";

function Dashboardlihatpembimbing () {
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
                <Akunpembimbing />
            </div>
        </div>
    )
};
export default Dashboardlihatpembimbing;