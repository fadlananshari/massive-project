import React, { useState } from "react";
import { Link} from "react-router-dom";

function Lihatsiswa() {

    
    return(
        <div className="form" style={{ width:'100%'}}>
            <div class="row d-flex justify-content-center align-items-center mt-5 mb-5" style={{ width:'100%'}}>
                <div class="col-sm-5 mb-3 mb-sm-0">
                    <div class="card w-auto" >
                        <div class="card-body">
                            <div className="nav-item p-2">
                                <Link to="/lapmingguan" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-journal-richtext me-3 fs-4" style={{ fontSize: '2rem' }}></i>
                                    <h1 className="fs-4 ">Laporan Mingguan</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-5 mb-3 mb-sm-0">
                    <div class="card w-auto">
                        <div class="card-body">
                            <div className="nav-item p-2">
                                <Link to="/lapakhir" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-journal-text me-3 fs-4" style={{ fontSize: '2rem' }}></i>
                                    <h1 className="fs-4 ">Laporan Akhir</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
            
        </div>
    )
};

export default Lihatsiswa;