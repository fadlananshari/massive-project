import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Img1 from '../assets/detail-perusahaan/detail-perusahaan (1).png';
import Img2 from '../assets/detail-perusahaan/detail-perusahaan (2).png';
import Img3 from '../assets/detail-perusahaan/detail-perusahaan (3).png';
import Img4 from '../assets/detail-perusahaan/detail-perusahaan (4).png';
import Img5 from '../assets/detail-perusahaan/detail-perusahaan (5).png';
import Map from '../assets/detail-perusahaan/map.png';
import OpenSign from '../assets/detail-perusahaan/Open Sign.png';
import Sandbox from '../assets/detail-perusahaan/Sandbox.png';
import Cart from '../assets/detail-perusahaan/Shopping Cart.png';
import Tools from '../assets/detail-perusahaan/Tools.png';
import Navbar from '../Components/Navbar/Navbar';
import { styled } from 'styled-components';

const DetailPendaftaranStyled = styled.div`

  .bg-DCE8FF {
    background-color: #dce8ff;
  }

  .max-content {
    width: max-content;
    height: max-content;
  }

  .btn-daftar {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 4px 1.5rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 5px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: #fff;
    background-color: #1E90FF;
    border-color: #1E90FF;
    height: max-content;
    text-decoration: none;
  }
`;

const StatusPendaftaran = () => {
  const data = [
    { label: 'Beranda', url: '/homepage' },
    { label: 'Program', url: '/pilih-jurusan' },
    { label: 'Notifikasi', url: '/notifikasi' },
    { label: 'Kegiatanku', url: '/kegiatanku' },
  ];
  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <DetailPendaftaranStyled>
        <div className="bg-DCE8FF">
          <div className="container pt-5 mt-4 pb-3">
            <div className="bg-white p-3 rounded-4">
              <h3 className="text-primary fw-bold text-end fst-italic">Proses</h3>
              <h2 className="fw-bold">Aulia Computer</h2>
              <a href="" className="text-decoration-none">
                <small className=" text-dark">
                  <FaMapMarkerAlt size="20" style={{ color: 'red' }} /> Jl. Kini Balu No.16, Bilaporah, Socah, Kabupaten Bangkalan, Jawa Timur 69116, Area Sawah/Kebun, Bilaporah, Kec. Socah, Kabupaten Bangkalan, Jawa Timur 69116{' '}
                </small>
              </a>
              <div className="row row-cols-1 row-cols-md-2 my-3">
                <div className="col">
                  <img src={Img1} alt="" className="img-fluid rounded-4" />
                </div>
                <div className="col">
                  <div className="row row-cols-2">
                    <div className="col">
                      <img src={Img2} alt="" className="img-fluid rounded-3 mb-3" />
                    </div>
                    <div className="col">
                      <img src={Img3} alt="" className="img-fluid rounded-3 mb-3" />
                    </div>
                    <div className="col">
                      <img src={Img4} alt="" className="img-fluid rounded-3" />
                    </div>
                    <div className="col">
                      <img src={Img5} alt="" className="img-fluid rounded-3" />
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="fw-bold">Service komputer, laptop, printer dan toko peralatan komputer</h4>
              <p className="m-0">Id Kegiatan: 123456789</p>
              <p className="">Tgl Pelakasanaan: 1 januari 2024 - 1 juni 2024</p>
              <div className="row p-3 gap-3">
                <div className="col p-3 bg-DCE8FF rounded-3 max-content">
                  <p className="fw-bold">Rincian Kegiatan tempat PKL</p>
                  <div className="d-flex gap-2">
                    <img src={Cart} alt="" className="max-content" />
                    <p>Melayani pembelian kebutuhan komputer, laptop, dan printer</p>
                  </div>
                  <div className="d-flex gap-2">
                    <img src={Tools} alt="" className="max-content" />
                    <p>Service komputer, laptop, dan printer</p>
                  </div>
                  <div className="d-flex gap-2">
                    <img src={Sandbox} alt="" className="max-content" />
                    <p>Install ulang software</p>
                  </div>
                  <div className="d-flex gap-2">
                    <img src={OpenSign} alt="" className="max-content" />
                    <p className="m-0">Buka, senin - sabtu 08.00 - 16.00 WIB</p>
                  </div>
                </div>
                <div className="col p-3 bg-DCE8FF rounded-3 max-content">
                  <p className="fw-bold">Syarat-syarat</p>
                  <div className="d-flex gap-2">
                    <p className="px-2 rounded-circle bg-primary max-content text-white">1</p>
                    <p> Tanggung jawab dalam bekerja</p>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="px-2 rounded-circle bg-primary max-content text-white">2</p>
                    <p>Disiplin</p>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="px-2 rounded-circle bg-primary max-content text-white">3</p>
                    <p>Dapat berkomunikasi dengan baik</p>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="px-2 rounded-circle bg-primary max-content text-white">4</p>
                    <p>Bisa bekerja bersama team</p>
                  </div>
                  <div className="d-flex gap-2">
                    <p className="px-2 rounded-circle bg-primary max-content text-white">5</p>
                    <p className="m-0">Menaati peraturan tempat PKL</p>
                  </div>
                </div>
                <div className="col">
                  <img src={Map} alt="" className="img-fluid" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </DetailPendaftaranStyled>
    </>
  );
};

export default StatusPendaftaran;
