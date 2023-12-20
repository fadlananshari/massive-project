import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import icondash from '../../assets/logo-f.png';
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
            <div className="d-flex flex-column bg-dark text-white p-3 py-3 ps-3 pe-5" style={{ height:'100vh', overflow:'auto' }}>
                <div>
                    <a href="/dashboard" className="nav-link text-white d-flex align-items-center p-3">
                        <img src={icondash} className="img-fluid" alt="Icon" style={{ width:'5rem', height:'auto' }}></img>
                        <span className="fs-4">SMEKTABISA</span>
                    </a>
                    <hr className="text-secondary mt-2" />
                    <ul className="nav nav-pills flex-column mt-2">
                        <li className="nav-item p-2">
                            <Link to="/dashboard" className="nav-link text-white d-flex align-items-center">
                                <i className="bi bi-speedometer2 me-3 fs-4" style={{ fontSize: '2rem' }}></i>
                                <span className="fs-4">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link to="/data-siswa" className="nav-link text-white d-flex align-items-center">
                                <i className="bi bi-people me-3 fs-4" style={{ fontSize: '2rem' }}></i>
                                <span className="fs-4">Data Siswa</span>
                            </Link>
                        </li>
                        <li className="nav-item  p-2">
                            <Link to="/perusahaan" className="nav-link text-white d-flex align-items-center">
                                <i className="bi bi-building me-3 fs-4" style={{ fontSize: '2rem' }}></i>
                                <span className="fs-4">Perusahaan</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                    <div className="nav-item  p-2 mt-auto">
                    <hr className="text-secondary p-2 mt-auto" />
                            <a href="" className="nav-link text-white d-flex align-items-cente p1">
                                <i className="bi bi-person-circle me-3 fs-4" style={{ fontSize: '2rem' }}></i>
                                <span className="fs-4">Bunga</span>
                            </a>
                    </div>
            </div>
    )
}

export default Sidebar;