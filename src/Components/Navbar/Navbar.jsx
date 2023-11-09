import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuList from './MenuList';

const Navbar = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white">
      <div className="container">
        <p className="m-0">
          Navbar
        </p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse gap-4 my-auto" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-lg-auto gap-lg-3">
            {MenuList.map((item, index) => {
              return (
                <p className="my-auto" key={index}>
                  <Link to={item.url} className="nav-link text-dark">
                    {item.label}
                  </Link>
                </p>
              );
            })}
          </div>
          {isLogedIn ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                setIsLogedIn(false);
              }}
            >
              Keluar
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                setIsLogedIn(true);
              }}
            >
              Masuk
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
