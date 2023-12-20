import { useEffect, useId, useState } from "react";
import { useParams }, { useEffect, useState } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "../../../Components/Navbar/Navbar";
import img_form from "../../../assets/img_form.jpeg";
import FormDaftarStyled from "./FormDaftar.styled";
import axios from "axios";

const FormDaftar1 = ({ id_user }) => {
  // get kode pkl
  const { id } = useParams();

  const [user, setUser] = useState();
  const [idUser, setIdUser] = useState();
  const [dataPKL, setDataPKL] = useState([]);
  const [jurusan, setJurusan] = useState([]);
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  // get ID User
  const token = localStorage.getItem("Authorize");
  const getIdUser = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/v1/decode-token/${token}`
    );
    const data = response.data.data;
    setIdUser(data.userId);
  };

  // get data user
  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/v1/users/${idUser}`
    );
    const data = response.data.data;
    setUser(data);
  };

  const getPKL = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/v1/pkl-kode/${id}`
    );
    const data = response.data.data;
    setDataPKL(data);
  };

  const getJurusan = async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/jurusan`);
    const data = response.data.data;
    setJurusan(data);
  };

  useEffect(() => {
    try {
      getIdUser();
      getUser();
      getPKL();
      getJurusan();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const namaUser = user.map((item) => item.nama);
  // const NISN = user.map((item) => item.nisn);
  // const JK = user.map((item) => item.jenis_kelamin);
  // const alamat = user.map((item) => item.alamat);
  // const email = user.map((item) => item.email);

  console.log(dataPKL);
import axios from 'axios';

  const [user, setUser] = useState(null);
  const token = localStorage.getItem('Authorize');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const decodedToken = await axios.get(`http://localhost:4000/api/v1/decode-token/${token}`);
        const userId = decodedToken.data.data.userId;
        const response = await axios.get(`http://localhost:4000/api/v1/users/${userId}`);
        setUser(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  const data = [
    { label: "Beranda", url: "/homepage" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Notifikasi", url: "/notifikasi" },
    { label: "Kegiatanku", url: "/status-register" },
  ];

  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <FormDaftarStyled>
        <div className="form p-5" style={{ background: "#DCE8FF" }}>
          <form
            className="form bg-white p-5 mt-5"
            style={{ borderRadius: "10px" }}
          >
            <div className="img text-center">
              <img
                src={img_form}
                alt=""
                className="img-fluid"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="text-center mb-5">
              <h1 className="text-primary fw-bold">Formulir Pendaftaran</h1>
              <h5>Praktik Kerja Lapangan </h5>
            </div>
            {step === 1 && (
              <>
                {/* <input type="text" name="user_id" id="user_id" value={userId} /> */}
                <div className="row mb-3">
                  <label
                    htmlFor="inputname"
                    className="col-sm-2 col-form-label"
                  >
                    Nama
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="name"
                      className="form-control"
                      id="inputname"
                      // value={namaUser}
                      disabled
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputnisn"
                    className="col-sm-2 col-form-label"
                  >
                    NISN
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="number"
                      className="form-control"
                      id="inputname"
                      // value={NISN}
                      disabled
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="inputemail"
                    className="col-sm-2 col-form-label"
                  >
                    Alamat Email
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="email"
                      className="form-control"
                      id="inputemail"
                      // value={email}
                      disabled
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="inputjeniskelamin"
                    className="col-sm-2 col-form-label"
                  >
                    Jenis Kelamin
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="name"
                      className="form-control"
                      id="inputname"
                      // value={JK}
                      disabled
                    />
                  </div>
                </div>

                <div className="row  mb-3">
                  <label
                    htmlFor="inputjurusan"
                    className="col-sm-2 col-form-label"
                  >
                    Jurusan
                  </label>
                  <div className="col-md-5">
                    <select
                      id="inputJurusan"
                      className="form-select"
                      aria-describedby="nisnHelpInline"
                    >
                      <option selected disabled>
                        Pilih Jurusan
                      </option>
                      {jurusan.map((item) => (
                        <option value={item.id}>{item.nama_jurusan}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="inputalamat"
                    className="col-sm-2 col-form-label"
                  >
                    Alamat
                  </label>
                  <div className="col-sm-5">
                    <textarea
                      type="text"
                      id="inputalamat"
                      className="form-control"
                      aria-describedby="nisnHelpInline"
                      // value={alamat}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="inputnohp"
                    className="col-sm-2 col-form-label"
                  >
                    Nomor Telephone
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="number"
                      className="form-control"
                      id="inputnohp"
                    />
                  </div>
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Formulir ini Benar dan Selesai
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNext}
                >
                  Selanjutnya
                </button>
              </>
            )}

            {step === 2 && <>step 2</>}
          </form>
        </div>
      </FormDaftarStyled>
    </>
  );
};

export default FormDaftar1;
