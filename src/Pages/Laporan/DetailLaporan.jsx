import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import LaporanStyled from "./Laporan.styled";
import { FaCircleArrowLeft } from "react-icons/fa6";
import imgAuliaComp from "../../assets/laporan/aulia-comp.png";
import imgLaporanHarian from "../../assets/laporan/laporan-harian.png";

const DetailLaporan = () => {
  const data = [
    { label: "Beranda", url: "/homepage" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Notifikasi", url: "/notifikasi" },
    { label: "Kegiatanku", url: "/status-register" },
  ];

  return (
    <LaporanStyled>
      <Navbar data={data} login={false} profile={true} />
      <div className="container">
        <div className="row mt-5 pt-4 align-items-center mb-3">
          <div className="col-lg-1">
            <Link to="/laporan">
              <FaCircleArrowLeft
                className="icon float-end"
                style={{ width: "50px", height: "50px" }}
              />
            </Link>
          </div>
          <div className="col-lg-11">
            <div className="d-flex flex-column">
              <div className="btn-custom btn-lg btn-primary fs-2 fw-semibold">
                Laporan Kegiatan PKL
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex flex-row grid gap-3 ">
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
          </div>
          <div className="row-coloum col">
            <div className="col">
              <div className="card mb-4 rounded-4 card-custom">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Laporan Harian</h5>
                  <p className="card-text mb-2">Minggu Ke-1</p>
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
                          <div className="card-body p-2">
                            <p
                              className="card-text text-justify rounded-5"
                              style={{
                                outline: "2px solid #1E90FF",
                                padding: "10px 30px",
                              }}
                            >
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

                  {/* 1 */}
                  <div className="card mb-4">
                    <div className="card-body">
                      <h6 className="card-title fw-bold text-blue mb-0">
                        Senin, 13 November 2023
                      </h6>
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body p-2">
                            <p
                              className="card-text text-justify rounded-5"
                              style={{
                                outline: "2px solid #1E90FF",
                                padding: "10px 30px",
                              }}
                            >
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

                  {/* 1 */}
                  <div className="card mb-4">
                    <div className="card-body">
                      <h6 className="card-title fw-bold text-blue mb-0">
                        Senin, 13 November 2023
                      </h6>
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body p-2">
                            <p
                              className="card-text text-justify rounded-5"
                              style={{
                                outline: "2px solid #1E90FF",
                                padding: "10px 30px",
                              }}
                            >
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

                  {/* 1 */}
                  <div className="card mb-4">
                    <div className="card-body">
                      <h6 className="card-title fw-bold text-blue mb-0">
                        Senin, 13 November 2023
                      </h6>
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body p-2">
                            <p
                              className="card-text text-justify rounded-5"
                              style={{
                                outline: "2px solid #1E90FF",
                                padding: "10px 30px",
                              }}
                            >
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

                  {/* 1 */}
                  <div className="card mb-4">
                    <div className="card-body">
                      <h6 className="card-title fw-bold text-blue mb-0">
                        Senin, 13 November 2023
                      </h6>
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body p-2">
                            <p
                              className="card-text text-justify rounded-5"
                              style={{
                                outline: "2px solid #1E90FF",
                                padding: "10px 30px",
                              }}
                            >
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

export default DetailLaporan;
