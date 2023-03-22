import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

const CustomerEditPage = ({ data, id }) => {
  const {
    firstName,
    lastName,
    email,
    phone = "",
    address = "",
    postalCode = "",
    products = "",
    date = "",
  } = data;

  const [form, setForm] = useState({
    firstName,
    lastName,
    email,
    phone,
    address,
    postalCode,
    products,
    date,
  });
  return <Box>hello </Box>;
};

export default CustomerEditPage;
