import React from 'react'

import './Location.css'

import map from './maps-2.jpg'

// MAP IMAGES __________________________________________________________________
import map_1000 from './_assets/map.png'
import map_800 from './_assets/map@800.png'
import map_550 from './_assets/map@550.png'
import map_400 from './_assets/map@400.png'

// COMPONENTS __________________________________________________________________
import Section from '../../components/Section'
import SocialLinks from '../../components/SocialLinks'

function Location() {
  return (
    <Section id="location" name="Ubicación" className="background_orange location">
      <article className="tile">
        <div className="tile__left">
          <h2 className="tile__title">DIRECCIÓN</h2>
          <p className="text-container tile__text">
            SUM de la Caja de Previsión Social de la Provincia de Tierra del Fuego,
            <br/>
            Alem 2410, Ushuaia, Tierra del Fuego, Argentina.
          </p>
          <p className="tile__text">
            <a target="_blank" href="https://www.google.com.ar/maps/place/Av.+Leandro+N.+Alem+2410,+V9410ADX+Ushuaia,+Tierra+del+Fuego/@-54.8093112,-68.3365895,16.83z/data=!4m5!3m4!1s0xbc4c233f167580ad:0xaf5184363e0591db!8m2!3d-54.8086259!4d-68.3377634?hl=en">
              Ver en Google Maps
            </a>
          </p>
          <div className="tile__social">
            <SocialLinks/>
          </div>
        </div>
        <div className="tile__right">
          <img className="tile__map" alt="Mapa de la ubicacion"
            src={map_400}
            srcSet={`
              ${map_550} 550w,
              ${map_800} 800w,
              ${map_1000} 1000w
            `}
          />
        </div>
      </article>
      <article className="tile tile--hotel">
        <h2 className="tile__title">ALOJAMIENTO</h2>
        <p className="text-container hotel__text">El Hotel Ushuaia ofrece una tarifa diferencial a los asistentes al Simposio, la cual podrá utilizarse informando al momento de realizar la reserva la participación en el evento:
        </p>
        <ul className="text-container">
          <li>Habitación single por noche $900</li>
          <li>Habitación doble por noche $1.150</li>
          <li>Habitación triple por noche $1.300</li>
        </ul>
        <ul className="tile__social hotel__links">
          <li>
            <a target="_blank" href="http://www.hotelushuaia.com.ar">www.hotelushuaia.com.ar</a>
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
