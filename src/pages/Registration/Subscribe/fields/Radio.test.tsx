import React from "react";
import { shallow } from "enzyme";

import Radio from "./Radio";

const reqProps = {
  id: "id",
  changeHandler: jest.fn(),
  blurHandler: jest.fn()
};

afterEach(() => {
  reqProps.changeHandler = jest.fn();
  reqProps.blurHandler = jest.fn();
});

test("renders two radio buttons", () => {
  const wrapper = shallow(<Radio {...reqProps} />);

  expect(wrapper.find('input[type="radio"]')).toHaveLength(2);
});

test("triggers changeHandler", () => {
  const wrapper = shallow(<Radio {...reqProps} />);
  const elements = wrapper.find("input");
  elements.first().simulate("change");
  elements.last().simulate("change");

  expect(reqProps.changeHandler).toHaveBeenCalledTimes(2);
});

test("triggers blurHandler", () => {
  const wrapper = shallow(<Radio {...reqProps} />);
  const element = wrapper.find("input");
  element.first().simulate("blur");
  element.last().simulate("blur");

  expect(reqProps.blurHandler).toHaveBeenCalledTimes(2);
});
