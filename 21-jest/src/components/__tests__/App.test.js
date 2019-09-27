import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import TodoEditor from "../TodoEditor";
import TodoList from "../TodoList";

describe("App component", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<App />);
  });
  it("renders a TodoEditor", () => {
    expect(wrapped.find(TodoEditor).length).toBe(1);
  });
});
