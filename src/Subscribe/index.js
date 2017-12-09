import React from 'react'
import { Field, reduxForm } from 'redux-form'

const TextInput = ({ id, label }) =>
  <div className="field">
    <label htmlFor={id} className="label">{label}</label>
    <div className="control has-icons-right">
      <Field id={id} name={id} component="input" type="text" className="input"/>
    </div>
  </div>

const SubmitButton = () =>
  <div className="control">
    <button className="button is-link" type="submit">Submit</button>
  </div>

const ContactForm = ({handleSubmit}) =>
  <form onSubmit={handleSubmit}>
    <TextInput id="apellido" label="Apellido(s)" />
    <TextInput id="nombre" label="Nombre(s)" />
    <SubmitButton />
  </form>

const ContactFormRedux = reduxForm({
  form: 'contact',
  onSubmit: (values) => alert(values.firstName)
})(ContactForm)

const Subscribe = () =>
  <section className="section">
    <ContactFormRedux/>
  </section>

export default Subscribe
