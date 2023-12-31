import React from "react";
import Sidebar from "../sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../navbar";
import Analisis from "./analisis";
import { useEffect } from "react";

function Dashboard (props) {
    useEffect(() => {
        props.setShowFooter();
      }, [props]);
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
                <Analisis />
            </div>
        </div>
    )
};

export default Dashboard;