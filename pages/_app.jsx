// Layout
import Layout from "@/components/layout/layout";

import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
