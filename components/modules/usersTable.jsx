import React from "react";
import {
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const UsersTable = ({ customer }) => {
  return (
    <TableContainer my={5}>
      <Table>
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th isNumeric>Buttons</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{customer.firstName}</Td>
            <Td>{customer.firstName}</Td>
            <Td isNumeric>
              <Flex justifyContent="flex-end" gap={2}>
                <Button size="sm" colorScheme="teal">
                  Details
                </Button>
                <Button size="sm" colorScheme="green">
                  Edit
                </Button>
                <Button size="sm" colorScheme="red">
                  Delete
                </Button>
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
