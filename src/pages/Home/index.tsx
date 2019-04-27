import React from "react";

// ASSETS ______________________________________________________________________

import "./assets/subtle_dots_@2X.png";
import "./Home.sass";

import logo from "./assets/logo.png";
import time from "./assets/time.svg";

import idei_x2 from "./assets/idei@2x.png";
import untdf_x2 from "./assets/untdf@2x.png";

// COMPONENTS __________________________________________________________________

import SocialLinks from "../../components/SocialLinks";
import Sponsor from "./Sponsor";

// DATA ________________________________________________________________________

import { sponsors, collaborators } from "./Sponsor/_data";

function Home() {
  return (
    <section id="home" className="home-container">
      <div className="hero-logo-container">
        <img
          className="hero-logo"
          src={logo}
          width="501"
          height="263"
          alt="Simposio Ushuaia logo con lema"
        />
      </div>
      <div className="time-container">
        <img src={time} alt="17/05 - 19/05" className="time" />
      </div>
      <div className="hero-pics">
        <div className="social">
          <SocialLinks />
        </div>
      </div>
      <section className="organized-section">
        <h2 className="organized-by">
          <span className="organized-by__text">Organizado Por</span>
        </h2>
        <div className="organized">
          <img src={idei_x2} alt="Idei Logo" className="organized__logo" />
          <img src={untdf_x2} alt="UNTDF Logo" className="organized__logo" />
        </div>
      </section>
      <section className="background_orange sponsors">
        <header className="sponsors__header">
          <h2 className="section__title">Auspiciantes</h2>
        </header>
        <ul className="sponsors__grid">
          {sponsors.map(({ logo, alt }, i) => (
            <Sponsor key={i} logo={logo} alt={alt} />
          ))}
        </ul>
        <section className="collaboration">
          <h3 className="collaboration__title">
            Se agradece la colaboración de:
          </h3>
          <ul className="sponsors__grid collaborators__grid">
            {collaborators.map(({ logo, alt }, i) => (
              <Sponsor key={i} logo={logo} alt={alt} small={true} />
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
}

export default Home;
