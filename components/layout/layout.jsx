import React from "react";

import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <Container maxW="container.lg">
      <Flex
        py={2}
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px"
      >
        <Heading as={Link} href="/" size="md">
          Customer Management
        </Heading>
        <Button as={Link} href="/add-customer" colorScheme="teal" size="md">
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
