import React, { useState } from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";

// components
import Form from "@/components/modules/form";
import { useRouter } from "next/router";

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

  const router = useRouter();

  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "Application/json" },
    });
    const data = await res.json();
    console.log(data);

    if (data.status === "success") router.push("/");
  };
  const cancelHandler = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    });
    router.push("/");
  };
  return (
    <>
      <Heading as="h2" size="base" my={"25px"}>
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
