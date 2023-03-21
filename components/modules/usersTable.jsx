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
import Link from "next/link";
import { useRouter } from "next/router";

const UsersTable = ({ customer }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(`/api/delete/${customer._id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    data.status === "success" ? router.reload() : undefined;
    console.log(data);
  };
  return (
    <TableContainer my={5}>
      <Table>
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Email</Th>
            <Th isNumeric>Buttons</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{customer.firstName}</Td>
            <Td>{customer.email}</Td>
            <Td isNumeric>
              <Flex justifyContent="flex-end" gap={2}>
                <Button
                  size="sm"
                  colorScheme="teal"
                  as={Link}
                  href={`/customer/${customer._id}`}
                >
                  Details
                </Button>
                <Button
                  size="sm"
                  colorScheme="green"
                  as={Link}
                  href={`/edit/${customer._id}`}
                >
                  Edit
                </Button>
                <Button size="sm" colorScheme="red" onClick={handleDelete}>
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
