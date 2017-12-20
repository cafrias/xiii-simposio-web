// @flow
import React from 'react'
import './Subscribe.css'

import Field, { FieldProps } from './fields/Field'
import Input from './fields/Input'
import Select from './fields/Select'

import type { StatelessFunctionalComponent } from 'react'
import type { FieldProps } from './fields/Field'

type FormFields = {|
  nombre: StatelessFunctionalComponent<FieldProps>,
  apellido: StatelessFunctionalComponent<FieldProps>,
  documento: StatelessFunctionalComponent<FieldProps>,
  telefono: StatelessFunctionalComponent<FieldProps>,
  celular: StatelessFunctionalComponent<FieldProps>,
  fax: StatelessFunctionalComponent<FieldProps>,
  email: StatelessFunctionalComponent<FieldProps>,
  direccion: StatelessFunctionalComponent<FieldProps>,
  zip: StatelessFunctionalComponent<FieldProps>,
  localidad: StatelessFunctionalComponent<FieldProps>,
  pais: StatelessFunctionalComponent<FieldProps>,
|}

const SubmitButton = () =>
  <div className="control">
    <button className="button is-link" type="submit">Submit</button>
  </div>

const ContactForm = ({handleSubmit}) =>
  <form className="subscription__form" onSubmit={handleSubmit}>
    <fieldset className="box">
      <legend className="label has-text-centered">Información de Contacto</legend>
      <div className="columns">
        <div className="column">
          <Field id="apellido" label="Apellido(s)" control={Input} />
        </div>
        <div className="column">
          <Field id="nombre" label="Nombre(s)" control={Input} />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Field id="documento" type="number" label="Documento de Identidad" control={Input} />
        </div>
        <div className="column">
          <div className="columns">
            <div className="column">
              <Field id="telefono" type="number" label="Teléfono" icon="fa-phone" control={Input} />
            </div>
            <div className="column">
              <Field id="celular" type="number" label="Celular" icon="fa-mobile" control={Input} />
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Field id="fax" label="Fax" icon="fa-fax" control={Input} />
        </div>
        <div className="column">
          <Field id="email" label="E-mail" icon="fa-envelope" control={Input} />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="columns">
            <div className="column">
              <Field id="direccion" label="Dirección" icon="fa-map-marker" control={Input} />
            </div>
            <div className="column">
              <Field id="zip" label="Codigo Postal" type="number" control={Input} />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="columns">
            <div className="column">
              <Field id="localidad" label="Localidad" icon="fa-building" control={Input} />
            </div>
            <div className="column">
              <Field id="pais" label="País" control={Select} />
            </div>
          </div>
        </div>
      </div>
    </fieldset>
    <SubmitButton />
  </form>

const Subscribe = () =>
  <section className="subscription">
    <ContactForm/>
  </section>

export default Subscribe
