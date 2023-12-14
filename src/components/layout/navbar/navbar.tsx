import React from "react";
import { NavbarProps } from "./model";
import { Box, Text } from "@chakra-ui/react";
import { ROUTES, defaultStyles, hover } from "./constants";
import { useRouter } from "next/router";
import SlideY from " @/components/animations/slideY/slide";

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  return (
    <Box w="100%" bg="isabellina.500">
      <SlideY direction={-180} delay={1} duration={2}>
        <Box
          w="100%"
          display="grid"
          gridTemplateColumns={[
            "1fr 1fr",
            "1fr 1fr",
            "1fr 1fr",
            "1fr 1fr",
            "320px 1fr 320px",
          ]}
          borderBottom="1px"
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
            borderRight={["0px", "0px", "0px", "0px", "1px"]}
            borderRightColor="primary.500"
            p="0px 15px"
            color="primary.500"
            {...defaultStyles}
            _hover={hover}
            cursor="pointer"
            onClick={() => router.push("/")}
          >
            <Text as="span" variant="XSREGULAR" textTransform="uppercase">
              Kathia
              <Text
                as="span"
                variant="XSMEDIUM"
                pl="3px"
                textTransform="uppercase"
              >
                Romero
              </Text>
            </Text>
          </Box>
          <Box
            className="navbar-router-container"
            w="100%"
            h="100%"
            display={["none", "none", "none", "none", "flex"]}
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
                  onClick={() => router.push(item.path)}
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
            <Text
              display={["none", "none", "none", "none", "block"]}
              as="span"
              variant="XSMEDIUM"
              pl="3px"
              textTransform="uppercase"
            >
              Contactame
            </Text>
            <Box
              display={["flex", "flex", "flex", "flex", "none"]}
              w="50px"
              h="100%"
              placeContent="center"
              placeItems="center"
            >
              <Box
                w="100%"
                h="100%"
                display="flex"
                placeItems="center"
                placeContent="center"
                flexDirection="column"
                cursor="pointer"
              >
                <Box w="100%" h="2px" bg="primary.500" />
                <Box mt="6px" w="100%" h="2px" bg="primary.500" />
              </Box>
            </Box>
          </Box>
        </Box>
      </SlideY>
    </Box>
  );
};

export default Navbar;
