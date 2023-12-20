import React from "react";
import Sidebar from "../../../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../../navbar";
import Editpembimbing from "./pembimbing-edit";


function Dashboardeditpembimbing () {
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
                <Editpembimbing />
            </div>
        </div>
    )
};
export default Dashboardeditpembimbing;