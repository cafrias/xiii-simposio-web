const ContactForm = ({handleSubmit}) => {
  return (
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
        <div className="column">
        </div>
      </fieldset>
      <SubmitButton />
    </form>
  )
}

export default FormLayout
