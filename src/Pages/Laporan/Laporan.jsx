import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import LaporanStyled from "./Laporan.styled";
import imgAuliaComp from "../../assets/laporan/aulia-comp.png";
import imgLaporanHarian from "../../assets/laporan/laporan-harian.png";

const Laporan = () => {
  const data = [
    { label: "Beranda", url: "/homepage" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Notifikasi", url: "/notifikasi" },
    { label: "Kegiatanku", url: "/status-register" },
  ];

  return (
    <LaporanStyled>
      <Navbar data={data} login={false} profile={true} />
      <div className="card mt-5 mb-3 pt-3 bg-shadow">
        <div className="card-body">
          <h1 className="card-title text-center fw-bold mb-4 text-blue">
            Kegiatanku
          </h1>

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
          <button className="btn btn-lg btn-primary mb-3 fs-2 fw-semibold">
            Buat Laporan Anda
          </button>
        </div>
        <div className="d-flex flex-row grid gap-3">
          <div className="row-coloum col-3">
            <div className="col">
              <div className="card mb-4 rounded-5 card-custom">
                <img src={imgAuliaComp} alt="" className="img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Aulia Computer</h5>
                  <p className="card-text">Griya Abadi-Bangkalan</p>
                  <p className="card-text">
                    Service Komputer Aulia Computer melayani service laptop
                    dengan kerusakan mati total, install ulang, ganti layar,
                    ganti ...
                  </p>
                </div>
              </div>
            </div>

            {/* Laporan Mingguan */}
            <div className="col">
              <div className="card mb-4 rounded-5 card-custom">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Lengkapi Laporan Mingguan Kamu!
                  </h5>
                  <p className="card-text">
                    Laporan Harian
                    <span className="fw-semibold"> Belum Lengkap</span>
                  </p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary px-4 fw-semibold">
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
                      <h5 className="card-title fw-semibold mb-2">
                        Laporan Minggu Ke-1
                      </h5>
                      <p
                        className="card-text mb-2"
                        style={{ fontSize: "0.875rem" }}
                      >
                        13-17 November 2023
                      </p>
                      <p
                        className="card-text text-end fw-semibold"
                        style={{ color: "#1E90FF" }}
                      >
                        Setujui
                      </p>
                    </div>
                  </div>
                  {/* Minggu 2 */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title fw-semibold mb-2">
                        Laporan Minggu Ke-2
                      </h5>
                      <p
                        className="card-text mb-2"
                        style={{ fontSize: "0.875rem" }}
                      >
                        13-17 November 2023
                      </p>
                      <p
                        className="card-text text-end fw-semibold"
                        style={{ color: "#1E90FF" }}
                      >
                        Setujui
                      </p>
                    </div>
                  </div>
                  {/* Minggu 3 */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title fw-semibold mb-2">
                        Laporan Minggu Ke-3
                      </h5>
                      <p
                        className="card-text mb-2"
                        style={{ fontSize: "0.875rem" }}
                      >
                        13-17 November 2023
                      </p>
                      <p
                        className="card-text text-end fw-semibold"
                        style={{ color: "#1E90FF" }}
                      >
                        Setujui
                      </p>
                    </div>
                  </div>
                  {/* Minggu 4 */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title fw-semibold mb-2">
                        Laporan Minggu Ke-4
                      </h5>
                      <p
                        className="card-text mb-2"
                        style={{ fontSize: "0.875rem" }}
                      >
                        13-17 November 2023
                      </p>
                      <p
                        className="card-text text-end fw-semibold"
                        style={{ color: "#1E90FF" }}
                      >
                        Setujui
                      </p>
                    </div>
                  </div>
                  {/* Minggu 5 */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title fw-semibold mb-2">
                        Laporan Minggu Ke-5
                      </h5>
                      <p
                        className="card-text mb-2"
                        style={{ fontSize: "0.875rem" }}
                      >
                        13-17 November 2023
                      </p>
                      <p
                        className="card-text text-end fw-semibold"
                        style={{ color: "#1E90FF" }}
                      >
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
                  <p className="card-text">
                    Laporan Mingguan dapat dibuat jika sudah mengisi laporan
                    harian secara lengkap!
                  </p>

                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary px-4 fw-semibold">
                      Unggah Laporan
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-4 rounded-4 card-custom">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Laporan Harian</h5>
                  <p className="card-text mb-2">
                    Tulis hasil belajar harianmu disini!
                  </p>
                  <div className="card-text mb-3">
                    Laporan terdiri dari 20-50 Kata!
                  </div>

                  {/* 1 */}
                  <div className="card mb-4">
                    <div className="card-body">
                      <h6 className="card-title fw-bold text-blue mb-0">
                        Senin, 13 November 2023
                      </h6>
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body">
                            <p className="card-text text-justify">
                              Mempelajari mengenai apa itu UI/UX secara lebih
                              detail, memberikan pengertian mengenai macam-macam
                              framework, dan memberikan bagaimana cara untuk
                              melakukan research orginizer agar produk layanan
                              yang kita buat tepat sasaran dan mudah digunakan
                              oleh user.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <img
                            src={imgLaporanHarian}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="card mb-4">
                    <div className="card-body">
                      <h6 className="card-title fw-bold text-blue mb-0">
                        Selasa, 14 November 2023
                      </h6>
                      <h6 className="card-text text-center fw-bold">
                        Apakah kamu mengikuti kegiatan PKL hari ini?
                      </h6>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary px-4 fw-semibold me-3">
                          Hadir
                        </button>
                        <button className="btn btn-danger px-4 fw-semibold">
                          Tidak Hadir
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="card mb-4">
                    <div
                      className="card-body"
                      style={{ background: "#F0F4FE" }}
                    >
                      <h6 className="card-title fw-bold text-blue mb-0">
                        Rabu, 15 November 2023
                      </h6>
                      <h6 className="card-text text-center fw-bold">
                        Apakah kamu mengikuti kegiatan PKL hari ini?
                      </h6>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-primary px-4 fw-semibold me-3"
                          disabled
                        >
                          Hadir
                        </button>
                        <button
                          className="btn btn-danger px-4 fw-semibold"
                          disabled
                        >
                          Tidak Hadir
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 4 */}
                  <div className="card mb-4">
                    <div
                      className="card-body"
                      style={{ background: "#F0F4FE" }}
                    >
                      <h6 className="card-title fw-bold text-blue mb-0">
                        Kamis, 16 November 2023
                      </h6>
                      <h6 className="card-text text-center fw-bold">
                        Apakah kamu mengikuti kegiatan PKL hari ini?
                      </h6>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-primary px-4 fw-semibold me-3"
                          disabled
                        >
                          Hadir
                        </button>
                        <button
                          className="btn btn-danger px-4 fw-semibold"
                          disabled
                        >
                          Tidak Hadir
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 5 */}
                  <div className="card mb-4">
                    <div
                      className="card-body"
                      style={{ background: "#F0F4FE" }}
                    >
                      <h6 className="card-title fw-bold text-blue mb-0">
                        Jum'at, 17 November 2023
                      </h6>
                      <h6 className="card-text text-center fw-bold">
                        Apakah kamu mengikuti kegiatan PKL hari ini?
                      </h6>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-primary px-4 fw-semibold me-3"
                          disabled
                        >
                          Hadir
                        </button>
                        <button
                          className="btn btn-danger px-4 fw-semibold"
                          disabled
                        >
                          Tidak Hadir
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 6 */}
                  <div className="card mb-4">
                    <div
                      className="card-body"
                      style={{ background: "#F0F4FE" }}
                    >
                      <h6 className="card-title fw-bold text-blue mb-0">
                        Sabtu, 18 November 2023
                      </h6>
                      <h6 className="card-text text-center fw-bold">
                        Apakah kamu mengikuti kegiatan PKL hari ini?
                      </h6>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-primary px-4 fw-semibold me-3"
                          disabled
                        >
                          Hadir
                        </button>
                        <button
                          className="btn btn-danger px-4 fw-semibold"
                          disabled
                        >
                          Tidak Hadir
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 7 */}
                  <div className="card mb-4">
                    <div
                      className="card-body"
                      style={{ background: "#F0F4FE" }}
                    >
                      <h6 className="card-title fw-bold text-blue mb-0">
                        Minggu, 19 November 2023
                      </h6>
                      <h6 className="card-text text-center fw-bold">
                        Apakah kamu mengikuti kegiatan PKL hari ini?
                      </h6>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-primary px-4 fw-semibold me-3"
                          disabled
                        >
                          Hadir
                        </button>
                        <button
                          className="btn btn-danger px-4 fw-semibold"
                          disabled
                        >
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
        </div>
      </div>
    </LaporanStyled>
  );
};

export default Laporan;
