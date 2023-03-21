import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const ItemList = ({ form, setForm }) => {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };
  return (
    <Box border="1px" borderRadius={5} my={3} p={2}>
      <Text mb={2}>Purchase products</Text>
      <Button
        w="full"
        colorScheme="green"
        variant="outline"
        onClick={addHandler}
      >
        Add Item
      </Button>
    </Box>
  );
};

export default ItemList;
