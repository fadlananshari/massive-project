import styled from "styled-components";

const TentangKamiStyled = styled.div`
  .tentang-kami {
    background: #fff;
    padding: 5rem 0;
  }

  .tentang-kami-lgn {
    background: #fffafa;
    padding: 5rem 0;
  }

  .text-title {
    color: #1e90ff;
    font-family: Poppins;
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .text-desc {
    color: #000;
    font-family: Poppins;
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .text-p {
    color: #000;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 768px) {
    .text-title {
      font-size: 2.5rem;
    }

    .text-desc {
      font-size: 1.875rem;
    }

    .text-p {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 576px) {
    .text-title {
      font-size: 1.875rem;
    }

    .text-desc {
      font-size: 1.25rem;
    }

    .text-p {
      font-size: 0.75rem;
    }
  }
`;

export default TentangKamiStyled;
