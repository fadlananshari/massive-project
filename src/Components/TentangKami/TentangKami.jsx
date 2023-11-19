import TentangKamiStyled from "./TentangKami.styled";
import ImgTentangKami from "../../assets/tentang-kami.png";

const TentangKami = () => {
  return (
    <TentangKamiStyled>
      <section id="tentang-kami" className="tentang-kami">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1 className="text-title fw-bold">Tentang Kami</h1>
              <h3 className="text-desc my-4">SMKN 3 Bangkalan</h3>
              <p className="text-p">
                SMK adalah Sekolah Menengah Kejuruan yang berdasarkan
                Undang-undang merupakan Lembaga Pendidikan untuk mempersiapkan
                Lulusannya masuk ke Dunia Kerja.
              </p>
              <p className="text-p">
                Keberhasilan Pendidikan SMK adalah Setiap Peserta Didiknya
                setelah Lulus itu bekerja, lebih baik lagi bekerja sesuai dengan
                bidangnya dan sangat diharapkan bekerja sesuai dengan bidangnya
                dan mempu mengembangkan bidangnya tersebut.
              </p>
              <div className="text-p">
                Untuk mencapai tujuan tersebut maka Sistim Pendidikan di SMK
                menerapkan Proses Pengembangan Ilmu Pengetahuan dan Teknologi,
                Pengembangan Keterampilan Kerja dan Pengembangan Sikap
                Kerja(Kepribadian/Atitude,Penampilan/Performance, Karakter)
              </div>
              <div className="text-p">
                Alamat : Jl. Mertajasah No.70, Blandungan, Mertajasah, Kec.
                Bangkalan, Kabupaten Bangkalan, Jawa Timur
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img
                src={ImgTentangKami}
                className="d-block mx-lg-auto img-fluid"
                alt="Image Tentang Kami"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </TentangKamiStyled>
  );
};

export default TentangKami;
