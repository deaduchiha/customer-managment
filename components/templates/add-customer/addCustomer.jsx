import React, { useState } from "react";

import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Form from "@/components/modules/form";

const AddCustomer = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const cancelHandler = () => {
    console.log("cancel");
  };
  const saveHandler = () => {
    console.log("save");
  };
  return (
    <>
      <Heading as="h2" size="md">
        Add new customer
      </Heading>
      <Form form={form} setForm={setForm} />
      <Flex justifyContent="space-between">
        <Button colorScheme="red" onClick={cancelHandler}>
          Cancel
        </Button>
        <Button colorScheme="green" onClick={saveHandler}>
          Save
        </Button>
      </Flex>
    </>
  );
};
export default AddCustomer;
