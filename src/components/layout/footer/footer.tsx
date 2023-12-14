import React from "react";
import { FooterProps } from "./model";
import { Box, Text } from "@chakra-ui/react";
import { defaultStyles, hover } from "../navbar/constants";

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box
      w="100%"
      display="grid"
      gridTemplateColumns={[
        "1fr 1fr",
        "1fr 1fr",
        "1fr 1fr",
        "1fr 1fr",
        "1fr 420px",
      ]}
      borderTop="1px"
      borderColor="primary.500"
      h="42px"
      bg="isabellina.500"
    >
      <Box
        w="100%"
        h="100%"
        display="flex"
        placeItems="center"
        placeContent="start"
        borderRight="1px"
        borderRightColor="primary.500"
        p="0px 15px"
        color="primary.500"
      >
        <Text as="span" variant="XSREGULAR" textTransform="uppercase">
          2023 Kathia Romero - housecolor
        </Text>
      </Box>
      <Box
        w="100%"
        h="100%"
        display="flex"
        placeItems="center"
        placeContent="center"
        color="primary.500"
      >
        <Box
          w="50%"
          h="100%"
          bg="isabellina.500"
          display="flex"
          placeItems="center"
          placeContent="center"
          borderRight="1px"
          borderRightColor="primary.500"
          {...defaultStyles}
          _hover={hover}
          cursor="pointer"
        >
          <Text variant="XSREGULAR" textTransform="uppercase">
            Linkedin
          </Text>
        </Box>
        <Box
          w="50%"
          h="100%"
          bg="isabellina.500"
          display="flex"
          placeItems="center"
          placeContent="center"
          {...defaultStyles}
          _hover={hover}
          cursor="pointer"
        >
          <Text variant="XSREGULAR" textTransform="uppercase">
            Descargar CV
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
