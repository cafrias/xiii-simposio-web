import React from 'react'
// import { Form, Text } from 'react-form'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input'
import Button from 'muicss/lib/react/button'

// const TextWithLabel = ({label, id}) =>
//   <React.Fragment>
//     <label htmlFor={id}>{label}</label>
//     <Text field={id} id={id} />
//   </React.Fragment>

// const SubscribeForm = props =>
//   <form onSubmit={props.formApi.submitForm} id="form1">
//     <fieldset>
//       <TextWithLabel id="apellido" label="Apellido(s)" />
//       <TextWithLabel id="nombre" label="Nombre(s)" />
//     </fieldset>
//     <button type="submit" className="btn btn-primary">Submit</button>
//   </form>

const SubscribeFormMaterial = () =>
  <Form>
    <legend>Solicitud de Inscripción</legend>
    <fieldset>
      <Input label="Apellido(s)" floatingLabel={true} required={true} />
      <Input label="Nombre(s)" floatingLabel={true} required={true} />
    </fieldset>
    <Button variant="raised">Submit</Button>
  </Form>

const Subscribe = () =>
  <section>
    {/* <h2>Solicitud de Inscripción</h2> */}
    {/* <Form component={SubscribeForm} /> */}
    <SubscribeFormMaterial/>
  </section>

export default Subscribe
