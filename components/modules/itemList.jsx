import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const ItemList = ({ form, setForm }) => {
  const { products } = form;
  return (
    <Box>
      <Text>Purchase products</Text>
      <Button colorScheme="green">Add Item</Button>
    </Box>
  );
};

export default ItemList;
