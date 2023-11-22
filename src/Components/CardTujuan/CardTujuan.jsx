import CardTujuanStyled from "./CardTujuan.styled";

const CardTujuan = ({ image, text }) => {
  return (
    <CardTujuanStyled>
      <div className="card h-100 p-3">
        <img
          src={image}
          className="card-img-top mx-auto mb-2"
          alt="gambar tujuan 1"
          style={{ width: "5rem" }}
        />
        <div className="card-body">
          <p className="card-text text-center">{text}</p>
        </div>
      </div>
    </CardTujuanStyled>
  );
};

export default CardTujuan;
