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
    date: '21/04/2017'
  },
  {
    name: 'Fecha límite presentación de Trabajos',
    weekday: 'Viernes',
    date: '05/05/2017'
  }
]

const COST_DATA = [
  {
    name: 'Asistentes en general',
    cost: '$2.200*'
  },
  {
    name: 'Matriculados Consejo Profesional de Ciencias Económicas TDF',
    cost: '$1.600*'
  },
  {
    name: 'Docentes UNTDF',
    cost: '$1.300*'
  },
  {
    name: 'Estudiantes UNTDF',
    cost: 'Sin cargo'
  },
  {
    name: 'Estudiantes otras instituciones',
    cost: '$300**'
  }
]

function DeadLine({name, weekday, date}, key) {
  return (
    <div key={key} className="deadline">
      <h3 className="deadline__title">{name}</h3>
      <p className="table__date deadline__date">
        <span className="table__weekday">
          {weekday}
        </span>
        {date}
      </p>
    </div>
  )
}

function Cost({name, cost}, i) {
  return (
    <div key={i} className="cost">
      <h3 className="cost__title">{name}</h3>
      <p className="cost__total">
        {cost}
      </p>
    </div>
  )
}

function Registration() {
  return (
    <Section id="registration" name="Inscripción"
      className="background_white registration-container">
      <article className="deadlines">
        <h2>Presentación de trabajos</h2>
        {
          DEADLINE_DATA.map(DeadLine)
        }
      </article>
      <article className="costs">
        <h2>Costo de las matrículas</h2>
        {
          COST_DATA.map(Cost)
        }
        <p className="text-container disclaimer">
          <small>
            * Incluye material del Simposio, Cóctail de bienvenida y Cena de camaradería<br/>
            ** Incluye el material del Simposio
          </small>
        </p>
      </article>
      <article className="how-to">
        <h2>¿Cómo inscribirse?</h2>
        <p className="text-container">
          Llene la siguiente <a target="_blank"  rel="noopener noreferrer" href="https://drive.google.com/file/d/0B4-MAjalS7DYNlFjcmJCVEQtTmM/view">ficha de inscripción</a>{' '}
          y envíela a: <a href="mailto:ponencias.simposio@gmail.com">ponencias.simposio@gmail.com</a>;{' '}
          nos pondremos en contacto con usted a la brevedad.
        </p>
        <section>
          <h3>¿Cómo presentar ponencias?</h3>
          <p className="text-container">
            Para la presentación de ponencias recomendamos lea atentamente el {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/0B4-MAjalS7DYSGQ3WVJHRER4dXM/view">reglamento</a>.{' '}
            Cualquier consulta puede ser dirigida a: <a href="mailto:ponencias.simposio@gmail.com">ponencias.simposio@gmail.com</a>
          </p>
        </section>
      </article>
      <Subscribe/>
    </Section>
  )
}

export default Registration
