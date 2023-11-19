import styled from "styled-components";

const NavbarStyled = styled.div`
  .background-custom {
    background: #1e90ff;
  }

  .text-nav {
    color: #fff;
    font-family: Roboto Serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .text-btn-login {
    color: #111;
    background: #fff;
    font-family: Roboto Serif;
    width: 6rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .text-btn-login:hover {
    background: rgba(30, 144, 255, 1);
    color: #fff;
  }

  .navbar-toggler {
    border: none;
    background: #fff;
  }
`;

export default NavbarStyled;
