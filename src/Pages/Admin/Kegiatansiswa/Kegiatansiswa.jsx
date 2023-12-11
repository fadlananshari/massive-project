import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from '../../../Components/Navbar/Navbar';
import KegiatansiswaStyled from './Kegiatansiswwa.styled';

const Kegiatansiswa = () => {
  const data = [
    { label: 'Beranda', url: '/homepage' },
    { label: 'Program', url: '/pilih-jurusan' },
    { label: 'Notifikasi', url: '/notifikasi' },
    { label: 'Kegiatanku', url: '/kegiatanku' },
  ];
  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <KegiatansiswaStyled >
        <div className="form p-5" style={{ background: '#FFFFFF' }}>
          <div class="card-body mt-5 title text-center" style={{ background: '#1E90FF', width:'100%' }}>
            <h3>Tambah Perusahaan</h3>
          </div>
        </div>
      </KegiatansiswaStyled>
    </>
  );
};

export default Kegiatansiswa;
