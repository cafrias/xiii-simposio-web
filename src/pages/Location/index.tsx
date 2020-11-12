import React from "react";

import "./Location.sass";

// MAP IMAGES __________________________________________________________________
import map_2x from "./_assets/map@2x.jpg";
import map from "./_assets/map.jpg";

// COMPONENTS __________________________________________________________________

import Section from "../../components/Section";
import SocialLinks from "../../components/SocialLinks";

function Location() {
  return (
    <Section
      id="location"
      name="Ubicación"
      className="background_orange location"
    >
      <article className="tile">
        <div className="tile__left">
          <h2 className="tile__title">ONLINE</h2>
          <p className="tile__text">
            La transmisión será en vivo por el canal de{" "}
            <a
              href="https://www.youtube.com/user/UNIVERSIDADTDF"
              target="_blank"
            >
              YouTube de la UNTDF
            </a>
            .
          </p>
          <div className="tile__social">
            <SocialLinks />
          </div>
        </div>
        <div className="tile__right">
          <img
            className="tile__map"
            alt="Logo de YouTube"
            src={map}
            srcSet={`
              ${map_2x} 800w,
            `}
          />
        </div>
      </article>
    </Section>
  );
}

export default Location;
