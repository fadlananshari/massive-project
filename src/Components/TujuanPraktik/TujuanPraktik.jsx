import ProgramStudiStyled from "../ProgramStudi/ProgramStudi.styled";
import ImgTujuan1 from "../../assets/homepage/tujuan-1.png";
import ImgTujuan2 from "../../assets/homepage/tujuan-2.png";
import ImgTujuan3 from "../../assets/homepage/tujuan-3.png";
import ImgTujuan4 from "../../assets/homepage/tujuan-4.png";
import CardTujuan from "../CardTujuan/CardTujuan";

const TujuanPraktik = () => {
  const data = [
    {
      image: ImgTujuan1,
      text: "Membantu siswa memahami pengertian PKL, beradaptasi, serta berkompetisi dengan bekerja secara maksimal, serta membantu siswa dalam memahami etika, tata tertib, dan variasi lokasi PKL.",
    },
    {
      image: ImgTujuan2,
      text: "Memberikan latihan kepada siswa untuk sikap siap mental dalam menghadapi tantangan dunia nyata pada lingkungan kerja.",
    },
    {
      image: ImgTujuan3,
      text: "Memberikan motivasi agar siswa serius dan bersemangat dalam mencapai cita-cita.",
    },
    {
      image: ImgTujuan4,
      text: "Menyiapkan siswa agar mampu memilih karir dalam era globalisasi.",
    },
  ];

  return (
    <ProgramStudiStyled>
      <section className="tujuan-praktik">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <h1 className="title-tujuan text-center mb-5">
                Tujuan Praktik Kerja Lapangan
              </h1>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {data.map((item, index) => (
              <div className="col" key={index}>
                <CardTujuan image={item.image} text={item.text} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProgramStudiStyled>
  );
};

export default TujuanPraktik;
