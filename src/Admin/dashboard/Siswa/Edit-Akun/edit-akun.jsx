import React from "react";
import Sidebar from "../../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../navbar";
import Editakun from "./akun-edit";


function Dashboardedit () {
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
                <Editakun />
            </div>
        </div>
    )
};
export default Dashboardedit;