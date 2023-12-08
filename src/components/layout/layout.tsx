import React from "react";
import { LayoutProps } from "./model";
import { Box } from "@chakra-ui/react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box w="100%" display="flex" flexDirection="column">
      <Navbar />
      <Box w="100%">{children}</Box>
      <Box w="100%" h="100vh" bg="marian.500" />
      <Footer />
    </Box>
  );
};

export default Layout;
