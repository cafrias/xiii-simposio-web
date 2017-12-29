import React from 'react'
import { shallow } from 'enzyme'

import Submit from './Submit'

const reqProps = {
  id: 'id',
  loading: false,
  success: false,
  failure: false,
}

test('renders with basic props', () => {
  const wrapper = shallow(<Submit {...reqProps} />)

  expect(wrapper.find(`#${reqProps.id}`)).toHaveLength(1)
})

test('matches snapshot', () => {
  const wrapper = shallow(<Submit {...reqProps}/>)

  expect(wrapper).toMatchSnapshot()
})

test('renders loading class', () => {
  const props = Object.assign({}, reqProps, {
    loading: true
  })
  const wrapper = shallow(<Submit {...props}/>)

  expect(wrapper.find('.is-loading')).toHaveLength(1)
})

test('renders error theme', () => {
  const props = Object.assign({}, reqProps, {
    failure: true
  })
  const wrapper = shallow(<Submit {...props}/>)

  expect(wrapper.find('.is-danger')).toHaveLength(1)
  expect(wrapper.find('.fa-times')).toHaveLength(1)
})

test('renders success theme', () => {
  const props = Object.assign({}, reqProps, {
    success: true
  })
  const wrapper = shallow(<Submit {...props}/>)

  expect(wrapper.find('.is-success')).toHaveLength(1)
  expect(wrapper.find('.fa-check')).toHaveLength(1)
})
