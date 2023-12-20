import React, { useState } from "react";
import { Link} from "react-router-dom";

function Pendaftar() {
    const Datesiswa = [
        { id: 1, name: "Nanik Hidayati", nis: "2108013221", email: "Nanik23@gmail.com", jurusan:"Teknik dan Bisnis Sepeda Motor", mitra:"PT Kinema Systrans Multimedia" },
        { id: 2, name: "Sri Handayani", nis: "2108013222", email: "Srihandayani@gmail.com", jurusan:"Handayani3222", mitra:"PT Kinema Systrans Multimedia"  },
        { id: 3, name: "Ariskan Handayani", nis: "2108023223", email: "ariska31@gmail.com", jurusan:"Teknik Komputer dan Jaringan", mitra:"PT Kinema Systrans Multimedia"  },
        { id: 4, name: "Aulia Rahma", nis: "2108023224", email: "auliaRahma@gmail.com", jurusan:"Teknik dan Bisnis Sepeda Motor", mitra:"Yayasan Santai Berkualitas Indonesia"  },
        { id: 5, name: "Agus Priyanto", nis: "2108033225", email: "Aguspriyanto13@gmail.com", jurusan:"Teknik Komputer dan Jaringan", mitra:"Yayasan Santai Berkualitas Indonesia"  },
        { id: 6, name: "Muhammad Ridho", nis: "2108043226", email: "ridhoM@gmail.com", jurusan:"Akuntansi",  mitra:"Yayasan Santai Berkualitas Indonesia"  },
        { id: 7, name: "Rahman", nis: "2108053227", email: "rahman22@gmail.com", jurusan:"Perhotelan",  mitra:"Yayasan Santai Berkualitas Indonesia"  },
        { id: 8, name: "Nunik", nis: "2108053228", email: "nunikk@gmail.com", jurusan:"Farmasi",  mitra:"PT Kinema Systrans Multimedia"  },
        { id: 9, name: "Teguh", nis: "2108063229", email: "Teguhhh@gmail.com", jurusan:"Akuntansi", mitra:"PT Kinema Systrans Multimedia"  },
        { id: 10, name: "Risma", nis: "2108063230", email: "rismaa@gmail.com", jurusan:"Perkantoran", mitra:"PT Kinema Systrans Multimedia"  },
    ];
    const [selectedjurusan, setSelectedJurusan] = useState("");
    const [searchTerm, setSearchTerm] = useState("")
    const getSiswaByJurusan = () => {
        return Datesiswa.filter((data) => {
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
            <div class="row d-flex justify-content-center align-items-center mt-5 mb-5" style={{ width:'100%'}}>
                <div class="col-sm-4 mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-body">
                            <div className="nav-item p-2">
                                <a href="" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-person me-3 fs-4" style={{ fontSize: '2rem' }}></i>
                                    <h1 className="fs-4 ">Total Pendaftar</h1>
                                </a>
                                <h3 class="card-text text-primary text-center">500</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-body">
                            <div className="nav-item p-2">
                                <a href="" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-check-circle me-3 fs-4" style={{ fontSize: '2rem' }}></i>
                                    <h1 className="fs-4 ">Pendaftar Diterima </h1>
                                </a>
                                <h3 class="card-text text-primary text-center">450</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 mb-3 mb-sm-0">
                    <div class="card ">
                        <div class="card-body">
                            <div className="nav-item p-2">
                                <a href="" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-x-circle me-3 fs-4" style={{ fontSize: '2rem' }}></i>
                                    <h1 className="fs-4 ">Pendaftar Ditolak</h1>
                                </a>
                                <h3 class="card-text text-center text-primary">50</h3>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
            <div className="card pt-3 bg-shadow text-center" style={{ width:'100%'}}>
                <div className="card-body">
                    <div className="justify-content-center align-items-center">
                        <Link to="/data-siswa" type="submit" className="btn btn-outline-primary mx-2" style={{ marginLeft:'auto' }}><i className="bi bi-people-fill me-1"></i>Siswa</Link>
                        <Link to="/pendaftar" type="submit" className="btn btn-primary mx-2" style={{ marginLeft:'auto' }}><i className="bi bi-person-fill-gear me-1"></i>Pendaftar</Link>
                        <Link to="/pembimbing" type="submit" className="btn btn-outline-primary mx-2" style={{ marginLeft:'auto' }}><i className="bi bi-people-fill me-1"></i>Pembimbing</Link>
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
                    </div>
                </div>
                <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    <table className="table table-bordered">
                        <thead className="text-center text-white" style={{ position: 'sticky', top: 0, background: 'white', zIndex: 99 }}>
                                <tr className="table-primary">
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Jurusan</th>
                                    <th scope="col">Mitra</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                        </thead>
                        <tbody>
                            {getSiswaByJurusan().map((data, index) => (
                                <tr key={index}>
                                    <th className="text-center" scope="row">{index + 1}</th>
                                    <td>{data.name}</td>
                                    <td className="text-center">{data.jurusan}</td>
                                    <td className="text-center">{data.mitra}</td>
                                    <td className="text-center">{data.status}</td>
                                    <td className="d-flex" style={{ justifyContent:'center', alignItems:'center' }}>
                                        <Link to="/documentpendaftar" type="view" className="btn btn-primary bi bi-eye-fill btn-sm me-2"><span className="ms-1">Detail</span></Link>
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

export default Pendaftar;