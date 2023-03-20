// Layout
import Layout from "@/components/layout/layout";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
