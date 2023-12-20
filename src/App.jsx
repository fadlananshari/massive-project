import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Admin/dashboard/navbar";
import Dashboard from "./Admin/dashboard/Dashboard/dashboard";
import Dashboardsiswa from "./Admin/dashboard/Siswa/dashboard-siswa";
import Dashboardperusahaan from "./Admin/dashboard/Perusahaan/dashboard-perusahaan";
import Sidebar from "./Admin/dashboard/sidebar";
import Dashboardtambah from "./Admin/dashboard/Siswa/Tambah-Siswa/tambahsiswa";
import Dashboardlihat from "./Admin/dashboard/Siswa/Lihat-Siswa/lihat-akun";
import Dashboardedit from "./Admin/dashboard/Siswa/Edit-Akun/edit-akun";
import Dashboardpembimbing from "./Admin/dashboard/Siswa/Pembimbing/pembimbing";
import Dashboardtambahpembimbing from "./Admin/dashboard/Siswa/Pembimbing/Tambah-Pembimbing/tambah-pembimbing";
import Dashboardeditpembimbing from "./Admin/dashboard/Siswa/Pembimbing/Edit-Pembimbing/edit-pembimbing";
import Dashboardlihatpembimbing from "./Admin/dashboard/Siswa/Pembimbing/Lihat-Pembimbing/lihat-akun";
import Dashboardlihatsiswa from "./Admin/dashboard/Siswa/Lihat-Siswa/lihat-akun";

import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import PilihJurusan from "./Pages/PilihJurusan/PilihJurusan";
import Homepage from "./Pages/Homepage";
import Profile from "./Pages/Profile/Profile";
import CariPerusahaan from "./Pages/CariPerusahaan/CariPerusahaan";
import FormDaftar1 from "./Pages/FormDaftar/FormDaftar1";
import FormDaftar2 from "./Pages/FormDaftar/FormDaftar2";
import DetailPerusahaan from "./Pages/DetailPerusahaan/DetailPerusahaan";
import Notifikasi from "./Pages/Notifikasi";
import StatusPendaftaran from "./Pages/StatusPendaftaran";
import SignUp from "./Pages/SignUp/SignUp";
import Statusregister from "./Pages/status_register";
import Laporan from "./Pages/Laporan/Laporan";
import CariPerusahaanadmin from "./Pages/CariPerusahaanadmin/CariPerusahaanadmin";
import Addperusahaan from "./Pages/TambahPerusahaan/TambahPerusahaan";
import Kegiatansiswa from "./Pages/Kegiatansiswa/Kegiatansiswa";
import DetailLaporan from "./Pages/Laporan/DetailLaporan";
import SyaratPendaftaran from "./Components/SyaratPendaftaran/SyaratPendaftaran";
import Dashboardlihatlapmingguan from "./Admin/dashboard/Siswa/Lihat-Siswa/Laporan-Mingguan/lap-mingguan";
import DashboardDetaillapmingguan from "./Admin/dashboard/Siswa/Lihat-Siswa/Laporan-Mingguan/Detail-Lapmingguan/dashboard-detaillapmingguan";
import Dashboardlapakhir from "./Admin/dashboard/Siswa/Lihat-Siswa/Laporan-Akhir/dashboard-lap";
import Dashboardpendaftar from "./Admin/dashboard/Siswa/Pendaftar/dashboard-pendaftar";
import Dashboarddocument from "./Admin/dashboard/Siswa/Pendaftar/Detail-Pendaftar/dashboard-detpendaftar";
import Dashboardtambahperusahaan from "./Admin/dashboard/Perusahaan/Tambah-Perusahaan/dashboard-addperusahaan/dashboard-addperusahaan";
import Dashboardeditperusahaan from "./Admin/dashboard/Perusahaan/Edit-Perusahaan/dashboard-addperusahaan/dashboard-editperusahaan";

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
        <Route path="/cari-perusahaan-admin/:id" element={<CariPerusahaanadmin />}></Route>
        <Route path="/detail-perusahaan/:id" element={<DetailPerusahaan />} />
        <Route path="/pendaftaran/1" element={<FormDaftar1 />} />
        <Route path="/pendaftaran/2" element={<FormDaftar2 />} />
        <Route path="/status-register" element={<Statusregister />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/status-register" element={<Statusregister />}></Route>
        <Route path="/tambah-perusahaan" element={<Addperusahaan />}></Route>
        <Route path="/Kegiatan-siswa-admin" element={<Kegiatansiswa />}></Route>
        <Route path="/detail-laporan/:id" element={<DetailLaporan />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail-status-pendaftaran/:id" element={<StatusPendaftaran />}/>

        {/* Dashboard Admin */}
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/syarat-pendaftaran" element={<SyaratPendaftaran /> } />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/data-siswa" element={<Dashboardsiswa />} />
        <Route path="/perusahaan" element={<Dashboardperusahaan />} />
        <Route path="/edit-akun/:id" element={<Dashboardedit />}></Route>
        <Route path="/tambah-siswa" element={<Dashboardtambah />}></Route>
        <Route path="/lihat-siswa" element={<Dashboardlihatsiswa />}></Route>
        <Route path="/pembimbing" element={<Dashboardpembimbing />}></Route>
        <Route path="/tambah-pembimbing" element={<Dashboardtambahpembimbing />}></Route>
        <Route path="/edit-pembimbing" element={<Dashboardeditpembimbing />}></Route>
        <Route path="/lihat-pembimbing" element={<Dashboardlihatpembimbing />}></Route>
        <Route path="/lapmingguan" element={<Dashboardlihatlapmingguan />}></Route>
        <Route path="/detaillaporan" element={<DashboardDetaillapmingguan />}></Route>
        <Route path="/lapakhir" element={<Dashboardlapakhir />}></Route>
        <Route path="/pendaftar" element={<Dashboardpendaftar />}></Route>
        <Route path="/documentpendaftar" element={<Dashboarddocument />}></Route>
        <Route path="/tambahperusahaan" element={<Dashboardtambahperusahaan />}></Route>
        <Route path="/editperusahaan" element={<Dashboardeditperusahaan />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
