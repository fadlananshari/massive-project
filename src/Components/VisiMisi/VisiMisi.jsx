import React from "react";
import ImageVM from "../../assets/visi-misi.png";
import VisiMisiStyled from "./VisiMisi.styled";

const VisiMisi = () => {
  return (
    <VisiMisiStyled>
      <div className="container">
        <img src={ImageVM} alt="visi-misi" className="img-fluid mb-3" />

        <div className="row">
          <div className="col-12">
            <div className="card-box">
              <h2 className="text-center">Visi</h2>
              <p className="text-center">
                Unggul dalam bidang Iptek yang dilandasi Imtaq dan sikap peduli
                serta berbudaya lingkungan.
              </p>

              <h2 className="text-center mt-5">Misi</h2>
              <p className="text-center">
                Meningkatkan kesiapan siswa untuk memasuki lapangan kerja serta
                membentuk tenaga professional dibidang grafika dan teknologi
                informasi dan komunikasi, Meningkatkan kualitas tamatan menjadi
                warga Negara yang produktif serta memilki budi pekerti yang
                luhur, cinta pada bangsa dan Negara, Mengoptimalkan unit
                produksi dan jasa sebagai tempat pembelajaran kewirausahaan
                siswa di sekolah, dan Meningkatkan nilai – nilai disiplin kepada
                warga sekolah
              </p>
            </div>
          </div>
        </div>
      </div>
    </VisiMisiStyled>
  );
};

export default VisiMisi;
