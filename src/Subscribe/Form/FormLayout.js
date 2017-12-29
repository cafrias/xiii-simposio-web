// @flow
import * as React from 'react'

import Submit from '../fields/Submit'

type FormLayoutProps = {
  handleSubmit: (e: SyntheticEvent<HTMLButtonElement>) => Promise<any>,
  children: React.Node,
  presenta: boolean,
  loading: boolean,
  success: boolean,
  failure: boolean
}

const Success = () =>
  <p className="notification is-success">
    ¡Muchas gracias por inscribirse! Nos pondremos en contacto con usted a la
    brevedad.
  </p>

const Failure = () =>
  <p className="notification is-danger">
    ¡Algo salió mal! Intente nuevamente más tarde, o contáctese con nosotros a:{' '}
    <a href="mailto:ponencias.simposio@gmail.com">ponencias.simposio@gmail.com</a>
  </p>

const Notification = (type: string) => {
  let component
  switch(type) {
  case 'failure':
    component = Failure
    break
  case 'success':
    component = Success
    break
  default:
    component = () => null
  }

  return (
    <div className="columns">
      <div className="column">
        { component() }
      </div>
    </div>
  )
}

const FormLayout = (props: FormLayoutProps) => {
  const {
    handleSubmit,
    children,
    presenta,
    loading,
    success,
    failure
  } = props

  const fields = React.Children.toArray(children)

  const formClassName = `subs_form ${loading ? 'subs_form--loading' : ''}`

  return (
    <form className={formClassName} onSubmit={handleSubmit}>
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
        </div>
        <div className="columns">
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
      { failure ? Notification('failure') : null }
      { success ? Notification('success') : null }
      <div className="columns">
        <div className="column flx justify-center">
          <Submit id="subs_submit" loading={loading} success={success}
            failure={failure} />
        </div>
      </div>
    </form>
  )
}

export default FormLayout
