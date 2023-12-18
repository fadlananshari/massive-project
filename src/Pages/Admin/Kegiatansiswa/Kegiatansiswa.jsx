import Navbar from "../../Components/Navbar/Navbar";
import KegiatansiswaStyled from "./Kegiatansiswwa.styled";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imgTBSM from "../../assets/kegiatan-siswa/tbsm.png";

const Kegiatansiswa = () => {
  const data = [
    { label: "Beranda", url: "/homepage" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Notifikasi", url: "/notifikasi-admin" },
    { label: "Kegiatanku Siswa", url: "/kegiatan-siswa" },
  ];
  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <KegiatansiswaStyled>
        <div className="container mt-5 pt-5">
          <div className="d-flex flex-column">
            <div className="btn-custom btn-lg btn-primary mb-3 fs-2 fw-semibold">
              Buat Laporan Anda
            </div>
          </div>

          <div className="row">
            <h5>Pilih jurusan yang sesuai yang anda bimbing!</h5>
          </div>

          <div className="row mt-3">
            <Card className="col-md-4 p-0 mb-3">
              <Card.Img variant="top" src={imgTBSM} className="img-fluid" />
              <Card.Body>
                <Card.Title className="text-center">
                  Teknik dan Bisnis Sepeda motor
                </Card.Title>
                <Card.Text className="text-center">
                  <Button
                    variant="primary"
                    style={{ paddingLeft: "100px", paddingRight: "100px" }}
                    className="fw-bold"
                  >
                    Kegiatan Siswa
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </KegiatansiswaStyled>
    </>
  );
};

export default Kegiatansiswa;
