import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import LaporanStyled from './Laporan.styled';
import imgAuliaComp from '../../assets/laporan/aulia-comp.png';
import imgLaporanHarian from '../../assets/laporan/laporan-harian.png';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import PopUpConfirm from '../../Components/Popup/PopUpConfirm';

const Laporan = () => {
  const data = [
    { label: 'Beranda', url: '/homepage' },
    { label: 'Program', url: '/pilih-jurusan' },
    { label: 'Notifikasi', url: '/notifikasi' },
    { label: 'Kegiatanku', url: '/status-register' },
  ];

  return (
    <LaporanStyled>
      <Navbar data={data} login={false} profile={true} />
      <div className="card mt-5 mb-3 pt-3 bg-shadow">
        <div className="card-body">
          <h1 className="card-title text-center fw-bold mb-4 text-blue">Kegiatanku</h1>

          <div className="d-flex justify-content-center">
            <Link to="/laporan">
              <button type="submit" className="btn btn-primary me-4">
                Kegiatan Aktif
              </button>
            </Link>
            <Link to="/status-register">
              <button type="submit" className="btn btn-outline-primary">
                Status Pendaftaran
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex flex-column">
          <button className="btn btn-lg btn-primary mb-3 fs-2 fw-semibold">Buat Laporan Anda</button>
        </div>
        <div className="d-flex flex-row grid gap-3">
          <div className="row-coloum col-3">
            <div className="col">
              <div className="card mb-4 rounded-5 card-custom">
                <img src={imgAuliaComp} alt="" className="img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Aulia Computer</h5>
                  <p className="card-text">Griya Abadi-Bangkalan</p>
                  <p className="card-text">Service Komputer Aulia Computer melayani service laptop dengan kerusakan mati total, install ulang, ganti layar, ganti ...</p>
                </div>
              </div>
            </div>

            {/* Laporan Mingguan */}
            <div className="col">
              <div className="card mb-4 rounded-5 card-custom">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Lengkapi Laporan Mingguan Kamu!</h5>
                  <p className="card-text">
                    Laporan Harian
                    <span className="fw-semibold"> Belum Lengkap</span>
                  </p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary px-4 fw-semibold" data-bs-toggle="modal" data-bs-target="#weekModal">
                      Buat Laporan!
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Laporan */}
            <div className="col">
              <div className="card mb-4 rounded-5 card-custom">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Status Laporan :</h5>
                  {/* Minggu 1 */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title fw-semibold mb-2">Laporan Minggu Ke-1</h5>
                      <p className="card-text mb-2" style={{ fontSize: '0.875rem' }}>
                        13-17 November 2023
                      </p>
                      <p className="card-text text-end fw-semibold" style={{ color: '#1E90FF' }}>
                        Setujui
                      </p>
                    </div>
                  </div>
                  {/* Minggu 2 */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title fw-semibold mb-2">Laporan Minggu Ke-2</h5>
                      <p className="card-text mb-2" style={{ fontSize: '0.875rem' }}>
                        13-17 November 2023
                      </p>
                      <p className="card-text text-end fw-semibold" style={{ color: '#1E90FF' }}>
                        Setujui
                      </p>
                    </div>
                  </div>
                  {/* Minggu 3 */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title fw-semibold mb-2">Laporan Minggu Ke-3</h5>
                      <p className="card-text mb-2" style={{ fontSize: '0.875rem' }}>
                        13-17 November 2023
                      </p>
                      <p className="card-text text-end fw-semibold" style={{ color: '#1E90FF' }}>
                        Setujui
                      </p>
                    </div>
                  </div>
                  {/* Minggu 4 */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title fw-semibold mb-2">Laporan Minggu Ke-4</h5>
                      <p className="card-text mb-2" style={{ fontSize: '0.875rem' }}>
                        13-17 November 2023
                      </p>
                      <p className="card-text text-end fw-semibold" style={{ color: '#1E90FF' }}>
                        Setujui
                      </p>
                    </div>
                  </div>
                  {/* Minggu 5 */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title fw-semibold mb-2">Laporan Minggu Ke-5</h5>
                      <p className="card-text mb-2" style={{ fontSize: '0.875rem' }}>
                        13-17 November 2023
                      </p>
                      <p className="card-text text-end fw-semibold" style={{ color: '#1E90FF' }}>
                        Setujui
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-coloum col">
            <div className="col">
              <div className="card mb-4 rounded-4 card-custom">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Laporan Akhir</h5>
                  <p className="card-text">Laporan Mingguan dapat dibuat jika sudah mengisi laporan harian secara lengkap!</p>

                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary px-4 fw-semibold" data-bs-toggle="modal" data-bs-target="#finalModal">Unggah Laporan</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-4 rounded-4 card-custom">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Laporan Harian</h5>
                  <p className="card-text mb-2">Tulis hasil belajar harianmu disini!</p>
                  <div className="card-text mb-3">Laporan terdiri dari 20-50 Kata!</div>

                  {/* 1 */}
                  <div className="card mb-4">
                    <div className="card-body">
                      <h6 className="card-title fw-bold text-blue mb-0">Senin, 13 November 2023</h6>
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body">
                            <p className="card-text text-justify">
                              Mempelajari mengenai apa itu UI/UX secara lebih detail, memberikan pengertian mengenai macam-macam framework, dan memberikan bagaimana cara untuk melakukan research orginizer agar produk layanan yang kita buat
                              tepat sasaran dan mudah digunakan oleh user.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <img src={imgLaporanHarian} alt="" className="img-fluid rounded-3" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="card mb-4">
                    <div className="card-body">
                      <h6 className="card-title fw-bold text-blue mb-0">Selasa, 14 November 2023</h6>
                      <h6 className="card-text text-center fw-bold">Apakah kamu mengikuti kegiatan PKL hari ini?</h6>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary px-4 fw-semibold me-3" data-bs-toggle="modal" data-bs-target="#presentModal">
                          Hadir
                        </button>
                        <button className="btn btn-danger px-4 fw-semibold" data-bs-toggle="modal" data-bs-target="#absentModal">
                          Tidak Hadir
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="card mb-4">
                    <div className="card-body" style={{ background: '#F0F4FE' }}>
                      <h6 className="card-title fw-bold text-blue mb-0">Rabu, 15 November 2023</h6>
                      <h6 className="card-text text-center fw-bold">Apakah kamu mengikuti kegiatan PKL hari ini?</h6>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary px-4 fw-semibold me-3" disabled>
                          Hadir
                        </button>
                        <button className="btn btn-danger px-4 fw-semibold" disabled>
                          Tidak Hadir
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 4 */}
                  <div className="card mb-4">
                    <div className="card-body" style={{ background: '#F0F4FE' }}>
                      <h6 className="card-title fw-bold text-blue mb-0">Kamis, 16 November 2023</h6>
                      <h6 className="card-text text-center fw-bold">Apakah kamu mengikuti kegiatan PKL hari ini?</h6>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary px-4 fw-semibold me-3" disabled>
                          Hadir
                        </button>
                        <button className="btn btn-danger px-4 fw-semibold" disabled>
                          Tidak Hadir
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 5 */}
                  <div className="card mb-4">
                    <div className="card-body" style={{ background: '#F0F4FE' }}>
                      <h6 className="card-title fw-bold text-blue mb-0">Jum'at, 17 November 2023</h6>
                      <h6 className="card-text text-center fw-bold">Apakah kamu mengikuti kegiatan PKL hari ini?</h6>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary px-4 fw-semibold me-3" disabled>
                          Hadir
                        </button>
                        <button className="btn btn-danger px-4 fw-semibold" disabled>
                          Tidak Hadir
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 6 */}
                  <div className="card mb-4">
                    <div className="card-body" style={{ background: '#F0F4FE' }}>
                      <h6 className="card-title fw-bold text-blue mb-0">Sabtu, 18 November 2023</h6>
                      <h6 className="card-text text-center fw-bold">Apakah kamu mengikuti kegiatan PKL hari ini?</h6>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary px-4 fw-semibold me-3" disabled>
                          Hadir
                        </button>
                        <button className="btn btn-danger px-4 fw-semibold" disabled>
                          Tidak Hadir
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 7 */}
                  <div className="card mb-4">
                    <div className="card-body" style={{ background: '#F0F4FE' }}>
                      <h6 className="card-title fw-bold text-blue mb-0">Minggu, 19 November 2023</h6>
                      <h6 className="card-text text-center fw-bold">Apakah kamu mengikuti kegiatan PKL hari ini?</h6>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary px-4 fw-semibold me-3" disabled>
                          Hadir
                        </button>
                        <button className="btn btn-danger px-4 fw-semibold" disabled>
                          Tidak Hadir
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* END */}
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="presentModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{ background: '#DCE8FF' }}>
                <div className="modal-body">
                  <button className="border-0" data-bs-dismiss="modal">
                    <FaArrowAltCircleLeft size={30} className="text-primary m-0" />
                  </button>

                  <h5 className="text-center font-poppins fw-semibold mb-3">Selasa, 14 November 2023</h5>
                  <textarea className="border-0 rounded-4 p-3" placeholder="Deskripsikan hasil belajarmu!" name="" id="" cols="30" rows="10" style={{ width: '100%', height: '150px' }}></textarea>
                  <div className="bg-white rounded-4 text-center pt-4 pb-1 mt-2 mb-3">
                    <FaCloudUploadAlt size={50} className="text-primary" />
                    <p>Unggah Gambar</p>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirm">
                      Selesai
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="absentModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{ background: '#DCE8FF' }}>
                <div className="modal-body">
                  <button className="border-0" data-bs-dismiss="modal">
                    <FaArrowAltCircleLeft size={30} className="text-primary m-0" />
                  </button>

                  <h5 className="text-center font-poppins fw-semibold mb-3">Selasa, 14 November 2023</h5>
                  <p className="m-0 fw-bold">Keterangan:</p>
                  <small className="text-secondary">Sakit, Izin dan lain sebagainya</small>
                  <input type="text" className="rounded border-0 py-2 px-3" placeholder="Keterangan" style={{ width: '100%' }} />
                  <p className="m-0 mt-2 fw-bold">Bukti keterangan</p>
                  <small className="text-secondary">Surat dokter, screnshoot izin, dan lain sebagainya.</small>
                  <div className="bg-white rounded-4 text-center pt-4 pb-1 mt-2">
                    <FaCloudUploadAlt size={50} className="text-primary" />
                    <p>Unggah Gambar</p>
                  </div>
                  <small className="text-secondary">NB: jika bukti keterangan tidak jelas maka dianggap alfa</small>
                  <div className="d-flex justify-content-center mt-3">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirm">
                      Selesai
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="weekModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{ background: '#DCE8FF' }}>
                <div className="modal-body">
                  <button className="border-0" data-bs-dismiss="modal">
                    <FaArrowAltCircleLeft size={30} className="text-primary m-0" />
                  </button>

                  <h5 className="text-center font-poppins fw-semibold">Minggu ke - 1 (14 - 21 November 2023)</h5>
                  <small className="text-danger fst-italic">Terdiri dari 100 - 150 kata</small>
                  <textarea className="border-0 rounded-4 p-3" placeholder="Deskripsikan hasil belajarmu!" name="" id="" cols="30" rows="10" style={{ width: '100%', height: '300px' }}></textarea>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Laporan ini benar-benar dibuat oleh saudara/i dapat dipertanggungjawabkan kebenarannya..
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirm">
                      Selesai
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="finalModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" style={{ background: '#DCE8FF' }}>
                <div className="modal-body">
                  <button className="border-0" data-bs-dismiss="modal">
                    <FaArrowAltCircleLeft size={30} className="text-primary m-0" />
                  </button>
                  <p className='mt-2 mb-0'>Unggah file laporan akhir kamu disini</p>
                  <div className="bg-white rounded-4 text-center pt-4 pb-1 mt-2 mb-3">
                    <FaCloudUploadAlt size={50} className="text-primary" />
                    <p>Unggah File</p>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirm">
                      Selesai
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <PopUpConfirm id="confirm" desc="Anda ingin mengirim laporan anda?" btn1={{ cName: 'btn-danger', url: '#', text: 'Batal' }} btn2={{ cName: 'btn-primary', url: '#', text: 'Kirim' }} />
        </div>
      </div>
    </LaporanStyled>
  );
};

export default Laporan;
