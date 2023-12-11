import styled from 'styled-components';

const NavbarStyled = styled.div`
  * {
    font-family: "Poppins";
  }

  .background-custom {
    background: #1e90ff;
  }

  .text-nav {
    color: #fff;

    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .text-btn-login {
    color: #111;
    background: #fff;
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

  .btn-none {
    background: none;
    border: none;
  }
`;

export default NavbarStyled;
