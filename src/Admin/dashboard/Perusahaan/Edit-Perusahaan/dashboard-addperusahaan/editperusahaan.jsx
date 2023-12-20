import React from "react";
import { Link } from "react-router-dom";

function Editperusahaan() {
    return(
        <div className="container text-left p-5 mt-5">
                <div className="row align-items-start">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Nama Perusahaan</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Posisi</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="jurusanTerkait" className="form-label">
                                Jurusan Terkait
                            </label>
                            <select className="form-select" id="jurusanTerkait">
                                <option value="Teknik dan Bisnis Sepeda Motor">Teknik dan Bisnis Sepeda Motor</option>
                                <option value="Teknik Komputer dan Jaringan">Teknik Komputer dan Jaringan</option>
                                <option value="Perhotelan">Perhotelan</option>
                                <option value="Perkantoran">Perkantoran</option>
                                <option value="Akuntansi">Akuntansi</option>
                                <option value="Farmasi">Farmasi</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Alamat</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">No HP</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Id Kegiatan</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Tanggal Pelaksanaan</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rincianKegiatan" className="form-label">
                                Rincian Kegiatan
                            </label>
                            <textarea
                                className="form-control"
                                id="rincianKegiatan"
                                rows="5"
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="syarat" className="form-label">
                                Syarat
                            </label>
                            <textarea
                                className="form-control"
                                id="syarat"
                                rows="5"
                            ></textarea>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="tambahGambar" class="form-label">Tambah Gambar</label>
                            <input type="file" class="form-control" id="tambahgambar" accept="image" multiple />
                        </div>
                    </form>
                        <div classNameName="button_users mt-5 d-flex justify-content-center">
                            <Link to='/perusahaan' type="button" className="btn btn-primary m-3">Tambah</Link>
                            <button type="button" className="btn btn-danger m-3" data-bs-toggle="modal" data-bs-target="#popup_keluar">Batal</button>
                        </div>

                        <div className="modal fade" id="popup_keluar" tabindex="-1" aria-labelledby="popup_keluar" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-body text-center">
                                <h3 classNameName="title">Konfirmasi</h3>
                                Apakah anda yakin ingin membatalkan penambahan perusahaan?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Ya</button>
                                <button type="button" className="btn btn-primary">Tidak</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
    )
};

export default Editperusahaan;