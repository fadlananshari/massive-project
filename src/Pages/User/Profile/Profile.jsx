import React, { useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Profil from '../../../assets/profil.png';
import ProfileStyled from './Profile.styled';
import PopUpLogout from '../../../Components/Popup/PopUpLogout';
import axios from 'axios';


const Profile = () => {
  const [user, setUser] = useState();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const token = localStorage.getItem('Authorize');
  const fetchUserData = async () => {
    try {
      const idUser = await axios.get(`http://localhost:4000/api/v1/decode-token/${token}`);
      const userById = await axios.get(`http://localhost:4000/api/v1/users/${idUser.data.data.userId}`);
      setUser(userById.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const saveHandler = async () => {
    try {
      const userId = user && user[0].id;
      const nisn = user[0].nisn
      const nama = document.getElementById('nama').value;
      const email = document.getElementById('email').value;
      const alamat = document.getElementById('alamat').value;
      const jenis_kelamin = user[0].jenis_kelamin
      const password = user[0].password
      const updatedAt = new Date()
  
      setUser((prevUser) => {
        const updatedUser = [...prevUser];
        updatedUser[0].nama = nama;
        updatedUser[0].email = email;
        updatedUser[0].alamat = alamat;
        return updatedUser;
      });
  
      const response = await axios.patch(`http://localhost:4000/api/v1/users/${userId}`, {
        nisn,
        nama,
        email,
        password,
        jenis_kelamin,
        alamat,
        updatedAt
      }, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });
  
      if (response.status === 200) {
        console.log('User data updated successfully!');
      } else {
        console.error('Failed to update user data');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
    toggleEditMode();
  };
  
  

  const data = [
    { label: 'Beranda', url: '/homepage' },
    { label: 'Program', url: '/pilih-jurusan' },
    { label: 'Notifikasi', url: '/notifikasi' },
    { label: 'Kegiatanku', url: '/status-register' },
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
                        {isEditMode ? <input id="nama" type="text" className="form-control" defaultValue={user && user[0].nama} /> : <p className="m-0">{user && user[0].nama}</p>}
                      </div>
                    </div>
                    <div className="d-flex justify-content-between py-4 border-bottom border-secondary">
                      <div>
                        <h5>Email</h5>
                        {isEditMode ? <input id="email" type="text" className="form-control" defaultValue={user && user[0].email} /> : <p className="m-0">{user && user[0].email}</p>}
                      </div>
                    </div>
                    <div className="d-flex justify-content-between py-4 border-bottom border-secondary">
                      <div>
                        <h5>Password</h5>
                        {isEditMode ? (
                          <input id="password" type={isPasswordVisible ? 'text' : 'password'} className="form-control" defaultValue={user && user[0].password} />
                        ) : (
                          <p className={`m-0 ${isPasswordVisible ? 'password' : ''}`} type="password">
                            {isPasswordVisible ? user && user[0].password : '**********'}
                          </p>
                        )}
                      </div>
                      <button className="btn btn-primary mt-auto" onClick={togglePasswordVisibility} style={{ cursor: 'pointer', height: 'max-content' }}>
                        {isPasswordVisible ? 'Sembunyikan' : 'Tampilkan'}
                      </button>
                    </div>
                    <div className="d-flex justify-content-between py-4 border-bottom border-secondary">
                      <div>
                        <h5>Alamat</h5>
                        {isEditMode ? <input id="alamat" type="text" className="form-control" defaultValue={user && user[0].alamat} /> : <p className="m-0">{user && user[0].alamat}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="m-0 mt-5 d-flex justify-content-center gap-4">
                    <button className="btn btn-primary my-auto" style={{ height: '100%' }} onClick={isEditMode ? saveHandler : toggleEditMode}>
                      {isEditMode ? 'Simpan' : 'Edit'}
                    </button>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#logoutConfirm">
                      Keluar
                    </button>
                  </div>

                  <PopUpLogout id="logoutConfirm" desc="Anda ingin keluar akun?" btn1={{ cName: 'btn-primary', url: '#', text: 'Batal' }} btn2={{ cName: 'btn-danger', text: 'Keluar' }} />
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
