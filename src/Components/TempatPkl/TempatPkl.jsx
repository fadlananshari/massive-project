import TempatPklStyled from "./TempatPkl.styled";
import imgTempatPkl1 from "../../assets/homepage/pkl-1.png";
import imgTempatPkl2 from "../../assets/homepage/pkl-2.png";
import imgTempatPkl3 from "../../assets/homepage/pkl-3.png";
import imgTempatPkl4 from "../../assets/homepage/pkl-4.png";
import CardPkl from "../CardPkl/CardPkl";
import { Button } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";

const TempatPkl = () => {
  const data = [
    {
      image: imgTempatPkl1,
      title: "Service komputer",
      paragraph1: "Aulia Computer",
      paragraph2: "Griya abadi - bangkalan",
    },
    {
      image: imgTempatPkl2,
      title: "Apotek",
      paragraph1: "efan Apotek",
      paragraph2: "Jl RE Martadinata, Wr 02, Bangkalan",
    },
    {
      image: imgTempatPkl3,
      title: "Bengkel Motor",
      paragraph1: "WJ Racing",
      paragraph2: "Jl. Kenanga No.3, Wr 02, Bangkalan, ",
    },
    {
      image: imgTempatPkl4,
      title: "Bank",
      paragraph1: "Bank Jatim",
      paragraph2: "Demangan - Bangkalan",
    },
  ];

  return (
    <TempatPklStyled>
      <div className="tempat-pkl">
        <div className="container">
          <h1 className="title-tempat text-center">
            Tempat Praktik Kerja Lapangan
          </h1>
          <p className="text-p text-center">
            Carilah Tempat PKL Yang Sesuai Dengan Profesi, Keinginan dan
            kebutuhanmu
          </p>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {data.map((item, index) => (
              <div className="col" key={index}>
                <CardPkl
                  image={item.image}
                  title={item.title}
                  paragraph1={item.paragraph1}
                  paragraph2={item.paragraph2}
                />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-end mt-5">
            <Button variant="outline-primary" className="rounded-4">
              <span className="text-lihat me-3">Lihat Selengkapnya</span>
              <FaArrowAltCircleRight className="icon-lihat" />
            </Button>
          </div>
        </div>
      </div>
    </TempatPklStyled>
  );
};

export default TempatPkl;
