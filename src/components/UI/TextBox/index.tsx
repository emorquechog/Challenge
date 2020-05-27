import React from "react";
import { TextField } from "@material-ui/core";
interface ITextBox {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
}

const TextBox: React.FC<ITextBox> = ({ onChange, value, name, id }) => (
  <TextField value={value} onChange={onChange} name={name} id={id}></TextField>
);

export default TextBox;
