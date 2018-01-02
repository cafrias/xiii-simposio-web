// @flow
import React from 'react'

import './Temario.css'

type TemarioProps = {
  areaName: string,
  topics: string[]
}

function Temario({areaName, topics}: TemarioProps) {
  return(
    <section className="temario__area">
      <h3>Área {areaName}</h3>
      <ol className="temario-list text-container">
        {
          topics.map((topic, i) => (
            <li className="temario-list__item" key={i}>
              {topic}
            </li>
          ))
        }
      </ol>
    </section>
  )
}

export default Temario
