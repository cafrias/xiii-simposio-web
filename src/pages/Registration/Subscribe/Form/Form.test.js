import React from 'react'
import { shallow, mount } from 'enzyme'

import Form from './index'
import FormLayout from './FormLayout'

beforeEach(() => {
  global.console = {
    log: jest.fn(),
    error: jest.fn()
  }
})

test('renders form', () => {
  const wrapper = shallow(<Form/>)

  expect(wrapper.find(FormLayout)).toHaveLength(1)
})


// INTEGRATION TESTS ___________________________________________________________

const OK = {
  apellido: "Ramirez",
  nombre: "Pepe diego",
  documento: "34186552",
  telefono: "542964546732",
  celular: "542964510169",
  fax: "",
  email: "epep@argonio.com.ar",
  direccion: "Mi casa 182",
  zip: "9420",
  localidad: "Rio Grande, Tierra del Fuego",
  pais: "Argentina",
  arancel_categoria: "2",
  arancel_adicional: "111",
  arancel_pago: "Recibo Nro 122245",
  ponencia_presenta: "false",
  ponencia_titulo: "Algun titulo",
  ponencia_area: "Mecanica Cuantica",
  ponencia_coautores: "Martinez, Brizualdo",
  institucion: "UNTDF",
  acompanantes: "2"
}

test('submits when valid', async () => {
  const wrapper = mount(<Form/>)
  wrapper.instance().submitRequest = jest.fn()
  wrapper.update()

  for (const field in OK) {
    if (OK.hasOwnProperty(field)) {
      const value = OK[field]
      
      if(field !== 'ponencia_presenta') {
        let control = wrapper.find(`[name="${field}"]`)
        control.instance().value = value
        control.simulate('change')
      } else {
        wrapper.find(`[name="${field}"]`).first().simulate('change')
      }
    }
  }

  // Simulates a submit. I'd rather go with this way to execute submitHandler,
  // isntead of simulating a submit action because that way we don't have
  // a way to know when submitHandler has resolved.
  await wrapper.instance().submitHandler({
    preventDefault: jest.fn()
  })

  expect(wrapper.instance().submitRequest).toHaveBeenCalledTimes(1)
})

const notOK = {
  apellido: "Ramirez",
  nombre: "Pepe diego",
  documento: "34186552",
  telefono: "",
  celular: "",
  fax: "",
  email: "epep@argonio.com.ar",
  direccion: "Mi casa 182",
  zip: "9420",
  localidad: "",
  pais: "Argentina",
  arancel_categoria: "10",
  arancel_adicional: "111",
  arancel_pago: "Recibo Nro 122245",
  ponencia_presenta: "false",
  ponencia_titulo: "Algun titulo",
  ponencia_area: "Mecanica Cuantica",
  ponencia_coautores: "Martinez, Brizualdo",
  institucion: "UNTDF",
  acompanantes: "2"
}

test('doesn\'t submit whewn invalid', async () => {
  const wrapper = mount(<Form/>)
  wrapper.instance().submitRequest = jest.fn()
  wrapper.update()

  for (const field in notOK) {
    if (notOK.hasOwnProperty(field)) {
      const value = notOK[field]
      
      if(field !== 'ponencia_presenta') {
        let control = wrapper.find(`[name="${field}"]`)
        control.instance().value = value
        control.simulate('change')
      } else {
        wrapper.find(`[name="${field}"]`).first().simulate('change')
      }
    }
  }

  // Simulates a submit. I'd rather go with this way to execute submitHandler,
  // isntead of simulating a submit action because that way we don't have
  // a way to know when submitHandler has resolved.
  await wrapper.instance().submitHandler({
    preventDefault: jest.fn()
  })

  expect(wrapper.instance().submitRequest).toHaveBeenCalledTimes(0)
})
