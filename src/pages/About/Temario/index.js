// @flow
import React from 'react'

import './Temario.css'

import type {AreaType} from '../areas'

const Subtemas = ({subtemas}: {subtemas: Array<string>}) =>
  <ol type="a" className="temario__subtemas">
    {
      subtemas.map((tema, i) => <li key={i} className="temario__subtemas__item">{tema}</li>)
    }
  </ol>

function Temario({areaName, topics}: AreaType) {
  return(
    <section className="temario__area">
      <h3>Área {areaName}</h3>
      <ol className="temario-list text-container">
        {
          topics.map((topic, i) => (
            <li className="temario-list__item" key={i}>
              {topic.tema}
              {
                topic.subtemas ? Subtemas({subtemas: topic.subtemas}) : null
              }
            </li>
          ))
        }
      </ol>
    </section>
  )
}

export default Temario
