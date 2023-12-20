import React from "react";

function Tambahsiswa() {
    return(
        <div className="container text-left p-5 mt-5">
                <div className="row align-items-start">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Nama Lengkap</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">NIS</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                    </form>
                        <div classNameName="button_users mt-5 d-flex justify-content-center">
                            <button type="button" className="btn btn-primary m-3">Tambah</button>
                            <button type="button" className="btn btn-danger m-3" data-bs-toggle="modal" data-bs-target="#popup_keluar">Batal</button>
                        </div>

                        <div className="modal fade" id="popup_keluar" tabindex="-1" aria-labelledby="popup_keluar" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-body text-center">
                                <h3 classNameName="title">Konfirmasi</h3>
                                Apakah anda ingin keluar dari perubahan akun?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Ya</button>
                                <button type="button" className="btn btn-danger">Tidak</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
    )
};

export default Tambahsiswa;