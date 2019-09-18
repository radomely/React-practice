import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import TodoEditor from "../TodoEditor";
import TodoList from "../TodoList";

it("App renders a TodoEditor", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(TodoEditor).length).toEqual(1);
});

it("App does not render a TodoList when there are no todos", () => {
  const wrapped = shallow(<App />);

  wrapped.setState({ todos: [] });

  expect(wrapped.find(TodoEditor).length).toBe(0);
});
