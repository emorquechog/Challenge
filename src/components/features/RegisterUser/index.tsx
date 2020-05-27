import React, { useState } from "react";
import TextBox from "components/UI/TextBox";
import Button from "components/UI/Button";
import { IUser } from "store/users/models";
import styles from "./register.module.scss";

interface IRegisterUser {
  onSetUserInfo: (data: IUser) => void;
}
let id = 0;
const RegisterUser: React.FC<IRegisterUser> = ({ onSetUserInfo }) => {
  const inputs = [
    {
      label: "Name",
      value: "",
    },
    {
      label: "Last Name",
      value: "",
    },
    {
      label: "Street",
      value: "",
    },
    {
      label: "City",
      value: "",
    },
    {
      label: "Phone Number",
      value: "",
    },
    {
      label: "GPA",
      value: "",
    },
  ];
  const [values, setValues] = useState(inputs);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputs = [...values];
    inputs[Number(event.target.id)].value = event.target.value;
    setValues(inputs);
  };
  const getUserValue = (index: number) => values[index].value;
  const structuredData: IUser = {
    id,
    firstName: getUserValue(0),
    lastName: getUserValue(1),
    street: getUserValue(2),
    city: getUserValue(3),
    phoneNumber: getUserValue(4),
    GPA: getUserValue(5),
  };

  const setUserData = () => {
    id = id + 1;
    onSetUserInfo(structuredData);
    setValues(inputs);
  };

  return (
    <div className={styles.container}>
      {values.map((value, index) => (
        <div key={index}>
          <label>{value.label}</label>
          <TextBox
            onChange={handleInputChange}
            value={value.value}
            name={value.label.trim().toLocaleLowerCase()}
            id={index.toString()}
          ></TextBox>
        </div>
      ))}
      <Button onClick={setUserData}>Save</Button>
    </div>
  );
};

export default RegisterUser;
