import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import PilihJurusan from './Pages/PilihJurusan/PilihJurusan';
import Homepage from './Pages/Homepage';
import Profile from './Pages/Profile/Profile';
import CariPerusahaan from './Pages/CariPerusahaan/CariPerusahaan';
import FormDaftar1 from './Pages/FormDaftar/FormDaftar1';
import FormDaftar2 from './Pages/FormDaftar/FormDaftar2';
import DetailPerusahaan from './Pages/DetailPerusahaan/DetailPerusahaan';
import Notifikasi from './Pages/Notifikasi';
import StatusPendaftaran from './Pages/StatusPendaftaran';
import SignUp from './Pages/SignUp/SignUp';
import Statusregister from './Pages/status_register';
import Laporan from './Pages/Laporan/Laporan';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/pilih-jurusan" element={<PilihJurusan />} />
        <Route path="/cari-perusahaan/:id" element={<CariPerusahaan />} />
        <Route path="/detail-perusahaan/:id" element={<DetailPerusahaan />} />
        <Route path="/pendaftaran/1" element={<FormDaftar1 />} />
        <Route path="/pendaftaran/2" element={<FormDaftar2 />} />
        <Route path="/status-register" element={<Statusregister />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail-status-pendaftaran/:id" element={<StatusPendaftaran />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
