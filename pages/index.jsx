import React from "react";

import connectDB from "@/utils/connectDB";
import Customer from "@/models/Customer";

import HomePage from "@/components/templates/home/home";

const Home = ({ customers }) => {
  return <HomePage customers={customers} />;
};

export default Home;

export const getServerSideProps = async () => {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
