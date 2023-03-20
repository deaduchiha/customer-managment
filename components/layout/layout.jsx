import React from "react";

import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container maxW="container.lg">
      <Flex py={2} alignItems="center" justifyContent="space-between">
        <Heading as="h2" size="md">
          Customer Management
        </Heading>
        <Button colorScheme="teal" size="md">
          Add Customer
        </Button>
      </Flex>
      <Box>{children}</Box>
      <Flex justifyContent="center" alignItems="center" py={2}>
        <Text>next js | Customer Management</Text>
      </Flex>
    </Container>
  );
};

export default Layout;
