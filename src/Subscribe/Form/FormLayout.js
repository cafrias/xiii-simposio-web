// @flow
import * as React from 'react'

import Submit from '../fields/Submit'

type FormLayoutProps = {
  handleSubmit: () => void,
  children: React.Node,
  presenta: boolean
}

const FormLayout = ({handleSubmit, children, presenta}: FormLayoutProps) => {
  const fields = React.Children.toArray(children)
  console.log('Coerced presentaValue: ', presenta)
  return (
    <form className="subscription__form" onSubmit={handleSubmit}>
      <fieldset className="box">
        <legend className="label has-text-centered">Información de Contacto</legend>
        <div className="columns">
          <div className="column">
            {fields[0]}
          </div>
          <div className="column">
            {fields[1]}
          </div>
        </div>
        <div className="columns">
          <div className="column">
            {fields[2]}
          </div>
          <div className="column">
            <div className="columns">
              <div className="column">
                {fields[3]}
              </div>
              <div className="column">
                {fields[4]}
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            {fields[5]}
          </div>
          <div className="column">
            {fields[6]}
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">
                {fields[7]}
              </div>
              <div className="column">
                {fields[8]}
              </div>
            </div>
          </div>
          <div className="column">
            <div className="columns">
              <div className="column">
                {fields[9]}
              </div>
              <div className="column">
                {fields[10]}
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="box">
        <legend className="label has-text-centered">Pago Arancel</legend>
        <div className="columns">
          <div className="column">
            {fields[11]}
          </div>
          <div className="column">
            {fields[12]}
          </div>
          <div className="column">
            {fields[14]}
          </div>
        </div>
        <div className="columns">
          <div className="column">
            {fields[13]}
          </div>
        </div>
      </fieldset>
      <fieldset className="box">
        <legend className="label has-text-centered">Ponencia</legend>
        <div className="columns flx justify-center">
          {fields[15]}
        </div>
        { presenta ? (
          <React.Fragment>
            <div className="columns">
              <div className="column">{fields[16]}</div>
              <div className="column">{fields[17]}</div>
            </div>
            <div className="columns">
              <div className="column">{fields[18]}</div>
              <div className="column">{fields[19]}</div>
            </div>
          </React.Fragment>
        ) : null }
      </fieldset>
      <Submit />
    </form>
  )
}

export default FormLayout
