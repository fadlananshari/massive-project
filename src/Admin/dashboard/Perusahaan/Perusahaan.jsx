import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";

function Perusahaan() {
    const Dateperusahaan = [
            { id: 1,jurusan:'Teknik Komputer dan Jaringan', namaKegiatan: "PT Kinema Systrans Multimedia", email:"InfiniteLearning@gmail.com" , posisi: "Web Development", nohp:"081231234543"},
            { id: 2,jurusan:'Teknik Komputer dan Jaringan', namaKegiatan: "PT Kinema Systrans Multimedia", email:"InfiniteLearning@gmail.com", posisi: "Mobile Development", nohp:"081231234543"},
            { id: 3,jurusan:'Teknik Komputer dan Jaringan', namaKegiatan: "PT Kinema Systrans Multimedia", email:"InfiniteLearning@gmail.com", posisi: "HCAI", nohp:"081231234543"},
            { id: 4,jurusan:'Teknik dan Bisnis Sepeda Motor', namaKegiatan: "Yayasan Santai Berkualitas Indonesia", email:"InfiniteLearning@gmail.com", posisi: "Data Scine", nohp:"081231234543"},
            { id: 5,jurusan:'Teknik Komputer dan Jaringan', namaKegiatan: "PT Kinema Systrans Multimedia", email:"InfiniteLearning@gmail.com", posisi: "Web Development", nohp:"081231234543"},
            { id: 6,jurusan:'Perhotelan', namaKegiatan: "PT Kinema Systrans Multimedia", email:"InfiniteLearning@gmail.com", posisi: "Mobile Development", nohp:"081231234543"},
            { id: 7,jurusan:'Perkantoran', namaKegiatan: "PT Kinema Systrans Multimedia", email:"InfiniteLearning@gmail.com", posisi: "HCAI", nohp:"081231234543"},
            { id: 8,jurusan:'Farmasi', namaKegiatan: "Yayasan Santai Berkualitas Indonesia", email:"InfiniteLearning@gmail.com", posisi: "Data Scine", nohp:"081231234543"},
            { id: 9,jurusan:'Akuntansi', namaKegiatan: "PT Kinema Systrans Multimedia", email:"InfiniteLearning@gmail.com", posisi: "Web Development", nohp:"081231234543"},
            { id: 10,jurusan:'Akuntansi', namaKegiatan: "Yayasan Santai Berkualitas Indonesia", email:"InfiniteLearning@gmail.com", posisi: "Javascrip Developer", nohp:"081231234543"},
    ];
        
    const [selectedjurusan, setSelectedJurusan] = useState(() => {
        return localStorage.getItem("selectedjurusan") || "";
    });
    const [searchTerm, setSearchTerm] = useState(() => {
        return localStorage.getItem("searchTerm") || "";
    });

    const [filteredPerusahaan, setFilteredPerusahaan] = useState([]);
    useEffect(() => {
        localStorage.setItem("selectedjurusan", selectedjurusan);
        localStorage.setItem("searchTerm", searchTerm);
    }, [selectedjurusan, searchTerm]);

    useEffect(() => {
        localStorage.setItem("selectedjurusan", selectedjurusan);
        localStorage.setItem("searchTerm", searchTerm);
    }, [selectedjurusan, searchTerm]);


    useEffect(() => {
        const filtered = Dateperusahaan.filter((data) => {
                const jurusanMatch = selectedjurusan === "" || data.jurusan === selectedjurusan;
                const keywords = searchTerm.toLowerCase().split(" ");
                const nameMatch = data.namaKegiatan.toLowerCase().includes(searchTerm.toLowerCase());
                const posisiWords = data.posisi.toLowerCase().split(" ");
                const posisiMatch = keywords.every(
                    (keywords) => posisiWords.includes(keywords)
                );
                const perusahaanMatch = data.namaKegiatan.toLowerCase().includes(searchTerm.toLowerCase());
                return jurusanMatch && (nameMatch || posisiMatch || perusahaanMatch);
            });

            setFilteredPerusahaan(filtered);
    }, [selectedjurusan, searchTerm]);

    const handleJurusanChange = (jurusan) => {
        setSelectedJurusan(jurusan);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
    };
    
    return(
        <div className="form" style={{ width:'100%'}}>
            <div className="card mb-3 pt-3 bg-shadow">
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="dropdown" style={{ margin:'0 10px' }}>
                            <button className="btn btn-primary dropdown-toggle" type="pilih" data-bs-toggle="dropdown" aria-expanded="false">Pilih Jurusan</button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href='#' onClick={() => handleJurusanChange("Teknik dan Bisnis Sepeda Motor")} >Teknik dan Bisnis Sepeda Motor</a></li>
                                <li><a className="dropdown-item" href='#' onClick={() => handleJurusanChange("Teknik Komputer dan Jaringan")} >Teknik Komputer dan Jaringan</a></li>
                                <li><a className="dropdown-item" href='#'  onClick={() => handleJurusanChange("Perhotelan")} >Perhotelan</a></li>
                                <li><a className="dropdown-item" href='#'  onClick={() => handleJurusanChange("Perkantoran")} >Perkantoran</a></li>
                                <li><a className="dropdown-item" href='#'  onClick={() => handleJurusanChange("Akuntansi")} >Akuntansi</a></li>
                                <li><a className="dropdown-item" href='#'  onClick={() => handleJurusanChange("Farmasi")} >Farmasi</a></li>
                            </ul>
                        </div>
                        <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width:'300px', height:'auto' }} value={searchTerm} onChange={handleSearchChange}  />
                            <button class="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        <Link to="/tambahperusahaan" type="submit" className="btn btn-primary" style={{ marginLeft:'auto' }}>Tambah Perusahaan</Link>
                    </div>
                </div>
                <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    <table className="table table-bordered">
                        <thead className="text-center text-white" style={{ position: 'sticky', top: 0, background: 'white', zIndex: 99 }}>
                                <tr className="table-primary">
                                    <th scope="col">No</th>
                                    <th scope="col">Perusahaan</th>
                                    <th scope="col">Posisi</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">No HP</th>
                                    <th scope="col">Action</th>
                                </tr>
                        </thead>
                        <tbody>
                            {filteredPerusahaan.map((data, index) => (
                                <tr key={index}>
                                    <th className="text-center" scope="row">{index + 1}</th>
                                    <td>{data.namaKegiatan}</td>
                                    <td className="text-center">{data.posisi}</td>
                                    <td className="text-center">{data.email}</td>
                                    <td className="text-center">{data.nohp}</td>
                                    <td className="d-flex text-center justify-content-center align-items-center">
                                        <button type="delete" className="btn btn-danger bi bi-trash-fill btn-sm me-2" data-bs-toggle="modal" data-bs-target="#popup_delete"></button>
                                        <Link to="/editperusahaan" type="edit" className="btn btn-warning bi bi-gear-fill  btn-sm me-2"></Link>
                                    </td>
                                </tr>
                            ))};
                            
                            <div className="modal fade" id="popup_delete" tabindex="-1" aria-labelledby="popup_delete" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <h3 className="title">Konfirmasi</h3>
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

export default Perusahaan;