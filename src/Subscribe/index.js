import React from 'react'
import { Form, Text } from 'react-form'

const SubscribeForm = props =>
  <form onSubmit={props.formApi.submitForm} id="form1">
    <label htmlFor="hello">Hello World</label>
    <Text field="hello" id="hello" />
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>

const Subscribe = () =>
  <section>
    <h2>Solicitud de Inscripción</h2>
    <Form component={SubscribeForm} />
  </section>

export default Subscribe
