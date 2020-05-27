import React from "react";
import { shallow } from "enzyme";

import TextBox from "./index";
const defaultProps = {
  value: "",
  onChange: () => null,
  name: "",
  id: "",
};
const createWrapper = (props: any) => shallow(<TextBox {...props} />);
describe("2 - Block Render Test (snapshot)", () => {
  // SETUP
  const props: any = { ...defaultProps };
  // CREATE INSTANCE
  const component = createWrapper(props);
  // TESTS
  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });
});
