import { styled } from "styled-components";

const TambahPerusahaanStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Poppins:wght@200;300;400;500;600;700&family=Roboto+Mono&family=Roboto+Serif:opsz,wght@8..144,400;8..144,500;8..144,600;8..144,700;8..144,800&display=swap");

  .title {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 2px 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 10px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: #fff;
    background-color: #1e90ff;
    border-color: #1e90ff;
    text-decoration: none;
    padding: 0 25px;
  }

  .btn-custom {
    background: #1e90ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    height: 5rem;
  }
`;

export default TambahPerusahaanStyled;
