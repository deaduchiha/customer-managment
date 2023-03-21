import React from "react";
import { Box } from "@chakra-ui/react";
import UsersTable from "@/components/modules/usersTable";

const HomePage = ({ customers }) => {
  return (
    <Box>
      {customers.map((customer) => (
        <UsersTable key={customer._id} customer={customer} />
      ))}
    </Box>
  );
};

export default HomePage;
