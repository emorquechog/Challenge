import React from "react";
import { Button } from "@material-ui/core";

interface IButton {
  onClick: () => void;
}

const ButtonCustom: React.FC<IButton> = ({ onClick, children }) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    {children}
  </Button>
);

export default ButtonCustom;
