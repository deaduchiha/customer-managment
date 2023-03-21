import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

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

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;

    setForm({ ...form, products: newProducts });
  };

  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);

    setForm({ ...form, products: newProducts });
  };

  return (
    <Box my={3} p={2} border="1px" borderRadius={5}>
      <Text mb={2}>Purchase products</Text>
      {products.map((product, index) => (
        <ProductItems
          key={index}
          product={product}
          changeHandler={(e) => changeHandler(e, index)}
          deleteHandler={() => deleteHandler(index)}
        />
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

const ProductItems = ({ product, changeHandler, deleteHandler }) => {
  return (
    <Box p={2} border="1px" borderRadius={5} my={5}>
      <FormInput
        name="name"
        label="product name"
        type="text"
        value={product.name}
        onChange={changeHandler}
      />
      <Flex w="" alignItems="center" gap={4}>
        <FormInput
          name="price"
          label="Price"
          type="text"
          value={product.price}
          onChange={changeHandler}
        />

        <FormInput
          name="qty"
          label="Qty"
          type="text"
          value={product.qty}
          onChange={changeHandler}
        />
      </Flex>
      <Button w="full" colorScheme="red" onClick={deleteHandler}>
        remove
      </Button>
    </Box>
  );
};
