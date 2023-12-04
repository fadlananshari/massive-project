import React from 'react';
import JurusanCarousel from '../../Components/Jurusan/JurusanCarousel';
import Img2 from '../../assets/perusahaan/gambar2.png';
import Img1 from '../../assets/perusahaan/gambar1.png';
import Navbar from '../../Components/Navbar/Navbar';
import PerusahaanCard from '../../Components/Perusahaan/PerusahaanCard';
import PerusahanList from './PerusahaanList';
import CariPerusahaan_adminStyled from './CariPerusahaan_admin.style';
import PerusahaanCard_admin from '../../Components/Perusahaan/PerusahaanCard_admin';
import { Link } from 'react-router-dom';

const CariPerusahaanadmin = () => {
  const data = [
    { label: 'Beranda', url: '/homepage' },
    { label: 'Program', url: '/pilih-jurusan' },
    { label: 'Notifikasi', url: '/notifikasi' },
    { label: 'Kegiatanku', url: '/kegiatanku' },
  ];
  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <CariPerusahaan_adminStyled>
        <div className="bg-color">
          <div className="container mt-5 pt-4 pb-5">
            <div className="row row-cols-1 row-cols-lg-2 d-flex ">
              <div className="col">
                <div class="position-relative">
                  <img src={Img1} alt="" class="img-fluid" />
                  <div class="ms-4 text-white position-absolute w-100" style={{ top: '67%' }}>
                    <h3 className=''> Teknik Komputer dan Jaringan (TKJ)</h3>
                  </div>
                </div>
              </div>
              <img src={Img2} alt="" className="col d-none d-lg-block img-fluid" />
            </div>

            <div className=" px-4 pt-4 rounded mt-4">

              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 d-flex">
                {PerusahanList.map((item, index) => {
                  return <PerusahaanCard_admin perusahaan={item} key={index} className="col" />;
                })}
              </div>
              <Link to="/tambah-perusahaan" className='button_addperusahaan mt-5 mb-20px text-decoration-none d-flex justify-content-end'>
                <button type="submit" className="btn-add">Tambah Tempat PKL</button>
              </Link>
            </div>
          </div>
        </div>
      </CariPerusahaan_adminStyled>
    </>
  );
};

export default CariPerusahaanadmin;
