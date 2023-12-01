import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import img_form from '../../assets/img_form.jpeg';
import FormDaftarStyled from './FormDaftar.styled';

const FormDaftar2 = () => {
  const data = [
    { label: 'Beranda', url: '/homepage' },
    { label: 'Program', url: '/pilih-jurusan' },
    { label: 'Notifikasi', url: '/notifikasi' },
    { label: 'Kegiatanku', url: '/kegiatanku' },
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
            <img src="" alt="" />
            <div className="text-center mb-5">
              <h1 className="text-primary fw-bold">Unggah Document</h1>
              <h5>Praktik Kerja Lapangan</h5>
            </div>

            <div class="mb-5">
              <div>
                <h4>Foto Copy Rapor</h4>
                <label htmlFor="formFile" className="form-label">
                  Unggah foto copy rapor semester 1 - 4 (dalam bentuk PDF ukuran maksimal 2 MB){' '}
                </label>
              </div>
              <div>
                <label htmlFor="formFile" className="form-label">
                  Penamaan: nama_rapor.pdf
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
            </div>
            <div class="mb-5">
              <div>
                <h4>Surat izin Orang Tua</h4>
                <label for="formFile" class="form-label">
                  Unggah surat izin orang tua (dalam bentuk PDF ukuran maksimal 2 MB)
                </label>
              </div>
              <div>
                <label>penamaan: nama_izinortu.pdf</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
            </div>
            <div class="mb-5">
              <div>
                <h4>KTP ( KTS jika belum memiliki KTP)</h4>
                <label for="formFile" class="form-label">
                  Unggah KTP / KTS (dalam bentuk PDF ukuran maksimal 2 MB)
                </label>
              </div>
              <div>
                <label>penamaan: nama_KTP.pdf </label>
                <input class="form-control" type="file" id="formFile" />
              </div>
            </div>
            <div class="mb-5">
              <div>
                <h4>Surat pernyataan melanggar aturan PKL</h4>
                <label for="formFile" class="form-label">
                  Unggah surat pernyataan (dalam bentuk PDF ukuran maksimal 2 MB)
                </label>
              </div>
              <div>
                <label>penamaan: nama_suratpernyataan.pdf</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
            </div>
            <div class="mb-3">
              <div>
                <h4>BPJS ketenaga kerjaan (optional)</h4>
                <label for="formFile" class="form-label">
                  Unggah surat pernyataan (dalam bentuk PDF ukuran maksimal 2 MB)
                </label>
              </div>
              <div>
                <label>penamaan: nama_suratpernyataan.pdf</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
            </div>

            <div className="mb-3 form-check">
              <input type="radio" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">
                Formulir ini Benar dan Selesai
              </label>
            </div>
            <div className="row float-end">
              <div className="col">
                <Link to="/pendaftaran/1">
                  <button type="sebelumnya" className="btn btn-outline-primary float-end">
                    Sebelumnya
                  </button>
                </Link>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-primary float-start">
                  Daftar
                </button>
              </div>
            </div>
          </form>
        </div>
      </FormDaftarStyled>
    </>
  );
};

export default FormDaftar2;
