import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

import FormInput from "./formInput";

const ItemList = ({ form, setForm }) => {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const changeHandler = () => {};

  return (
    <Box border="1px" borderRadius={5} my={3} p={2}>
      <Text mb={2}>Purchase products</Text>
      {products.map((product, index) => (
        <Box key={index}>
          <FormInput
            name="name"
            label="product name"
            type="text"
            value={product.name}
            onChange={changeHandler}
          />
        </Box>
      ))}
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
