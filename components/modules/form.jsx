import React from "react";
import { Box } from "@chakra-ui/react";

// components
import FormInput from "./formInput";
import ItemList from "./itemList";

const Form = ({ form, setForm }) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Box p={5}>
      {[
        "firstName",
        "lastName",
        "email",
        "phone",
        "address",
        "postalCode",
        "date",
      ].map((fieldName, index) => (
        <FormInput
          key={index}
          name={fieldName}
          label={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
          type="text"
          value={form[fieldName]}
          onChange={changeHandler}
        />
      ))}
      <ItemList {...{ form, setForm }} />
    </Box>
  );
};

export default Form;
