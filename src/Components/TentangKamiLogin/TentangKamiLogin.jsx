import TentangKamiStyled from "../TentangKami/TentangKami.styled";
import ImgTentangKami from "../../assets/homepage/tentang-kami.png";

const TentangKamiLogin = () => {
  return (
    <TentangKamiStyled>
      <section id="tentang-kami" className="tentang-kami-lgn">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-lg-6">
              <img
                src={ImgTentangKami}
                className="d-block mx-lg-auto img-fluid"
                alt="Image Tentang Kami"
                loading="lazy"
              />
            </div>
            <div className="col-12 col-lg-6">
              <h1 className="text-title fw-bold text-end">Tentang Kami</h1>
              <h3 className="text-desc my-4 text-end">
                Praktik Kerja Lapangan
              </h3>
              <p className="text-p">
                Praktik Kerja Lapangan (PKL) adalah pembelajaran bagi peserta
                didik Sekolah Menengah Kejuruan (SMK)/Madrasah Aliyah Kejuruan
                (MAK) yang dilaksanakan melalui praktik kerja di dunia kerja
                dalam jangka waktu tertentu
              </p>
              <p className="text-p">
                PKL merupakan salah satu mata pelajaran sebagai wahana
                pembelajaran di dunia kerja (termasuk teaching factory). Pada
                Kurikulum Merdeka, PKL menjadi mata pelajaran yang harus diikuti
                oleh seluruh peserta didik SMK dengan ketentuan
                sekurang-kurangnya 6 bulan
              </p>
              <div className="text-p">
                Mata pelajaran PKL dilaksanakan di satuan pendidikan dan dunia
                kerja. Sesuai dengan ketentuan Kepmendikbudristek tersebut,
                SMK/MAK bersama dengan mitra dunia kerja berkewajiban untuk
                membuat perencanaan pembelajaran yang meliputi: Tujuan
                Pembelajaran (TP), Alur Tujuan Pembelajaran (ATP), dan
                Perencanaan Pembelajaran sesuai dengan Capaian Pembelajaran (CP)
                pada Keputusan Kepala Badan Standar, Kurikulum, dan Asesmen
                Pendidikan
              </div>
            </div>
          </div>
        </div>
      </section>
    </TentangKamiStyled>
  );
};

export default TentangKamiLogin;
