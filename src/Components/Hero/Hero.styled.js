import styled from "styled-components";
import BgImage from "../../assets/bg-section-1.png";

const HeroStyled = styled.div`
  .bg-image {
    background-image: url(${BgImage});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }

  .text-title {
    font-family: Roboto Serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #fff;
  }

  .text-desc {
    font-family: Roboto Serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #fff;
  }

  .btn-daftar {
    background: rgba(30, 144, 255, 1);
    border-radius: 10px;
    font-family: Roboto Serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #fff;
    width: fit-content;
    padding: 15px 10px;
  }

  .btn-daftar:hover {
    background: rgba(30, 144, 255, 0.8);
  }

  @media (max-width: 768px) {
    .text-title {
      font-size: 2rem;
    }

    .text-desc {
      font-size: 1.5rem;
    }

    .btn-daftar {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 576px) {
    .text-title {
      font-size: 1.5rem;
    }

    .text-desc {
      font-size: 1rem;
    }

    .btn-daftar {
      font-size: 0.7rem;
    }
  }
`;

export default HeroStyled;
