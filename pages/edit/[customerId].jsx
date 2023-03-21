import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import CustomerEditPage from "@/components/templates/customerEditPage";

function Index() {
  const [data, setData] = useState(null);

  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    const fetchData = async () => {
      if (isReady) {
        const res = await fetch(`/api/customer/${customerId}`);
        const data = await res.json();
        setData(data.data);
      }
    };
    fetchData();
  }, [isReady, customerId]);

  if (data) return <CustomerEditPage data={data} id={customerId} />;
}

export default Index;
