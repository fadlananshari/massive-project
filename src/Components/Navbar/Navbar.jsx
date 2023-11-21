import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/logo.png';
import NavbarStyled from './Navbar.styled';

const Navbar = ({ data }) => {
  return (
    <NavbarStyled>
      <nav className="navbar navbar-expand-lg fixed-top background-custom">
        <div className="container">
          <h4 className="m-0">
            <Link to="/" className="nav-link text-dark ">
              <img src={Logo} alt="logo" width="70" />
            </Link>
          </h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse gap-4 my-auto" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-lg-auto gap-lg-3">
              {data.map((item, index) => {
                return (
                  <p className="my-auto" key={index}>
                    <Link to={item.url} className="nav-link text-nav">
                      {item.label}
                    </Link>
                  </p>
                );
              })}
            </div>

            <Link to="/login">
              <button className="btn btn-primary text-btn-login">Login</button>
            </Link>
          </div>
        </div>
      </nav>
    </NavbarStyled>
  );
};

export default Navbar;
