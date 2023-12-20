import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Datesiswa from "../data";

function Editakun() {

    const [name, setName] = useState("");
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const { id } = useParams();
    const [siswa, setSiswa] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        const selecteedSiswa = Datesiswa.find((data) => data.id === parseInt(id));
        setSiswa(selecteedSiswa);
        setName(selecteedSiswa?.name || "");
    }, [id]);

    if (!siswa) {
        return <p>Mohon maaf data belum ada</p>
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSave = () => {
        console.log("Nilai yang akan disimpan:", name);
    };

    return(
        <div className="container text-left p-5 mt-5">
                <div className="row align-items-start">
                    <form onSubmit={handleSave}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Nama Lengkap</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} readOnly={false} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Jurusan</label>
                            <input type="jurusan" className="form-control" id="exampleInputjurusan" aria-describedby="emailHelp" value={siswa.jurusan} readOnly={false} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputnis" className="form-label">NIS</label>
                            <input type="nis" className="form-control" id="exampleInputnis" value={siswa.nis} readOnly={false} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputemail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputemail" value={siswa.email} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <div className="position-relative">
                                <input type={showPassword ? "text" : "password"}  className="form-control" id="exampleInputpassword" value={siswa.password} />
                                <button className="btn position-absolute end-0 top-50 translate-middle-y" type="button" onClick={togglePasswordVisibility}><i className={`bi bi-eye${showPassword ? "-slash" : ""}`} /></button>
                            </div>
                        </div>
                    </form>
                        <div classNameName="button_users mt-5 d-flex justify-content-center">
                            <button type="button" className="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#popup_simpan" >Simpan</button>
                            <button type="button" className="btn btn-danger m-3" data-bs-toggle="modal" data-bs-target="#popup_batal">Batal</button>
                        </div>

                        <div className="modal fade" id="popup_batal" tabindex="-1" aria-labelledby="popup_batal" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-body text-center">
                                    <h3 className="title">Konfirmasi</h3>
                                    Apakah anda ingin membatalkan edit akun?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Tidak</button>
                                    <button type="button" className="btn btn-primary">Ya</button>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="popup_simpan" tabindex="-1" aria-labelledby="popup_simpan" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-body text-center">
                                    <h3 classNameName="title">Konfirmasi</h3>
                                    Selamat akun anda berhasil disimpan
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary">Ok</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
};

export default Editakun;