import React from "react";
import { shallow } from "enzyme";

import Notification from "./index";
import Success from "./Success";
import Failure from "./Failure";

test("renders success", () => {
  const status = {
    condition: "success"
  };
  const wrapper = shallow(<Notification {...status} />);

  expect(wrapper.find(Success)).toHaveLength(1);
});

test("renders failure with reason", () => {
  const status = {
    condition: "failure",
    reason: "invalid"
  };
  const wrapper = shallow(<Notification {...status} />);

  const failure = wrapper.find(Failure);
  expect(failure).toHaveLength(1);
  expect(failure.prop("reason")).toBe(status.reason);
});
