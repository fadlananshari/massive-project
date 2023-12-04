import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Footer from "../Components/Footer.jsx/Footer";
import Navbar from "../Components/Navbar/Navbar";
import img_form from "../assets/img_form.jpeg";


const FormRegist1 = () => {
    return (
        <>
            <Navbar />

                <div className="form-container p-5" style={{ background: '#DCE8FF', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <form className="form bg-white p-5 mt-5" style={{borderRadius: '10px'}}>
                    <img src={img_form} alt="" className="img-fluid mb-5" style={{ borderRadius: '10px' }} />
                        <div className="text-center mb-5">
                            <h2 className="text-primary">Formulir Pendaftaran</h2>
                            <h5>Praktik Kerja Lapangan</h5>
                        </div>
                        <div class="row mb-3">
                            <label for="inputname" class="col-sm-2 col-form-label">Nama</label>
                            <div class="col-sm-5">
                                <input type="name" class="form-control" id="inputname"  />
                            </div>
                            </div>
                        <div class="row mb-3">
                            <label for="inputnisn" class="col-sm-2 col-form-label">NISN</label>
                            <div class="col-sm-5">
                            <input type="number" class="form-control" id="inputname" />
                            </div>
                        </div>
                        <div className="row  mb-3">
                            <label for="inputjurusan" class="col-sm-2 col-form-label">Jurusan</label>
                            <div className="col-md-5">
                                <select id="inputJurusan" className="form-select" aria-describedby="nisnHelpInline">
                                    <option selected disabled>Pilih Jurusan</option>
                                    <option value="Teknik Sepeda Mesin Motor">Teknik Sepeda Mesin Motor</option>
                                    <option value="Teknik Komputer & Jaringan">Teknik Komputer & Jaringan</option>
                                    <option value="Perhotelan">Perhotelan</option>
                                    <option value="Akuntansi">Akuntansi</option>
                                    <option value="Farmasi">Farmasi</option>
                                    <option value="Perkantoran">Perkantoran</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label for="inputjeniskelamin" class="col-sm-2 col-form-label">Jenis Kelamin</label>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="inlineCheckbox1" value="Laki-Laki" />
                                <label class="form-check-label" for="inlineCheckbox1">Laki-laki</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="inlineCheckbox2" value="Perempuan" />
                                <label class="form-check-label" for="inlineCheckbox2">Perempuan</label>
                            </div>
                        </div>


                        <div className="row mb-3">
                                <label for="inputalamat" className="col-sm-2 col-form-label">Alamat</label>
                            <div className="col-sm-5">
                                <textarea type="text" id="inputalamat" className="form-control" aria-describedby="nisnHelpInline" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputemail" class="col-sm-2 col-form-label">Alamat Email</label>
                            <div class="col-sm-5">
                                <input type="email" class="form-control" id="inputemail" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputnohp" class="col-sm-2 col-form-label">Nomor Telephone</label>
                            <div class="col-sm-5">
                                <input type="number" class="form-control" id="inputnohp" />
                            </div>
                        </div>
                        
                        <div className="mb-3 form-check">
                            <input type="radio" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Formulir ini Benar dan Selesai</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Selanjutnya</button> 
                    </form>
                </div>
            <Footer />
        </>
    )
}

export default FormRegist1;