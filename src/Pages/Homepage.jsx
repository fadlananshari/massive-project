import Navbar from "../Components/Navbar/Navbar";
import HeroLogin from "../Components/HeroLogin/HeroLogin";
import TentangKamiLogin from "../Components/TentangKamiLogin/TentangKamiLogin";
import TujuanPraktik from "../Components/TujuanPraktik/TujuanPraktik";
import SyaratPendaftaran from "../Components/SyaratPendaftaran/SyaratPendaftaran";
import TempatPkl from "../Components/TempatPkl/TempatPkl";
import Contact from "../Components/Contact/Contact";

const Homepage = () => {
  const data = [
    { label: "Beranda", url: "homepage" },
    { label: "Tentang Kami", url: "/#tentang-kami" },
    { label: "Program", url: "/pilih-jurusan" },
    { label: "Kontak", url: "/#kontak" },
    { label: "Notifikasi", url: "/#notifikasi" },
    { label: "Kegiatanku", url: "/#kegiatanku" },
  ];

  return (
    <>
      <Navbar data={data} login={false} profile={true} />
      <HeroLogin />
      <TentangKamiLogin />
      <TujuanPraktik />
      <SyaratPendaftaran />
      <TempatPkl />
      <Contact />
    </>
  );
};

export default Homepage;
