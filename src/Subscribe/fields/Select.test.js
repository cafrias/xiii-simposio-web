import React from 'react'
import { shallow } from 'enzyme'

import Select from './Select'
import LeftIcon from '../icons/LeftIcon'

const reqProps = {
  id: 'id',
  hasError: false,
  value: '',
  changeHandler: jest.fn(),
  blurHandler: jest.fn(),
}

afterEach(() => {
  reqProps.changeHandler = jest.fn()
  reqProps.blurHandler = jest.fn()
})

test('renders with basic props', () => {
  const wrapper = shallow(<Select {...reqProps} />)

  expect(wrapper.find(`#${reqProps.id}`)).toHaveLength(1)
})

test('matches snapshot', () => {
  const wrapper = shallow(<Select {...reqProps}/>)

  expect(wrapper).toMatchSnapshot()
})

test('renders icon', () => {
  const props = Object.assign({}, reqProps, {
    icon: 'fa-icon'
  })
  const wrapper = shallow(<Select {...props}/>)

  const icon = wrapper.find(LeftIcon)
  expect(icon).toHaveLength(1)
  expect(icon.props()).toHaveProperty('icon', props.icon)
})

test('changes classes when it has an error', () => {
  const props = Object.assign({}, reqProps, {
    hasError: true
  })
  const wrapper = shallow(<Select {...props}/>)

  expect(wrapper.find('.is-danger')).toHaveLength(1)
})

test('triggers changeHandler', () => {
  const wrapper = shallow(<Select {...reqProps}/>)
  const elem = wrapper.find('select')
  elem.simulate('change')

  expect(reqProps.changeHandler).toHaveBeenCalled()
})

test('triggers blurHandler', () => {
  const wrapper = shallow(<Select {...reqProps}/>)
  const elem = wrapper.find('select')
  elem.simulate('blur')

  expect(reqProps.blurHandler).toHaveBeenCalled()
})

test('renders options as string only', () => {
  const props = Object.assign({}, reqProps, {
    options: [
      'option 1',
      'option 2'
    ]
  })
  const wrapper = shallow(<Select {...props}/>)
  const elements = wrapper.find('option')

  expect(elements).toHaveLength(2)
  elements.forEach(elem => {
    expect(props.options).toContain(elem.text())
  })
})

test('renders options as object only', () => {
  const props = Object.assign({}, reqProps, {
    options: [
      {val: 1243, label: 'option 1'},
      {val: 11, label: 'option 2'}
    ]
  })
  const wrapper = shallow(<Select {...props}/>)
  const elements = wrapper.find('option')

  expect(elements).toHaveLength(2)
  elements.forEach(elem => {
    expect(props.options).toContainEqual({
      val: elem.prop('value'),
      label: elem.text()
    })
  })
})

test('renders options mixed as string and object', () => {
  const props = Object.assign({}, reqProps, {
    options: [
      {val: 1243, label: 'option 1'},
      'option 2'
    ]
  })
  const wrapper = shallow(<Select {...props}/>)
  const elements = wrapper.find('option')

  expect(elements).toHaveLength(2)
  elements.forEach(elem => {
    let text = elem.text()
    if(text === 'option 1') {
      expect(props.options[0]).toEqual({
        val: elem.prop('value'),
        label: elem.text()
      })
    } else {
      expect(props.options[1]).toBe(elem.text())
    }
  })
})
