// @flow
import React from 'react'

import './Location.css'


// MAP IMAGES __________________________________________________________________
import map_2x from './_assets/map@2x.jpg'
import map from './_assets/map.jpg'


// COMPONENTS __________________________________________________________________

import Section from '../../components/Section'
import SocialLinks from '../../components/SocialLinks'

function Location() {
  return (
    <Section id="location" name="Ubicación" className="background_orange location">
      <article className="tile">
        <div className="tile__left">
          <h2 className="tile__title">DIRECCIÓN</h2>
          <p className="tile__text">
            Aula 1 de Fuegia Basket 251, Ushuaia, Tierra del Fuego, Argentina.
          </p>
          <p className="tile__text">
            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Fuegia+Basket+251,+V9410BXE+Ushuaia,+Tierra+del+Fuego/@-54.8188082,-68.3277281,17z/data=!3m1!4b1!4m5!3m4!1s0xbc4c2313c9d54fcb:0xf3c5850f10e7b3ea!8m2!3d-54.8188082!4d-68.3255394">
              Ver en Google Maps
            </a>
          </p>
          <div className="tile__social">
            <SocialLinks />
          </div>
        </div>
        <div className="tile__right">
          <img className="tile__map" alt="Mapa de la ubicacion"
            src={map}
            srcSet={`
              ${map_2x} 800w,
            `}
          />
        </div>
      </article>
      <article className="tile tile--hotel">
        <h2 className="tile__title">ALOJAMIENTO</h2>
        <div className="hotel__text">
          <p className="text-container">El Hotel Ushuaia ofrece una tarifa diferencial a los asistentes al Simposio, la cual podrá utilizarse informando al momento de realizar la reserva la participación en el evento:
          </p>
          <ul className="text-container">
            <li>Habitación single por noche $1.150</li>
            <li>Habitación doble por noche $1.350</li>
            <li>Habitación triple por noche $1.500</li>
          </ul>
        </div>
        <ul className="tile__social hotel__links">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="http://www.hotelushuaia.com.ar">www.hotelushuaia.com.ar</a>
          </li>
          <li>
            <a href="tel:+54 2901 430671">+54 2901 430671</a>
          </li>
          <li>
            <a href="mailto:reservas@hotelushuaia.com.ar">reservas@hotelushuaia.com.ar</a>
          </li>
        </ul>
      </article>
    </Section>
  )
}

export default Location
