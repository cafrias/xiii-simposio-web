// @flow
import React from 'react'

import './Registration.css'


// COMPONENTS __________________________________________________________________

import Section from '../../components/Section'
import Subscribe from './Subscribe'


// DATA ________________________________________________________________________

const DEADLINE_DATA = [
  {
    name: 'Fecha límite presentación de Resúmenes',
    weekday: 'Viernes',
    date: '04/05/2018'
  },
  {
    name: 'Fecha límite presentación de Trabajos',
    weekday: 'Viernes',
    date: '09/05/2018'
  }
]

const COST_DATA = [
  {
    name: 'Asistentes en general',
    cost: '$2.700*'
  },
  {
    name: 'Matriculados Consejo Profesional de Ciencias Económicas TDF',
    cost: '$2.000*'
  },
  {
    name: 'Docentes UNTDF',
    cost: '$1.600*'
  },
  {
    name: 'Estudiantes UNTDF',
    cost: 'Sin cargo'
  },
  {
    name: 'Estudiantes otras instituciones',
    cost: '$400**'
  }
]

const DeadLine = ({ name, weekday, date }, key) =>
  <div key={key} className="deadline">
    <h3 className="deadline__title">{name}</h3>
    <p className="table__date deadline__date">
      <span className="table__weekday">
        {weekday}
      </span>
      {date}
    </p>
  </div>

const Cost = ({ name, cost }, key) =>
  <div key={key} className="cost">
    <h3 className="cost__title">{name}</h3>
    <p className="cost__total">
      {cost}
    </p>
  </div>

const Registration = () =>
  <Section id="registration" name="Inscripción"
    className="background_white registration-container">
    <article className="deadlines mobile-pad">
      <h2>Presentación de trabajos</h2>
      {
        DEADLINE_DATA.map(DeadLine)
      }
    </article>
    <article className="costs mobile-pad">
      <h2>Costo de las matrículas</h2>
      {
        COST_DATA.map(Cost)
      }
      <p className="text-container disclaimer">
        <small>
          * Incluye material del Simposio, Cóctail de bienvenida y Cena de camaradería<br />
          ** Incluye el material del Simposio
        </small>
      </p>
    </article>
    <article className="how-to mobile-pad">
      <h2>¿Cómo inscribirse?</h2>
      <p className="text-container">
        Llene el <a href="#subs_form">formulario de inscripción</a>{' '}
        y nos pondremos en contacto con usted a la brevedad.
      </p>
      <section>
        <h3>¿Cómo presentar ponencias?</h3>
        <p className="text-container">
          Para la presentación de ponencias recomendamos lea atentamente el {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1xI7ZLC-ao7fAGEnP4_1NjxUUwIhm48KI">reglamento</a>.{' '}
          Cualquier consulta puede ser dirigida a: <a href="mailto:ponencias.simposio@gmail.com">ponencias.simposio@gmail.com</a>
        </p>
      </section>
    </article>
    <hr />
    <Subscribe />
    <hr />
  </Section>

export default Registration
