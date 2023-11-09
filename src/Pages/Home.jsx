import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Hero from '../Components/Hero/Hero';
import Syarat from '../Components/Syarat/Syarat';
import Pkl from '../Components/Pkl/Pkl';
import Footer from '../Components/Footer.jsx/Footer';
import Contact from '../Components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Pkl />
      <Syarat />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
