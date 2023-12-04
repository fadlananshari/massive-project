import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import img_form from '../../assets/img_form.jpeg';
import TambahPerusahaanStyled from './TambahPerusahaan.styled';
import img_addpt from '../../assets/foto-profile-perusahaan.jpeg';
import img_FPP1 from '../../assets/FPP-1.jpeg';
import img_FPP2 from '../../assets/FPP-2.jpeg';
import img_FPP3 from '../../assets/FPP-3.jpeg';
import img_FPP4 from '../../assets/FPP-4.jpeg';
import DatePicker from 'react-datepicker';

const Addperusahaan = () => {
  const data = [
    { label: 'Beranda', url: '/homepage' },
    { label: 'Program', url: '/pilih-jurusan' },
    { label: 'Notifikasi', url: '/notifikasi' },
    { label: 'Kegiatanku', url: '/kegiatanku' },
  ];
  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <TambahPerusahaanStyled>
        <div className="form p-5" style={{ background: '#DCE8FF' }}>
          <div class="card-body mt-5 title text-center" style={{ background: '#1E90FF', width:'100%' }}>
            <h3>Tambah Perusahaan</h3>
          </div>
          <form className="form bg-white p-5 mt-5" style={{ borderRadius: '10px', width:'100%' }}>
            <div className="container">
              <div class="row">
                <div class="col">
                  <img src={img_form} alt="" className="img-fluid" style={{ borderRadius: '10px', width: '100%' }} />
                </div>
                <div class="col row-mb-4  text-center d-flex flex-wrap">
                  <img src={img_FPP1} alt="" className="img-fluid col-md-4 mb-4 mx-2" style={{ borderRadius: '10px' }}/>
                  <img src={img_FPP2} alt="" className="img-fluid col-md-4 mb-4 mx-2" style={{ borderRadius: '10px' }} />
                  <img src={img_FPP3} alt="" className="img-fluid col-md-4 mb-4 mx-2" style={{ borderRadius: '10px' }} />
                  <img src={img_FPP4} alt="" className="img-fluid col-md-4 mb-4 mx-2"  style={{ borderRadius: '10px' }} />
                </div>
              </div>
            </div>
            <img src="" alt="" />
            <div class="row mb-3">
              <label for="inputname" class="col-sm-2 col-form-label">
                Nama Perusahaan
              </label>
              <div class="col-sm-5">
                <input type="name" class="form-control" id="inputname" />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputnisn" class="col-sm-2 col-form-label">
                ID Perusahaan
              </label>
              <div class="col-sm-5">
                <input type="number" class="form-control" id="inputname" />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputnisn" class="col-sm-2 col-form-label">
                Tanggal Pelaksanaan
              </label>
              <div className='col-sm-5 d-flex TanggalPelaksanaan'>
                <div class="startDate" style={{ width: '45%', marginRight: '10%' }}>
                  <input type="date" class="form-control" id="inputname" />
                </div>
                <div class="endDate" style={{ width: '45%' }}>
                  <input type="date" class="form-control" id="inputname" />
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputalamat" className="col-sm-2 col-form-label">
                Rincian Kegiatan
              </label>
              <div className="col-sm-5">
                <textarea type="text" id="inputalamat" className="form-control" rows="5" aria-describedby="nisnHelpInline" />
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputalamat" className="col-sm-2 col-form-label">
                Syarat Pendaftaran
              </label>
              <div className="col-sm-5">
                <textarea type="text" id="inputalamat" className="form-control" rows="5" aria-describedby="nisnHelpInline" />
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputalamat" className="col-sm-2 col-form-label">
                Alamat Perusahaan
              </label>
              <div className="col-sm-5">
                <textarea type="text" id="inputalamat" className="form-control" aria-describedby="nisnHelpInline" />
              </div>
            </div>

            <Link to="/cari-perusahaan-admin/:id" className='text-decoration-none d-flex justify-content-end'>
              <button type="submit" className="btn btn-primary">
                Tambah
              </button>
            </Link>
          </form>
        </div>
      </TambahPerusahaanStyled>
    </>
  );
};

export default Addperusahaan;
