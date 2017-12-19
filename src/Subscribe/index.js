// @flow
import React from 'react'
import './Subscribe.css'

import Field from './fields/Field'
import Input from './fields/Input'

const Explanation = ({ message }) =>
  <small>{ message }</small>

const LeftIcon = ({ className = '' }) =>
  <div class="icon is-small is-left">
    <i class={`fa ${className}`}></i>
  </div>

const Select = ({ id, label, type = 'text', className = '' }) =>
  <div className={`field ${className}`}>
    <label htmlFor={id} className="label">{label}</label>
    <div className="control has-icons-left has-icons-right" style={{ width: '100%' }}>
      <div className="select">
        <select>
          <option selected>Argentina</option>
          <option>Bolivia</option>
          <option>Brasil</option>
          <option>Chile</option>
          <option>Paraguay</option>
          <option>Uruguay</option>
          <option>Otro</option>
        </select>
        <LeftIcon className="fa-globe"/>
      </div>
    </div>
  </div>

const SubmitButton = () =>
  <div className="control">
    <button className="button is-link" type="submit">Submit</button>
  </div>

const ContactForm = ({handleSubmit}) =>
  <form className="subscription__form" onSubmit={handleSubmit}>
    <fieldset className="box">
      <legend className="label has-text-centered">Información de Contacto</legend>
      <div className="columns">
        <Field id="apellido" label="Apellido(s)" className="column" control={Input} />
        <Field id="nombre" label="Nombre(s)" className="column" control={Input} />
      </div>
      <div className="columns">
        <Field id="documento" type="number" label="Documento de Identidad" className="column" control={Input} />
        <div className="column columns">
          <Field id="telefono" type="number" label="Teléfono" className="column" icon="fa-phone" control={Input} />
          <Field id="celular" type="number" label="Celular" className="column" icon="fa-mobile" control={Input} />
        </div>
      </div>
      <div className="columns">
        <Field id="fax" label="Fax" className="column" icon="fa-fax" control={Input} />
        <Field id="email" label="E-mail" className="column" icon="fa-envelope" control={Input} />
      </div>
      <div className="columns">
        <Field id="direccion" label="Dirección" className="column" icon="fa-map-marker" control={Input} />
        <Field id="zip" label="Codigo Postal" type="number" className="column" control={Input} />
        <Field id="localidad" label="Localidad" className="column" icon="fa-building" control={Input} />
        <Select id="pais" label="País" className="column" />
      </div>
    </fieldset>
    <SubmitButton />
  </form>

const Subscribe = () =>
  <section className="subscription">
    <ContactForm/>
  </section>

export default Subscribe
