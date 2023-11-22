const CardPkl = ({ image, title, paragraph1, paragraph2 }) => {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt="gambar pkl" />
      <div className="card-body">
        <h5 className="card-title-c">{title}</h5>
        <p className="card-text-c mb-0">{paragraph1}</p>
        <p className="card-text-c">{paragraph2}</p>
      </div>
    </div>
  );
};

export default CardPkl;
