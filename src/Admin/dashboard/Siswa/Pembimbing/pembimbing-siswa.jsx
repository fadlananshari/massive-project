import React, { useState } from "react";
import { Link} from "react-router-dom";

function Pembimbing() {
    const Datepembimbing = [
        { id: 1, name: "Nanik Hidayati", jurusan: "Teknik dan Bisnis Sepeda Motor", email: "Nanik23@gmail.com", password:"Nanik3221" },
        { id: 2, name: "Sri Handayani", jurusan: "Teknik Komputer dan Jaringan", email: "Srihandayani@gmail.com", password:"Handayani3222"  },
        { id: 3, name: "Aulia Rahma", jurusan: "Perhotelan", email: "auliaRahma@gmail.com", password:"Aulia3224"  },
        { id: 4, name: "Agus Priyanto", jurusan: "Perhotelan", email: "Aguspriyanto13@gmail.com", password:"Agus3225"  },
        { id: 5, name: "Muhammad Ridho", jurusan: "Perkantoran", email: "ridhoM@gmail.com", password:"Ridho3226"  },
        { id: 6, name: "Rahman", jurusan: "Akuntansi", email: "rahman22@gmail.com", password:"Rahman3227"  },
        { id: 7, name: "Risma", jurusan: "Farmasi", email: "rismaa@gmail.com", password:"Risma3230"  },
    ];

    const [selectedjurusan, setSelectedJurusan] = useState("");
    const [searchTerm, setSearchTerm] = useState("")
    const getPembimbingByJurusan = () => {
        return Datepembimbing.filter((data) => {
            const jurusanMatch = selectedjurusan === "" || data.jurusan === selectedjurusan;
            const nameMatch = data.name.toLowerCase().includes(searchTerm.toLowerCase());
            const jurusanSearchMatch = data.jurusan.toLowerCase().includes(searchTerm.toLowerCase());

            return jurusanMatch && (nameMatch || jurusanSearchMatch);
        });
    };

    const handleJurusanChange = (jursan) => {
        setSelectedJurusan(jursan);
    };

    const handleSearchChange= (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
    };


    return(
        <div className="form" style={{ width:'100%'}}>
            <div className="card pt-3 bg-shadow text-center" style={{ width:'100%'}}>
                <div className="card-body">
                    <div className="justify-content-center align-items-center">
                        <Link to="/data-siswa" type="submit" className="btn btn-outline-primary mx-2" style={{ marginLeft:'auto' }}><i className="bi bi-people-fill me-1"></i>Siswa</Link>
                        <Link to="/pendaftar" type="submit" className="btn btn-outline-primary mx-2" style={{ marginLeft:'auto' }}><i className="bi bi-person-fill-gear me-1"></i>Pendaftar</Link>
                        <Link to="/pembimbing" type="submit" className="btn btn-primary mx-2" style={{ marginLeft:'auto' }}><i className="bi bi-people-fill me-1"></i>Pembimbing</Link>
                    </div>
                </div>
            </div>
            <div className="card mb-3 pt-3 bg-shadow">
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="dropdown" style={{ margin:'0 10px' }}>
                            <button className="btn btn-primary dropdown-toggle" type="pilih" data-bs-toggle="dropdown" aria-expanded="false">Pilih Jurusan</button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href='#' onClick={() => handleJurusanChange("Teknik dan Bisnis Sepeda Motor")} >Teknik dan Bisnis Sepeda Motor</a></li>
                                <li><a className="dropdown-item" href='#' onClick={() => handleJurusanChange("Teknik Komputer dan Jaringan")}>Teknik Komputer dan Jaringan</a></li>
                                <li><a className="dropdown-item" href='#' onClick={() => handleJurusanChange("Perhotelan")}>Perhotelan</a></li>
                                <li><a className="dropdown-item" href='#' onClick={() => handleJurusanChange("Perkantoran")}>Perkantoran</a></li>
                                <li><a className="dropdown-item" href='#' onClick={() => handleJurusanChange("Akuntansi")}>Akuntansi</a></li>
                                <li><a className="dropdown-item" href='#' onClick={() => handleJurusanChange("Farmasi")}>Farmasi</a></li>
                            </ul>
                        </div>
                        <form class="d-flex" role="search" onSubmit={handleSearchSubmit}>
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width:'300px', height:'auto' }} value={searchTerm} onChange={handleSearchChange} />
                            <button class="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        <Link to="/tambah-pembimbing" type="submit" className="btn btn-primary" style={{ marginLeft:'auto' }}>Tambah Pembimbing</Link>
                    </div>
                </div>
                <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    <table className="table table-bordered">
                        <thead className="text-center text-white" style={{ position: 'sticky', top: 0, background: 'white', zIndex: 99 }}>
                                <tr className="table-primary">
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Jurusan</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Action</th>
                                </tr>
                        </thead>
                        <tbody>
                            {getPembimbingByJurusan().map((data, index) => (
                                <tr key={index}>
                                    <th className="text-center" scope="row">{index + 1}</th>
                                    <td>{data.name}</td>
                                    <td className="text-center">{data.jurusan}</td>
                                    <td className="text-center">{data.email}</td>
                                    <td className="text-center">{data.password}</td>
                                    <td className="text-center">
                                        <button type="delete" className="btn btn-danger bi bi-trash-fill btn-sm me-2" data-bs-toggle="modal" data-bs-target="#popup_delete"></button>
                                        <Link to="/edit-pembimbing" type="edit" className="btn btn-warning bi bi-gear-fill  btn-sm me-2"></Link>
                                        <Link to="/lihat-pembimbing" type="view" className="btn btn-primary bi bi-eye-fill btn-sm me-2"></Link>
                                    </td>
                                </tr>
                            ))};
                            <div className="modal fade" id="popup_delete" tabindex="-1" aria-labelledby="popup_delete" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-body text-center">
                                    <h3 classNameName="title">Konfirmasi</h3>
                                    Apakah anda yakin ingin menghapus data ini?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Ya</button>
                                    <button type="button" className="btn btn-danger">Tidak</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    )
};

export default Pembimbing;