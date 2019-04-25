import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";
import LeftIcon from "../icons/LeftIcon";

const reqProps = {
  id: "id",
  hasError: false,
  value: "",
  changeHandler: jest.fn(),
  blurHandler: jest.fn()
};

afterEach(() => {
  reqProps.changeHandler = jest.fn();
  reqProps.blurHandler = jest.fn();
});

test("renders with basic props", () => {
  const wrapper = shallow(<Input {...reqProps} />);

  expect(wrapper.find(`#${reqProps.id}`)).toHaveLength(1);
});

test("renders icon", () => {
  const props = Object.assign({}, reqProps, {
    icon: "fa-icon"
  });
  const wrapper = shallow(<Input {...props} />);

  const icon = wrapper.find(LeftIcon);
  expect(icon).toHaveLength(1);
  expect(icon.props()).toHaveProperty("icon", props.icon);
});

test("changes classes when it has an error", () => {
  const props = Object.assign({}, reqProps, {
    hasError: true
  });
  const wrapper = shallow(<Input {...props} />);

  expect(wrapper.find(".is-danger")).toHaveLength(1);
});

test("triggers changeHandler", () => {
  const wrapper = shallow(<Input {...reqProps} />);
  const inputElem = wrapper.find("input");
  inputElem.simulate("change");

  expect(reqProps.changeHandler).toHaveBeenCalled();
});

test("triggers blurHandler", () => {
  const wrapper = shallow(<Input {...reqProps} />);
  const inputElem = wrapper.find("input");
  inputElem.simulate("blur");

  expect(reqProps.blurHandler).toHaveBeenCalled();
});
