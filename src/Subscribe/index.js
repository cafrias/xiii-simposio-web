// @flow
import React from 'react'

const Explanation = ({ message }) =>
  <small>{ message }</small>

const LeftIcon = ({ className = '' }) =>
  <div class="icon is-small is-left">
    <i class={`fa ${className}`}></i>
  </div>

const Input = ({ id, label, type = 'text', className = '', icon }) => {
  const controlClassName = `control has-icons-right ${ icon ? 'has-icons-left' : '' }`
  return (
    <div className={`field ${className}`}>
      <label htmlFor={id} className="label">{label}</label>
      <div className={controlClassName}>
        <input id={id} name={id} component="input" type={type} className="input"/>
        { type === 'number' ? Explanation({ message: '* Sólo números' }) : null }
        { icon ? <LeftIcon className={icon} /> : null }
      </div>
    </div>
  )
}

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
  <form onSubmit={handleSubmit}>
    <fieldset className="box">
      <legend className="label has-text-centered">Información de Contacto</legend>
      <div className="columns">
        <Input id="apellido" label="Apellido(s)" className="column" />
        <Input id="nombre" label="Nombre(s)" className="column" />
      </div>
      <div className="columns">
        <Input id="documento" type="number" label="Documento de Identidad" className="column" />
        <div className="column columns">
          <Input id="telefono" type="number" label="Teléfono" className="column" icon="fa-phone" />
          <Input id="celular" type="number" label="Celular" className="column" icon="fa-mobile" />
        </div>
      </div>
      <div className="columns">
        <Input id="fax" label="Fax" className="column" icon="fa-fax" />
        <Input id="email" label="E-mail" className="column" icon="fa-envelope" />
      </div>
      <div className="columns">
        <Input id="direccion" label="Dirección" className="column" icon="fa-map-marker" />
        <Input id="zip" label="Codigo Postal" type="number" className="column" />
        <Input id="localidad" label="Localidad" className="column" icon="fa-building" />
        <Select id="pais" label="País" className="column" />
      </div>
    </fieldset>
    <SubmitButton />
  </form>

const Subscribe = () =>
  <section className="section">
    <ContactForm/>
  </section>

export default Subscribe
