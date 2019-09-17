import React from "react";
import { shallow } from "enzyme";
import App from "../App";

it("App renders a TodoEditor", () => {
  const wrapped = shallow(<App />);
});
