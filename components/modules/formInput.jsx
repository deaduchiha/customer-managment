import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const FormInput = ({ name, label, type, value, onChange }) => {
  return (
    <FormControl my={3}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default FormInput;
