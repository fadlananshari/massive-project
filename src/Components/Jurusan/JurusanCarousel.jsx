import React from 'react';
import JurusanCarouselStyled from './JurusanCarousel.style';
import Img1 from '../../assets/pilih-jurusan/pilih-jurusan1.png';
import Img2 from '../../assets/pilih-jurusan/pilih-jurusan2.png';
import Img3 from '../../assets/pilih-jurusan/pilih-jurusan3.png';
import Img4 from '../../assets/pilih-jurusan/pilih-jurusan4.png';
import Img5 from '../../assets/pilih-jurusan/pilih-jurusan5.png';

const JurusanCarousel = () => {
  return (
    <JurusanCarouselStyled>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Img1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Img2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Img3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Img4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Img5} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </JurusanCarouselStyled>
  );
};

export default JurusanCarousel;
