import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import NotFound from '../Pages/NotFound';

const Routing = () => {
  const token = localStorage.getItem('Authorize');
  const isLoggin = token === null ? false : true;

  const [showFooter, setShowFooter] = useState(true);

  return (
    <>
    <Routes>
        {/* public routes */}
        <Route
          path=""
          element={<PublicRoutes isLoggin={isLoggin} setShowFooter={setShowFooter} />}
        >
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login setShowFooter={() => setShowFooter(false)}/>} />
          <Route path="/register" element={<SignUp setShowFooter={() => setShowFooter(false)}/>} />
        </Route>

        {/* private routes */}
        <Route
          path=""
          element={<AuthRoutes isLoggin={isLoggin} setShowFooter={setShowFooter} />}
        >
          <Route path="homepage" element={<Homepage />} />
          <Route path="pilih-jurusan" element={<PilihJurusan />} />
          <Route path="cari-perusahaan/:id" element={<CariPerusahaan />} />
          <Route path="detail-perusahaan/:id" element={<DetailPerusahaan />} />
          <Route path="pendaftaran/1" element={<FormDaftar1 />} />
          <Route path="pendaftaran/2" element={<FormDaftar2 />} />
          <Route path="status-register" element={<Statusregister />} />
          <Route path="laporan" element={<Laporan />} />
          <Route path="profile" element={<Profile />} />
          <Route path="detail-status-pendaftaran/:id" element={<StatusPendaftaran />} />
          <Route path="notifikasi" element={<Notifikasi />} />
        </Route>

        <Route path="*" element={<NotFound setShowFooter={() => setShowFooter(false)} />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

export default Routing;
