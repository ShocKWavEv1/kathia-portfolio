import React from "react";
import { NavbarProps } from "./model";
import { Box, Text } from "@chakra-ui/react";
import { ROUTES, defaultStyles, hover } from "./constants";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Box className="navbar-container" w="100%" h="42px" bg="isabellina.500">
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
        {...defaultStyles}
        _hover={hover}
        cursor="pointer"
      >
        <Text as="span" variant="XSREGULAR" textTransform="uppercase">
          Kathia
          <Text as="span" variant="XSMEDIUM" pl="3px" textTransform="uppercase">
            Romero
          </Text>
        </Text>
      </Box>
      <Box
        className="navbar-router-container"
        w="100%"
        h="100%"
        display="flex"
        placeItems="center"
        placeContent="center"
      >
        {ROUTES.map((item: any, i: number) => {
          return (
            <Box
              w="100%"
              h="100%"
              borderRight="1px"
              borderRightColor="primary.500"
              key={item.path}
              display="flex"
              placeContent="center"
              placeItems="center"
              color="primary.500"
              bg="isabellina.500"
              {...defaultStyles}
              _hover={hover}
              cursor="pointer"
            >
              <Text variant="XSREGULAR" textTransform="uppercase">
                {item.label}
              </Text>
            </Box>
          );
        })}
      </Box>
      <Box
        w="100%"
        h="100%"
        display="flex"
        placeItems="center"
        placeContent="flex-end"
        color="primary.500"
        p="0px 15px"
        {...defaultStyles}
        _hover={hover}
        cursor="pointer"
      >
        <Text as="span" variant="XSMEDIUM" pl="3px" textTransform="uppercase">
          Contactame
        </Text>
      </Box>
    </Box>
  );
};

export default Navbar;
