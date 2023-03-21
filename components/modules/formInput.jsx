import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const FormInput = ({ name, label, type, value, onChange, width }) => {
  return (
    <FormControl my={3}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        w={width}
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
