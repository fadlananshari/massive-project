import React, { useState } from "react";

function Analisis() {
    const tableData = [
        { id: 1, namaKegiatan: "PT Kinema Systrans Multimedia", posisi: "Web Development", jumlah: 300 },
        { id: 2, namaKegiatan: "PT Kinema Systrans Multimedia", posisi: "Mobile Development", jumlah: 250 },
        { id: 3, namaKegiatan: "PT Kinema Systrans Multimedia", posisi: "HCAI", jumlah: 200 },
        { id: 4, namaKegiatan: "Yayasan Santai Berkualitas Indonesia", posisi: "Data Scine", jumlah: 450 },
        { id: 5, namaKegiatan: "PT Kinema Systrans Multimedia", posisi: "Web Development", jumlah: 300 },
        { id: 6, namaKegiatan: "PT Kinema Systrans Multimedia", posisi: "Mobile Development", jumlah: 250 },
        { id: 7, namaKegiatan: "PT Kinema Systrans Multimedia", posisi: "HCAI", jumlah: 200 },
        { id: 8, namaKegiatan: "Yayasan Santai Berkualitas Indonesia", posisi: "Data Scine", jumlah: 450 },
        { id: 9, namaKegiatan: "PT Kinema Systrans Multimedia", posisi: "Web Development", jumlah: 300 },
        { id: 10, namaKegiatan: "Yayasan Santai Berkualitas Indonesia", posisi: "Javascrip Developer", jumlah: 350 },
        { id: 11, namaKegiatan: "Yayasan Santai Berkualitas Indonesia", posisi: "Javascrip Developer", jumlah: 350 },
        { id: 12, namaKegiatan: "Yayasan Santai Berkualitas Indonesia", posisi: "Javascrip Developer", jumlah: 350 },
        { id: 13, namaKegiatan: "Yayasan Santai Berkualitas Indonesia", posisi: "Javascrip Developer", jumlah: 350 },
        { id: 14, namaKegiatan: "Yayasan Santai Berkualitas Indonesia", posisi: "Javascrip Developer", jumlah: 350 },
        { id: 15, namaKegiatan: "Yayasan Santai Berkualitas Indonesia", posisi: "Javascrip Developer", jumlah: 350 },
    ];

    const [searchInput, setsearchInput] = useState("");
    const [filterData, setFilterData] = useState (tableData);

    const handleSearchInputChange = (e) => {
        setsearchInput(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        const searchTerm = searchInput.toLowerCase();

        const filter = tableData.filter(
            (data) =>
            data.namaKegiatan.toLowerCase().includes(searchTerm) || data.posisi.toLowerCase().includes(searchTerm)
        );

        setFilterData(filter);
    };

    return(
        <div className="form" style={{ width:'100%'}}>
            <div class="row d-flex justify-content-center align-items-center mt-5 mb-5" style={{ width:'100%'}}>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card" >
                        <div class="card-body">
                            <div className="nav-item p-2">
                                <a href="" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-people me-3 fs-4" style={{ fontSize: '2rem' }}></i>
                                    <h1 className="fs-4 ">Jumlah Siswa</h1>
                                </a>
                                <h3 class="card-text text-primary text-center">500</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-body">
                            <div className="nav-item p-2">
                                <a href="" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-person me-3 fs-4" style={{ fontSize: '2rem' }}></i>
                                    <h1 className="fs-4 ">Jumlah Guru</h1>
                                </a>
                                <h3 class="card-text text-primary text-center">50</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card ">
                        <div class="card-body">
                            <div className="nav-item p-2">
                                <a href="" className="nav-link d-flex align-items-center">
                                    <i className="bi bi-building me-3 fs-4" style={{ fontSize: '2rem' }}></i>
                                    <h1 className="fs-4 ">Jumlah Mitra</h1>
                                </a>
                                <h3 class="card-text text-center text-primary">500</h3>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
            <div className="card mb-3 pt-3 bg-shadow" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <div className="card-body">
                    <div className="d-flex justify-content-start align-items-end">
                        <form class="d-flex" role="search" onSubmit={handleSearch}>
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width:'300px', height:'auto' }} value={searchInput} onChange={handleSearchInputChange} />
                            <button class="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>

                <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    <table className="table table-bordered">
                        <thead className="text-center text-white" style={{ position: 'sticky', top: 0, background: 'white', zIndex: 99 }}>
                                <tr className="table-primary" >
                                    <th scope="col">No</th>
                                    <th scope="col">Perusahaan</th>
                                    <th scope="col">Posisi</th>
                                    <th scope="col">Jumlah Peserta</th>
                                </tr>
                        </thead>
                        <tbody>
                            {filterData.map((data) => (
                                <tr key={data.id}>
                                    <th className="text-center" scope="row">{data.id}</th>
                                    <td >{data.namaKegiatan}</td>
                                    <td className="text-center" scope="row">{data.posisi}</td>
                                    <td className="text-center">{data.jumlah}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    )
};

export default Analisis;