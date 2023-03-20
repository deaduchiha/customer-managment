import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const ItemList = ({ form, setForm }) => {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
  };
  return (
    <Box>
      <Text>Purchase products</Text>
      <Button colorScheme="green" onClick={addHandler}>
        Add Item
      </Button>
    </Box>
  );
};

export default ItemList;
