import React from 'react'
import { shallow } from 'enzyme'

import Field from './Field'
import Missing from '../messages/Missing'
import Invalid from '../messages/Invalid'

// MOCKED CONTROL ______________________________________________________________

const MockControl = props => <input type="text" {...props}></input>

const reqProps = {
  id: 'id',
  changeHandler: jest.fn(),
  blurHandler: jest.fn(),
  label: 'label',
  state: {
    value: 'value',
    touched: false,
    invalid: false,
    missing: false
  },
  required: true,
  control: MockControl
}

test('renders control', () => {
  const wrapper = shallow(<Field {...reqProps} />)

  expect(wrapper.find(`#${reqProps.id}`)).toHaveLength(1)
})

test('shows missing message', () => {
  const props = Object.assign({}, reqProps, {
    state: {
      value: '',
      touched: true,
      invalid: false,
      missing: true
    }
  })
  const wrapper = shallow(<Field {...props}/>)

  expect(wrapper.find(Missing)).toHaveLength(1)
})

test('shows invalid message', () => {
  const props = Object.assign({}, reqProps, {
    state: {
      value: '',
      touched: true,
      invalid: true,
      missing: false
    }
  })
  const wrapper = shallow(<Field {...props}/>)

  expect(wrapper.find(Invalid)).toHaveLength(1)
})

test('shows both messages', () => {
  const props = Object.assign({}, reqProps, {
    state: {
      value: '',
      touched: true,
      invalid: true,
      missing: true
    }
  })
  const wrapper = shallow(<Field {...props}/>)

  expect(wrapper.find(Missing)).toHaveLength(1)
})
