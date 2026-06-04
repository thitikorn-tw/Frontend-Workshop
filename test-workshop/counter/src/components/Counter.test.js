import React from "react";
import { shallow, mount } from "enzyme";
import Counter from "./Counter";

describe("Counter component", () => {
  // TODO: add test for basic render
  test("should render the component", () => {
    const props = {
      value: 0,
      onIncrement: jest.fn(),
      onDecrement: jest.fn(),
    };

    const wrapper = shallow(<Counter {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  // TODO: add test for increment button
  test("should render the increment button", () => {
    const props = {
      value: 0,
      onIncrement: jest.fn(),
      onDecrement: jest.fn(),
    };

    const wrapper = shallow(<Counter {...props} />);
    const buttons = wrapper
      .find("button")
      .filterWhere((btn) => btn.text() === "+");
    expect(buttons.exists()).toBe(true);
  });

  test("first button should call onIncrement", () => {
    const props = {
      value: 2,
      onIncrement: jest.fn(),
      onDecrement: jest.fn(),
    };

    const wrapper = shallow(<Counter {...props} />);
    const buttons = wrapper
      .find("button")
      .filterWhere((btn) => btn.text() === "+");
    buttons.simulate("click");
    expect(props.onIncrement).toBeCalled();
  });

  // TODO: add test for decrement button
  test("should render the decrement button", () => {
    const props = {
      value: 0,
      onIncrement: jest.fn(),
      onDecrement: jest.fn(),
    };

    const wrapper = shallow(<Counter {...props} />);
    const buttons = wrapper
      .find("button")
      .filterWhere((btn) => btn.text() === "-");
    expect(buttons.exists()).toBe(true);
  });

  // TODO: add test for third button, third button should call onIncrement when counter is odd
  test("third button should call onIncrement when counter is odd", () => {
    const props = {
      value: 3,
      onIncrement: jest.fn(),
      onDecrement: jest.fn(),
    };

    const wrapper = shallow(<Counter {...props} />);
    const buttons = wrapper
      .find("button")
      .filterWhere((btn) => btn.text() === "Increment if odd");
    buttons.simulate("click");
    expect(props.onIncrement).toBeCalled();
  });

  test("third button should't call onIncrement when counter is even", () => {
    const props = {
      value: 2,
      onIncrement: jest.fn(),
      onDecrement: jest.fn(),
    };

    const wrapper = shallow(<Counter {...props} />);
    const buttons = wrapper
      .find("button")
      .filterWhere((btn) => btn.text() === "Increment if odd");
    buttons.simulate("click");
    expect(props.onIncrement).not.toBeCalled();
  });

  // Increment Async button should call onIncrement after 1 second
  test("Increment Async button should call onIncrement after 1 second", () => {
    jest.useFakeTimers();
    const props = {
      value: 0,
      onIncrement: jest.fn(),
      onDecrement: jest.fn(),
    };

    const wrapper = shallow(<Counter {...props} />);
    const buttons = wrapper
      .find("button")
      .filterWhere((btn) => btn.text() === "Increment async");
    buttons.simulate("click");
    expect(props.onIncrement).not.toBeCalled();
    jest.runAllTimers();
    expect(props.onIncrement).toBeCalled();
    jest.useRealTimers();
  });
});
