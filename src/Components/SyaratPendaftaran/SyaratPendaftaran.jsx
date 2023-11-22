import Img1 from "../../assets/syarat-pendaftaran/img-1.png";
import Img2 from "../../assets/syarat-pendaftaran/img-2.png";
import Img3 from "../../assets/syarat-pendaftaran/img-3.png";
import Img4 from "../../assets/syarat-pendaftaran/img-4.png";
import optionImage from "../../assets/syarat-pendaftaran/options.png";
import nilaiImage from "../../assets/syarat-pendaftaran/nilai.png";
import calenderImage from "../../assets/syarat-pendaftaran/calendar.png";
import educationImage from "../../assets/syarat-pendaftaran/education.png";
import SyaratPendaftaranStyled from "./SyaratPendaftaran.styled";
// import "./style.css";

const SyaratPendaftaran = () => {
  return (
    <SyaratPendaftaranStyled>
      <div className="syarat-pkl">
        <div className="frame">
          <div className="rectangle">
            <div className="div">
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="img me-4"
                    alt="Education"
                    src={educationImage}
                  />
                  <h3 className="text-wrapper">Pendidikan Smk Atau Mak</h3>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="img me-4"
                    alt="Calendar"
                    src={calenderImage}
                  />
                  <h3 className="text-wrapper">Semester 4 Atau Kelas 11 Smk</h3>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <img className="img me-4" alt="Nilai" src={nilaiImage} />
                  <h3 className="text-wrapper">
                    Nilai Semester 1 - 4 Harus Tuntas
                  </h3>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <img className="img me-4" alt="Diploma" src={optionImage} />
                  <h3 className="text-wrapper">
                    Menuntaskan Kompetensi Setiap Tingkat
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-4 container">
          <div className="text-wrapper-2">SYARAT PENDAFTARAN</div>
          <div className="text-wrapper-3">Praktik Kerja Lapangan</div>
        </div>
        <div className="gambar">
          <div className="overlap-group">
            <img className="rectangle-2" alt="Rectangle" src={Img1} />
            <img className="rectangle-3" alt="Rectangle" src={Img2} />
            <img className="rectangle-4" alt="Rectangle" src={Img3} />
            <img className="rectangle-5" alt="Rectangle" src={Img4} />
          </div>
        </div>
      </div>
    </SyaratPendaftaranStyled>
  );
};

export default SyaratPendaftaran;
