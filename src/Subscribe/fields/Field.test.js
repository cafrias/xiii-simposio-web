import React from 'react'
import { shallow } from 'enzyme'

import Field from './Field'

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
