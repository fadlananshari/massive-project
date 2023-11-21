import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Footer from "../Components/Footer.jsx/Footer";
import Navbar from "../Components/Navbar/Navbar";
import img_form from "../assets/img_form.jpeg";


const Statusregister = () => {
    return (
        <>
            <Navbar />

                <div className="form p-5" style={{ background: '#DCE8FF'}}>
                    <div class="card p-5 mt-5">
                        <div class="card-body text-center">
                            <h2 className="text-primary">Kegiatanku</h2>
                            <div className="row float-center">
                                <div className="col mt-5">
                                    <button type="sebelumnya" className="btn btn-outline-primary float-end">Kegiatan Aktif</button>
                                </div>
                                <div className="col mt-5">
                                    <button type="submit" className="btn btn-primary float-start">Status Pendaftaran</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="row mt-5 row-cols-1 row-cols-md-4 g-4">
                            <div class="col">
                                <div class="card col-md-4" style={{ width: '289px', height: 'auto' }}>
                                <img src={img_form} class="card-img-top" alt="" style={{ width: 'auto', height: '174px' }} />
                                <div class="card-body" style={{width: 'auto', height: '167px' }}>
                                <p class="card-text float-end text-primary">Proses</p>
                                <h5 className="mb-0">Service Computer</h5>
                                <p class="card-text mb-0">Aulia Computer</p>
                                <p class="card-text">Griya Abadi - Bangkalan</p>
                                <button type="sebelumnya" className="btn btn-outline-primary float-start" style={{ width: '50%', height: 'auto' }}>Detail</button>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card col-md-4" style={{ width: '289px', height: 'auto' }}>
                                <img src={img_form} class="card-img-top" alt="" style={{ width: 'auto', height: '174px' }} />
                                <div class="card-body" style={{width: 'auto', height: '167px' }}>
                                    <p class="card-text float-end text-success">Diterima</p>
                                    <h5 className="mb-0">Service Computer</h5>
                                    <p class="card-text mb-0">Aulia Computer</p>
                                    <p class="card-text">Griya Abadi - Bangkalan</p>
                                    <button type="sebelumnya" className="btn btn-outline-primary float-start" style={{ width: '50%', height: 'auto' }}>Detail</button>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card col-md-4" style={{ width: '289px', height: 'auto' }}>
                                <img src={img_form} class="card-img-top" alt="" style={{ width: 'auto', height: '174px' }} />
                                <div class="card-body" style={{width: 'auto', height: '167px' }}>
                                    <p class="card-text float-end text-danger">Ditolak</p>
                                    <h5 className="mb-0">Service Computer</h5>
                                    <p class="card-text mb-0">Aulia Computer</p>
                                    <p class="card-text">Griya Abadi - Bangkalan</p>
                                    <button type="sebelumnya" className="btn btn-outline-primary float-start" style={{ width: '50%', height: 'auto' }}>Detail</button>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Statusregister;