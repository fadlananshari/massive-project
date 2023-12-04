import React from 'react';
import Styled from 'styled-components';
import Navbar from '../Components/Navbar/Navbar';

const NotifikasiStyled = Styled.div`
.bg-color {
    background-color:#DCE8FF;
    height: 90vh;
}`;

const Notifikasi = () => {
  const data = [
    { label: 'Beranda', url: '/homepage' },
    { label: 'Program', url: '/pilih-jurusan' },
    { label: 'Notifikasi', url: '/notifikasi' },
    { label: 'Kegiatanku', url: '/kegiatanku' },
  ];
  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <NotifikasiStyled>
        <div className="bg-color mt-3 pt-5 pb-3">
          <div className="container mt-3">
            <div className="bg-white rounded py-2 px-3">
              <div className="d-flex justify-content-between rounded">
                <h3 className="fw-bold">Notifikasi</h3>
                <small className="text-secondary">Sudah Dibaca</small>
              </div>
            </div>
          </div>
        </div>
      </NotifikasiStyled>
    </>
  );
};

export default Notifikasi;
