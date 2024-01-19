import React from "react";
import { FooterProps } from "./model";
import { Box, Text } from "@chakra-ui/react";
import { defaultStyles, hover, linkedinLink } from "../navbar/constants";
import SlideY from " @/components/animations/slideY/slide";

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box w="100%" bg="isabellina.500">
      <SlideY direction={180} delay={1} duration={2}>
        <Box
          w="100%"
          display="grid"
          gridTemplateColumns={[
            "auto 1fr",
            "auto 1fr",
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
              2024 Kathia Romero
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
            <a
              href={linkedinLink}
              target="_blank"
              style={{ width: "50%", height: "100%" }}
            >
              <Box
                w="100%"
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
                  Linkedln
                </Text>
              </Box>
            </a>
            <a
              href="/static/pdf/cv_kath.pdf"
              download
              style={{ width: "50%", height: "100%" }}
            >
              <Box
                w="100%"
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
                  CV
                </Text>
              </Box>
            </a>
          </Box>
        </Box>
      </SlideY>
    </Box>
  );
};

export default Footer;
