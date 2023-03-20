import React from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";

const FormInput = ({ name, label, type, value, onChange }) => {
  return (
    <Stack>
      <InputGroup>
        <label htmlFor={name}>{label}</label>
        <Input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </InputGroup>
    </Stack>
  );
};

export default FormInput;
