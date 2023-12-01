import styled from "styled-components";

const TempatPklStyled = styled.div`
  height: auto;

  .tempat-pkl {
    background: #edf2fb;
    padding: 4rem 0;
  }

  .title-tempat {
    color: #1e90ff;
    font-family: Poppins;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
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

  .card-title-c {
    color: #000;
    font-family: Poppins;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 116%; /* 1.305rem */
    letter-spacing: -0.02138rem;
    text-transform: capitalize;
  }

  .card-text-c {
    color: #7a7676;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 116%; /* 0.87rem */
    letter-spacing: -0.01425rem;
    text-transform: capitalize;
  }

  .text-lihat {
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 116%; /* 1.8125rem */
    letter-spacing: -0.02969rem;
    text-transform: capitalize;
  }

  .btn-outline-primary:hover {
    color: white;
    background-color: #1e90ff;
    border-color: #1e90ff;
  }

  .icon-lihat {
    width: 2.5em;
    height: 2.5em;
  }

  @media (max-width: 768px) {
    .title-tempat {
      font-size: 2.5rem;
    }

    .text-p {
      font-size: 0.875rem;
    }

    .card-title-c {
      font-size: 1rem;
    }

    .card-text-c {
      font-size: 0.875rem;
    }

    .text-lihat {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 576px) {
    .title-tempat {
      font-size: 1.875rem;
    }

    .text-p {
      font-size: 0.75rem;
    }

    .card-title-c {
      font-size: 0.875rem;
    }

    .card-text-c {
      font-size: 0.75rem;
    }

    .text-lihat {
      font-size: 0.75rem;
    }
  }
`;

export default TempatPklStyled;
