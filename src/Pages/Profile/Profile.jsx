import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Profil from '../../assets/profil.png';
import ProfileStyled from './Profile.styled';
import Modal from '../../Components/Modals/Modal';

const Profile = () => {
  const data = [
    { label: 'Beranda', url: '/homepage' },
    { label: 'Program', url: '/pilih-jurusan' },
    { label: 'Notifikasi', url: '/notifikasi' },
    { label: 'Kegiatanku', url: '/kegiatanku' },
  ];
  return (
    <ProfileStyled>
      <div style={{ backgroundColor: '#DCE8FF' }} className="pt-3">
        <Navbar data={data} login={false} profile={true} />

        <div className=" pt-5">
          <div className="row m-0">
            <div className="col-3 d-none d-lg-block bg-white pt-5">
              <div className="bg-primary rounded mx-auto px-5 py-2" style={{ width: 'max-content' }}>
                <p className="m-0 mx-4 text-white">Akun saya</p>
              </div>
            </div>
            <div className="col pt-5">
              <div className="container pe-0 pe-1 pe-md-3 pe-lg-5">
                <div className="mb-5">
                  <h2 className="fw-bold">Akun Saya</h2>
                  <div className="d-flex gap-3 border-bottom border-secondary py-4">
                    <img src={Profil} alt="" className="" />
                    <div className="width-100percent d-md-flex justify-content-between my-auto my-md-0">
                      <div className="my-auto pb-3 pb-md-0">
                        <h5>Unggah Foto Profil Anda</h5>
                        <p className="m-0">Unggah foto profile anda agar mudah dikenali</p>
                      </div>
                      <button className="btn btn-primary my-auto ms-auto" style={{ height: 'max-content' }}>
                        Unggah Foto
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between py-4 border-bottom border-secondary">
                      <div>
                        <h5>Nama lengkap</h5>
                        <p className="m-0">Nanik Hidayati</p>
                      </div>
                      <button className="btn btn-primary my-auto" style={{ height: '100%' }}>
                        Edit
                      </button>
                    </div>
                    <div className="d-flex justify-content-between py-4 border-bottom border-secondary">
                      <div>
                        <h5>Alamat Email</h5>
                        <p className="m-0">nanik123@gmail.com</p>
                      </div>
                      <button className="btn btn-primary my-auto" style={{ height: '100%' }}>
                        Edit
                      </button>
                    </div>
                    <div className="d-flex justify-content-between py-4 border-bottom border-secondary">
                      <div>
                        <h5>Password</h5>
                        <p className="m-0">**********</p>
                      </div>
                      <button className="btn btn-primary my-auto" style={{ height: '100%' }}>
                        Ubah Kata Sandi
                      </button>
                    </div>
                    <div className="d-flex justify-content-between py-4 border-bottom border-secondary">
                      <div>
                        <h5>Alamat</h5>
                        <p className="m-0">Bangkalan, Jawa Timur</p>
                      </div>
                      <button className="btn btn-primary my-auto" style={{ height: '100%' }}>
                        Ubah Alamat
                      </button>
                    </div>
                  </div>
                  <div className="m-0 mt-5 d-flex justify-content-center">
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Keluar
                    </button>
                  </div>
                  <Modal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileStyled>
  );
};

export default Profile;
