import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import PilihJurusan from "./Pages/PilihJurusan/PilihJurusan";
import Homepage from "./Pages/Homepage";
import CariPerusahaan from "./Pages/CariPerusahaan/CariPerusahaan";
import FormDaftar1 from "./Pages/FormDaftar/FormDaftar1";
import FormDaftar2 from "./Pages/FormDaftar/FormDaftar2";
import DetailPerusahaan from "./Pages/DetailPerusahaan/DetailPerusahaan";
import FormRegist1 from "./Pages/formregister1";
import FormRegist2 from "./Pages/formregister2";
import Statusregister from "./Pages/status_register";
import Laporan from "./Pages/Laporan/Laporan";
import CariPerusahaanadmin from "./Pages/CariPerusahaanadmin/CariPerusahaanadmin";
import Addperusahaan from "./Pages/TambahPerusahaan/TambahPerusahaan";
import Kegiatansiswa from "./Pages/Kegiatansiswa/Kegiatansiswa";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/pilih-jurusan" element={<PilihJurusan />} />
        <Route path="/cari-perusahaan/:id" element={<CariPerusahaan />} />
        <Route path="/cari-perusahaan-admin/:id" element={<CariPerusahaanadmin />}></Route>
        <Route path="/detail-perusahaan/:id" element={<DetailPerusahaan />} />
        <Route path="/pendaftaran/1" element={<FormDaftar1 />} />
        <Route path="/pendaftaran/2" element={<FormDaftar2 />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/" element={<FormRegist1 />}></Route>
        <Route path="/" element={<FormRegist2 />}></Route>
        <Route path="/status-register" element={<Statusregister />}></Route>
        <Route path="/tambah-perusahaan" element={<Addperusahaan />}></Route>
        <Route path="/Kegiatan-siswa-admin" element={<Kegiatansiswa />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
