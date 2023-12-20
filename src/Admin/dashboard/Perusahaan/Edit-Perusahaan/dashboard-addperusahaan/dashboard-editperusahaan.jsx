import React from "react";
import Sidebar from "../../../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../../navbar";
import Editperusahaan from "./editperusahaan";


function Dashboardeditperusahaan () {
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
                <Editperusahaan />
            </div>
        </div>
    )
};
export default Dashboardeditperusahaan;