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
        {/* eslint-disable-next-line react/no-children-prop */}
        <InputLeftAddon children={label} />
        <Input type={type} value={value} onChange={onChange} />
      </InputGroup>
    </Stack>
  );
};

export default FormInput;
