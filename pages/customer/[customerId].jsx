import CustomerDetails from "@/components/templates/customerDetails";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState(null);
  const router = useRouter();

  const {
    query: { customerId },
  } = router;

  useEffect(() => {
    fetch(`/api/customer/${customerId}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  });

  if (data) return <CustomerDetails />;
};

export default Index;
