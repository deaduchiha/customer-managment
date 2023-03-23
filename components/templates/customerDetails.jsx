import React, { Fragment } from "react";
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import moment from "moment";

const CustomerDetails = ({ data }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    postalCode,
    date,
    products,
  } = data;

  console.log(products);

  return (
    <Box>
      <Heading>Customer Details</Heading>
      <Box my={10}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Address</Th>
                <Th>Postal Code</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{firstName}</Td>
                <Td>{lastName}</Td>
                <Td>{email}</Td>
                <Td>{phone}</Td>
                <Td>{address}</Td>
                <Td>{postalCode}</Td>
                <Td>{moment(date).utc().format("YYYY-MM-DD")}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product, index) => (
                <Tr key={index}>
                  <Td>{product.name}</Td>
                  <Td>{product.price}</Td>
                  <Td>{product.qty}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
export default CustomerDetails;
