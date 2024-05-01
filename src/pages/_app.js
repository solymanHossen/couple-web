import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import "@/styles/globals.css";
import { Box, ChakraProvider } from '@chakra-ui/react';
export default function App({ Component, pageProps }) {
  return <ChakraProvider>  <Box position="fixed" w="100%" zIndex="999">
  <Navbar />
</Box>   <Box paddingTop="150px" paddingBottom='24px'>
        <Component {...pageProps} />
      </Box><Footer/> ; </ChakraProvider>
}