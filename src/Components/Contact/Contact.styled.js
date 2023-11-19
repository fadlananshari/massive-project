import styled from "styled-components";

const ContactStyled = styled.div`
  /* Small Screen */
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .text-title {
    color: #1e90ff;
    font-family: "Roboto", serif;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }

  .text-p {
    color: #000000;
    font-family: "Roboto", serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
  }

  .bg-card {
    border-radius: 0.625rem;
    background: #dce8ff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  /* Medium Screen */
  @media (min-width: 768px) {
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .text-title {
      color: #1e90ff;
      font-family: "Roboto", serif;
      font-size: 60px;
      font-weight: 700;
      letter-spacing: 0;
      line-height: normal;
      white-space: nowrap;
    }
    .text-p {
      color: #000000;
      font-family: "Roboto", serif;
      font-size: 25px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: normal;
    }

    .img-fluid {
      max-width: max-content;
      height: auto;
    }

    .bg-card {
      border-radius: 0.625rem;
      background: #dce8ff;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;

export default ContactStyled;
