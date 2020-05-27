import React from "react";
import { shallow } from "enzyme";

import ButtonCustom from "./index";
const defaultProps = {
  onClick: () => null,
};
const createWrapper = (props: any) => shallow(<ButtonCustom {...props} />);
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
