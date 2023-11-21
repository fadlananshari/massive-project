import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Footer from "../Components/Footer.jsx/Footer";
import Navbar from "../Components/Navbar/Navbar";
import img_form from "../assets/img_form.jpeg";


const FormRegist2 = () => {
    return (
        <>
            <Navbar />

                <div className="form p-5" style={{ background: '#DCE8FF'}}>
                    <form className="form bg-white p-5 mt-5" style={{borderRadius: '10px'}}>
                        <div className="img text-center">
                            <img src={img_form} alt="" className="img-fluid" style={{ borderRadius: '10px' }} />
                        </div>
                        <img src="" alt="" />
                        <div className="text-center mb-5">
                            <h2 className="text-primary">Unggah Document</h2>
                            <h5>Praktik Kerja Lapangan</h5>
                        </div>
                    
                        <div class="mb-5">
                            <div>
                                <h4>Foto Copy Rapor</h4>
                                <label htmlFor="formFile" className="form-label">Unggah foto copy rapor semester 1 - 4 (dalam bentuk PDF ukuran maksimal 2 MB) </label>
                            </div>
                            <div>
                                <label htmlFor="formFile" className="form-label">Penamaan: nama_rapor.pdf</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                        </div>
                        <div class="mb-5">
                            <div>
                                <h4>Surat izin Orang Tua</h4>
                                <label for="formFile" class="form-label">Unggah surat izin orang tua (dalam bentuk PDF ukuran maksimal 2 MB)</label>
                            </div>
                            <div>
                                <label>penamaan: nama_izinortu.pdf</label>
                                <input class="form-control" type="file" id="formFile" />
                            </div>
                        </div>
                        <div class="mb-5">
                            <div>
                                <h4>KTP ( KTS jika belum memiliki KTP)</h4>
                                <label for="formFile" class="form-label">Unggah KTP / KTS (dalam bentuk PDF ukuran maksimal 2 MB)</label>
                            </div>
                            <div>
                                <label>penamaan: nama_KTP.pdf </label>
                                <input class="form-control" type="file" id="formFile"  />
                            </div>
                        </div>
                        <div class="mb-5">
                            <div>
                                <h4>Surat pernyataan  melanggar aturan PKL</h4>
                                <label for="formFile" class="form-label">Unggah surat pernyataan (dalam bentuk PDF ukuran maksimal 2 MB)</label>
                            </div>
                            <div>
                                <label>penamaan: nama_suratpernyataan.pdf</label>
                                <input class="form-control" type="file" id="formFile"  />
                            </div>
                        </div>
                        <div class="mb-3">
                            <div>
                            <h4>BPJS ketenaga kerjaan (optional)</h4>
                            <label for="formFile" class="form-label">Unggah surat pernyataan (dalam bentuk PDF ukuran maksimal 2 MB)</label>
                            </div>
                            <div>
                                <label>penamaan: nama_suratpernyataan.pdf</label>
                                <input class="form-control" type="file" id="formFile"  />
                            </div>
                        </div>

                        <div className="mb-3 form-check">
                            <input type="radio" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Formulir ini Benar dan Selesai</label>
                        </div>
                        <div className="row float-end">
                            <div className="col">
                                <button type="sebelumnya" className="btn btn-outline-primary float-end">Sebelumnya</button>
                            </div>
                            <div className="col">
                                <button type="submit" className="btn btn-primary float-start">Daftar</button> 
                            </div>
                        </div>
                    </form>
                </div>
            <Footer />
        </>
    )
}

export default FormRegist2;