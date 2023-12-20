import React from "react";
import Sidebar from "../../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../navbar";
import Editsiswa from "./tambah-siswa";

function Dashboardtambah () {
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
                <Editsiswa />
            </div>
        </div>
    )
};
export default Dashboardtambah;