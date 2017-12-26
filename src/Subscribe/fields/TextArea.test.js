import React from 'react'
import { shallow } from 'enzyme'

import TextArea from './TextArea'
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
  const wrapper = shallow(<TextArea {...reqProps} />)

  expect(wrapper.find(`#${reqProps.id}`)).toHaveLength(1)
})

test('matches snapshot', () => {
  const wrapper = shallow(<TextArea {...reqProps}/>)

  expect(wrapper).toMatchSnapshot()
})

test('renders icon', () => {
  const props = Object.assign({}, reqProps, {
    icon: 'fa-icon'
  })
  const wrapper = shallow(<TextArea {...props}/>)

  const icon = wrapper.find(LeftIcon)
  expect(icon).toHaveLength(1)
  expect(icon.props()).toHaveProperty('icon', props.icon)
})

test('changes classes when it has an error', () => {
  const props = Object.assign({}, reqProps, {
    hasError: true
  })
  const wrapper = shallow(<TextArea {...props}/>)

  expect(wrapper.find('.is-danger')).toHaveLength(1)
})

test('triggers changeHandler', () => {
  const wrapper = shallow(<TextArea {...reqProps}/>)
  const elem = wrapper.find('textarea')
  elem.simulate('change')

  expect(reqProps.changeHandler).toHaveBeenCalled()
})

test('triggers blurHandler', () => {
  const wrapper = shallow(<TextArea {...reqProps}/>)
  const elem = wrapper.find('textarea')
  elem.simulate('blur')

  expect(reqProps.blurHandler).toHaveBeenCalled()
})
