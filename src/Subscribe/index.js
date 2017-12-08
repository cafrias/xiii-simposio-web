import React from 'react'
import { Form, Text } from 'react-form'

const TextWithLabel = ({label, id}) =>
  <React.Fragment>
    <label htmlFor={id}>{label}</label>
    <Text field={id} id={id} />
  </React.Fragment>

const SubscribeForm = props =>
  <form onSubmit={props.formApi.submitForm} id="form1">
    <fieldset>
      <TextWithLabel id="apellido" label="Apellido(s)" />
      <TextWithLabel id="nombre" label="Nombre(s)" />
    </fieldset>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>

const Subscribe = () =>
  <section>
    <h2>Solicitud de Inscripción</h2>
    <Form component={SubscribeForm} />
  </section>

export default Subscribe
