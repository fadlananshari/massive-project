import React from "react";
import Sidebar from "../../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../navbar";
import Lihatakun from "./akun-lihat";

function Dashboardlihatsiswa () {
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
                <Lihatakun />
            </div>
        </div>
    )
};
export default Dashboardlihatsiswa;