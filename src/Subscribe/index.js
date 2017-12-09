import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Input = ({ id, label, type = 'text', className = '' }) =>
  <div className={`field ${className}`}>
    <label htmlFor={id} className="label">{label}</label>
    <div className="control has-icons-right">
      <Field id={id} name={id} component="input" type={type} className="input"/>
    </div>
  </div>

const SubmitButton = () =>
  <div className="control">
    <button className="button is-link" type="submit">Submit</button>
  </div>

const ContactForm = ({handleSubmit}) =>
  <form onSubmit={handleSubmit}>
    <fieldset className="box">
      <legend className="label has-text-centered">Información de Contacto</legend>
      <div className="columns">
        <Input id="apellido" label="Apellido(s)" className="column" />
        <Input id="nombre" label="Nombre(s)" className="column" />
      </div>
      <div className="columns">
        <Input id="documento" label="Documento de Identidad" className="column" />
        <div className="column columns">
          <Input id="telefono" label="Teléfono" className="column" />
          <Input id="celular" label="Celular" className="column" />
        </div>
      </div>
      <div className="columns">
        <Input id="fax" label="Fax" className="column" />
        <Input id="email" label="E-mail" className="column" />
      </div>
      <div className="columns">
        <Input id="direccion" label="Dirección" className="column" />
        <Input id="zip" label="Codigo Postal" type="number" className="column" />
        <Input id="localidad" label="Localidad" className="column" />
        <Input id="pais" label="País" className="column" />
      </div>
    </fieldset>
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
