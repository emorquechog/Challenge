import React from "react";
import { shallow } from "enzyme";

import NavBar from "./index";

const createWrapper = (props: any) => shallow(<NavBar />);
describe("2 - Block Render Test (snapshot)", () => {

  // CREATE INSTANCE
  const component = createWrapper(null);
  // TESTS
  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });
});
