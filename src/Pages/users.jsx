import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Footer from "../Components/Footer.jsx/Footer";
import Navbar from "../Components/Navbar/Navbar";
import img_users from "../assets/img_users.png";

const Users = () => {
    return (
        <>
            <Navbar/>

            <div class="container text-left p-5 mt-5">
                <div class="row align-items-start">
                    <div class="button col">
                        <button type="button" class="btn btn-primary">Akun Saya</button>
                    </div>
                    <div class="users card col-md-auto" style={{ background: '#DCE8FF'}}>
                        <h3 className="mt-2">Akun Saya</h3>
                        <div className="editfoto mt-5 d-flex align-items-center">
                            <img src={img_users} class="rounded-circle avatar-lg img-thumbnail" alt="profile-image" />
                            <div class="w-100 ms-3 ">
                                <h4 class="my-0">Unggah Foto Profil Anda</h4>
                                <p class="text-muted"> Unggah Foto Profil Agar Orang Lain Dapat Mengenali Anda</p>
                                <button className="form-control" id="formFile" type="button" class="btn btn-primary">Unggah Foto</button>
                            </div>
                        </div>
                        <div className="name mt-5 d-flex align-items-center">
                            <div className="edit_info">
                                <h5 className="name_title">Nama lengkap</h5>
                                <label className="name" htmlFor=""> Nanik Hidayati</label>
                            </div>
                        </div>
                        <div className="alamat_email mt-5 d-flex align-items-center">
                            <div className="emai_user">
                                <h5 className="email_title">Alamat Email</h5>
                                <label className="email" htmlFor="">Naik11Hidayati@gmail.com</label>
                            </div>
                        </div>
                        <div className="alamat_password mt-5 d-flex align-items-center">
                            <div className="password_user">
                                <h5 className="password_title">Kata Sandi</h5>
                                <label className="password" htmlFor="">Naik11Hidayati@gmail.com</label>
                            </div>
                        </div>
                        <div className="alamat_password mt-5 d-flex align-items-center">
                            <div className="password_user">
                                <h5 className="password_title">Alamat Saya</h5>
                                <label className="password" htmlFor="">Bangkalan, Jawa Timur</label>
                            </div>
                        </div>
                        <div className="button_users mt-5 d-flex justify-content-center">
                            <button type="button" class="btn btn-primary m-3">Edit Akun</button>
                            <button type="button" class="btn btn-danger m-3" data-bs-toggle="modal" data-bs-target="#popup_keluar">Keluar</button>
                        </div>

                        <div class="modal fade" id="popup_keluar" tabindex="-1" aria-labelledby="popup_keluar" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-body text-center">
                                <h3 className="title">Konfirmasi</h3>
                                Apakah anda ingin keluar dari akun?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Keluar</button>
                                <button type="button" class="btn btn-primary">Batal</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Users;