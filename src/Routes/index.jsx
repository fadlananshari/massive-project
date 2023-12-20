import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Footer from '../Components/Footer/Footer';
import Home from '../Pages/User/Home';
import Login from '../Pages/User/Login/Login';
import PilihJurusan from '../Pages/User/PilihJurusan/PilihJurusan';
import Homepage from '../Pages/User/Homepage';
import Profile from '../Pages/User/Profile/Profile';
import CariPerusahaan from '../Pages/User/CariPerusahaan/CariPerusahaan';
import FormDaftar1 from '../Pages/User/FormDaftar/FormDaftar1';
import FormDaftar2 from '../Pages/User/FormDaftar/FormDaftar2';
import DetailPerusahaan from '../Pages/User/DetailPerusahaan/DetailPerusahaan';
import Notifikasi from '../Pages/User/Notifikasi';
import StatusPendaftaran from '../Pages/User/StatusPendaftaran';
import SignUp from '../Pages/User/SignUp/SignUp';
import Statusregister from '../Pages/User/status_register';
import Laporan from '../Pages/User/Laporan/Laporan';
import PublicRoutes from './PublicRoutes';
import AuthRoutes from './AuthRoutes';
import DetailLaporan from '../Pages/User/Laporan/DetailLaporan';
import NotFound from '../Pages/NotFound';

// admin
import CariPerusahaanadmin from '../Pages/Admin/CariPerusahaanadmin/CariPerusahaanadmin';
import Kegiatansiswa from '../Pages/Admin/Kegiatansiswa/Kegiatansiswa';
import Addperusahaan from '../Pages/Admin/TambahPerusahaan/TambahPerusahaan';
import LoginAdmin from '../Pages/Admin/LoginAdmin';

import NavbarAdmin from '../Admin/dashboard/navbar';
import Dashboard from '../Admin/dashboard/Dashboard/dashboard';
import Dashboardsiswa from '../Admin/dashboard/Siswa/dashboard-siswa';
import Dashboardperusahaan from '../Admin/dashboard/Perusahaan/dashboard-perusahaan';
import Sidebar from '../Admin/dashboard/sidebar';
import Dashboardtambah from '../Admin/dashboard/Siswa/Tambah-Siswa/tambahsiswa';
import Dashboardlihat from '../Admin/dashboard/Siswa/Lihat-Siswa/lihat-akun';
import Dashboardedit from '../Admin/dashboard/Siswa/Edit-Akun/edit-akun';
import Dashboardpembimbing from '../Admin/dashboard/Siswa/Pembimbing/pembimbing';
import Dashboardtambahpembimbing from '../Admin/dashboard/Siswa/Pembimbing/Tambah-Pembimbing/tambah-pembimbing';
import Dashboardeditpembimbing from '../Admin/dashboard/Siswa/Pembimbing/Edit-Pembimbing/edit-pembimbing';
import Dashboardlihatpembimbing from '../Admin/dashboard/Siswa/Pembimbing/Lihat-Pembimbing/lihat-akun';
import Dashboardlihatsiswa from '../Admin/dashboard/Siswa/Lihat-Siswa/lihat-akun';
import Dashboardlihatlapmingguan from '../Admin/dashboard/Siswa/Lihat-Siswa/Laporan-Mingguan/lap-mingguan';
import DashboardDetaillapmingguan from '../Admin/dashboard/Siswa/Lihat-Siswa/Laporan-Mingguan/Detail-Lapmingguan/dashboard-detaillapmingguan';
import Dashboardlapakhir from '../Admin/dashboard/Siswa/Lihat-Siswa/Laporan-Akhir/dashboard-lap';
import Dashboardpendaftar from '../Admin/dashboard/Siswa/Pendaftar/dashboard-pendaftar';
import Dashboarddocument from '../Admin/dashboard/Siswa/Pendaftar/Detail-Pendaftar/dashboard-detpendaftar';
import Dashboardtambahperusahaan from '../Admin/dashboard/Perusahaan/Tambah-Perusahaan/dashboard-addperusahaan/dashboard-addperusahaan';
import Dashboardeditperusahaan from '../Admin/dashboard/Perusahaan/Edit-Perusahaan/dashboard-addperusahaan/dashboard-editperusahaan';

const Routing = () => {
  // const adminToken = localStorage.getItem('AdminAuthorize');
  // const isAdminLoggin = adminToken === null ? false : true;

  const token = localStorage.getItem('Authorize');
  const isLoggin = token === null ? false : true;

  const [showFooter, setShowFooter] = useState(true);

  const [userId, setUserId] = useState(null);

  const fetchUserData = async () => {
    try {
      const idUserPromise = axios.get(`http://localhost:4000/api/v1/decode-token/${token}`);
      const idUserResponse = await idUserPromise;

      // console.log('id user response:', idUserResponse.data);
      setUserId(idUserResponse.data.data.userId);

      // Setelah setUserId, Anda dapat menggunakan userId di sini jika diperlukan
      // console.log('User ID:', idUserResponse.data.data.userId);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="" element={<PublicRoutes isLoggin={isLoggin} setShowFooter={setShowFooter} />}>
          <Route path="" element={<Home />} />
          <Route path="/login-admin" element={<LoginAdmin setShowFooter={() => setShowFooter(false)} />} />
          <Route path="/login" element={<Login setShowFooter={() => setShowFooter(false)} />} />
          <Route path="/register" element={<SignUp setShowFooter={() => setShowFooter(false)} />} />
        </Route>

        {/* private routes */}
        <Route path="" element={<AuthRoutes isLoggin={isLoggin} setShowFooter={setShowFooter} />}>
          <Route path="admin" element={<CariPerusahaanadmin />} />
          <Route path="tambah-perusahaan" element={<Addperusahaan />} />
          <Route path="Kegiatan-siswa-admin" element={<Kegiatansiswa />} />

          <Route path="homepage" element={<Homepage />} />
          <Route path="pilih-jurusan" element={<PilihJurusan />} />
          <Route path="cari-perusahaan/:id" element={<CariPerusahaan />} />
          <Route path="detail-perusahaan/:id" element={<DetailPerusahaan />} />
          <Route path="pendaftaran/:pkl_id" element={<FormDaftar1 id_user={userId} />} />
          {/* <Route path="pendaftaran/:id" element={<FormDaftar2 />} /> */}
          <Route path="status-register" element={<Statusregister />} />
          <Route path="detail-laporan" element={<DetailLaporan />} />
          <Route path="laporan" element={<Laporan id={userId} />} />
          <Route path="profile" element={<Profile />} />
          <Route path="detail-status-pendaftaran/:id" element={<StatusPendaftaran />} />
          <Route path="notifikasi" element={<Notifikasi />} />



          {/* Bang Rohimin */}
          {/* <Route path="/navbar" element={<NavbarAdmin setShowFooter={() => setShowFooter(false)}/>} /> */}
          {/* <Route path="/sidebar" element={<Sidebar setShowFooter={() => setShowFooter(false)}/>} /> */}
          <Route path="/dashboard" element={<Dashboard setShowFooter={() => setShowFooter(false)}/>} />
          <Route path="/data-siswa" element={<Dashboardsiswa setShowFooter={() => setShowFooter(false)}/>} />
          <Route path="/perusahaan" element={<Dashboardperusahaan setShowFooter={() => setShowFooter(false)}/>} />
          <Route path="/edit-akun/:id" element={<Dashboardedit setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/tambah-siswa" element={<Dashboardtambah setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/lihat-siswa" element={<Dashboardlihatsiswa setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/pembimbing" element={<Dashboardpembimbing setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/tambah-pembimbing" element={<Dashboardtambahpembimbing setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/edit-pembimbing" element={<Dashboardeditpembimbing setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/lihat-pembimbing" element={<Dashboardlihatpembimbing setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/lapmingguan" element={<Dashboardlihatlapmingguan setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/detaillaporan" element={<DashboardDetaillapmingguan setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/lapakhir" element={<Dashboardlapakhir setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/pendaftar" element={<Dashboardpendaftar setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/documentpendaftar" element={<Dashboarddocument setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/tambahperusahaan" element={<Dashboardtambahperusahaan setShowFooter={() => setShowFooter(false)}/>}></Route>
          <Route path="/editperusahaan" element={<Dashboardeditperusahaan setShowFooter={() => setShowFooter(false)}/>}></Route>
        </Route>

        <Route path="*" element={<NotFound setShowFooter={() => setShowFooter(false)} />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

export default Routing;
