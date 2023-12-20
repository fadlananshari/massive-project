import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from '../../../Components/Navbar/Navbar';
import img_form from '../../../assets/img_form.jpeg';
import FormDaftarStyled from './FormDaftar.styled';
import axios from 'axios';

const FormDaftar1 = () => {
  const [user, setUser] = useState([]);
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

  const registerHandler = async () => {
    try {
      const { pkl_id } = useParams();
      const user_id = user && user[0].id;
      const no_handphone = document.getElementById('inputnohp');
      const status_id = 1;
      const tgl_daftar = new Date();
      const updatedAt = new Date();
      const createdAt = new Date();


      const response = await axios.post(
        `http://localhost:4000/api/v1/pkl`,
        {
          tgl_daftar,
          no_handphone,
          status_id,
          pkl_id,
          user_id,
          createdAt,
          updatedAt	

        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        console.log('Pendaftaran data posted successfully!');
      } else {
        console.error('Failed to post pendaftaran pkl data');
      }
    } catch (error) {
      console.error('Error post data:', error);

    }
  };

  const data = [
    { label: 'Beranda', url: '/homepage' },
    { label: 'Program', url: '/pilih-jurusan' },
    { label: 'Notifikasi', url: '/notifikasi' },
    { label: 'Kegiatanku', url: '/status-register' },
  ];

  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <FormDaftarStyled>
        <div className="form p-5" style={{ background: '#DCE8FF' }}>
          <form className="form bg-white p-5 mt-5" style={{ borderRadius: '10px' }}>
            <div className="img text-center">
              <img src={img_form} alt="" className="img-fluid" style={{ borderRadius: '10px' }} />
            </div>
            <div className="text-center mb-5">
              <h1 className="text-primary fw-bold">Formulir Pendaftaran</h1>
              <h5>Praktik Kerja Lapangan</h5>
            </div>
            {user.map((data, index) => (
              <>
                <div key={index} className="row mb-3">
                  <label htmlFor="inputname" className="col-sm-2 col-form-label">
                    Nama
                  </label>
                  <div className="col-sm-5">
                    <input type="name" className="form-control" id="inputname" value={data.nama} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="inputnisn" className="col-sm-2 col-form-label">
                    NISN
                  </label>
                  <div className="col-sm-5">
                    <input type="number" className="form-control" id="inputname" value={data.nisn} />
                  </div>
                </div>
                <div className="row  mb-3">
                  <label htmlFor="inputjurusan" className="col-sm-2 col-form-label">
                    Jurusan
                  </label>
                  <div className="col-md-5">
                    <select id="inputJurusan" className="form-select" aria-describedby="nisnHelpInline">
                      <option selected disabled>
                        Pilih Jurusan
                      </option>
                      <option value="Teknik Sepeda Mesin Motor">Teknik Sepeda Mesin Motor</option>
                      <option value="Teknik Komputer & Jaringan">Teknik Komputer & Jaringan</option>
                      <option value="Perhotelan">Perhotelan</option>
                      <option value="Akuntansi">Akuntansi</option>
                      <option value="Farmasi">Farmasi</option>
                      <option value="Perkantoran">Perkantoran</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputjeniskelamin" className="col-sm-2 col-form-label">
                    Jenis Kelamin
                  </label>
                  <div className="col-sm-5">
                    <input type="name" className="form-control" id="inputname" value={data.jenis_kelamin} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputalamat" className="col-sm-2 col-form-label">
                    Alamat
                  </label>
                  <div className="col-sm-5">
                    <textarea type="text" id="inputalamat" className="form-control" aria-describedby="nisnHelpInline" value={data.alamat} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputemail" className="col-sm-2 col-form-label">
                    Alamat Email
                  </label>
                  <div className="col-sm-5">
                    <input type="email" className="form-control" id="inputemail" value={data.email} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputnohp" className="col-sm-2 col-form-label">
                    Nomor Telephone
                  </label>
                  <div className="col-sm-5">
                    <input type="number" className="form-control" id="inputnohp" />
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input type="radio" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Formulir ini Benar dan Selesai
                  </label>
                </div>
              </>
            ))}
              <button type="submit" className="btn btn-primary" onClick={registerHandler}>
                Selanjutnya
              </button>
          </form>
        </div>
      </FormDaftarStyled>
    </>
  );
};

export default FormDaftar1;
