import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "../modules/form";
import { useRouter } from "next/router";

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

  const router = useRouter();

  const handleCancel = () => {
    router.push("/");
  };

  const handleSave = () => {};
  return (
    <Box>
      <Form form={form} setForm={setForm} />
      <Flex justifyContent="space-between">
        <Button colorScheme="red" onClick={handleCancel}>
          Cancel
        </Button>
        <Button colorScheme="green" onClick={handleSave}>
          Edit
        </Button>
      </Flex>
    </Box>
  );
};

export default CustomerEditPage;
