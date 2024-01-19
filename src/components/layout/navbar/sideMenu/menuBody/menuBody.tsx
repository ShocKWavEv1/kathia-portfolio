import { useRouter } from "next/router";
import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import closeIcon from "../../../../../../public/static/svg/close.svg";
import { motion } from "framer-motion";
import { MenuBodyProps } from "./model";
import Image from "next/image";
import TextMask from " @/components/animations/textMask/textMask";
import { ROUTES, linkedinLink } from "../../constants";
import { blur, translate } from "./constants";

const MenuBody: React.FC<MenuBodyProps> = ({ setOpen }) => {
  const router = useRouter();

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const getChars = (word: string) => {
    let chars: any = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.03, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };
  return (
    <Box w="100%" h="100%" bg="isabellina.500">
      <Box
        w="100%"
        h="42px"
        p="0px 15px"
        display="flex"
        borderBottom="1px"
        borderColor="primary.500"
        placeItems="center"
        placeContent="flex-end"
      >
        <Box cursor="pointer" onClick={() => setOpen()} color="primary.500">
          <Image src={closeIcon} alt="close" />
        </Box>
      </Box>
      <Box w="100%" p="20px 20px 0px 20px">
        <TextMask
          content={["Kathia Romero"]}
          variant={[
            "H7PANGEAREGULAR",
            "H7PANGEAREGULAR",
            "H6PANGEAREGULAR",
            "H6PANGEAREGULAR",
            "H6PANGEAREGULAR",
          ]}
          delay={1}
        />
      </Box>
      <Box w="100%" p="0px 20px 0px 20px">
        <TextMask
          content={["Creative Copywriter"]}
          variant={[
            "H9PANGEAREGULAR",
            "H9PANGEAREGULAR",
            "H8PANGEAREGULAR",
            "H8PANGEAREGULAR",
            "H8PANGEAREGULAR",
          ]}
          delay={1}
        />
      </Box>
      <Box w="100%" p="0px 20px">
        <Box
          w="100%"
          pt="100px"
          display="flex"
          placeContent="flex-end"
          placeItems="flex-start"
          flexDirection="column"
        >
          {ROUTES.map((item: any, index: number) => {
            return (
              <Box
                key={item.label}
                display="flex"
                flexDirection="row"
                cursor="pointer"
                m="10px 0px"
                onClick={() => {
                  setOpen();
                  router.push(item.path);
                }}
              >
                <Text
                  as="span"
                  variant={[
                    "XXLLIGHT",
                    "XXLLIGHT",
                    "XXLLIGHT",
                    "XXLLIGHT",
                    "XXLLIGHT",
                  ]}
                  color="primary.500"
                >
                  <motion.p
                    onMouseOver={() => {
                      setSelectedLink({ isActive: true, index });
                    }}
                    onMouseLeave={() => {
                      setSelectedLink({ isActive: false, index });
                    }}
                    variants={blur}
                    animate={
                      selectedLink.isActive && selectedLink.index != index
                        ? "open"
                        : "closed"
                    }
                    className="nav-char-text"
                    style={{
                      width: "auto",
                      display: "flex",
                      flexDirection: "row",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      w="auto"
                      display="flex"
                      alignItems="flex-end"
                      justifyContent="center"
                      mb="12px"
                      pr="7px"
                    >
                      <Text variant="XSLIGHT" color="primary.500">
                        {`[ ${index + 1} ]`}
                      </Text>
                    </Box>
                    {getChars(item.label)}
                  </motion.p>
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        w="100%"
        p="40px 20px"
        display="flex"
        placeItems="flex-start"
        placeContent="center"
        flexDirection="column"
      >
        <Text
          variant={["MDLIGHT", "LGLIGHT", "LGLIGHT", "LGLIGHT", "LGLIGHT"]}
          color="primary.500"
        >
          ¡Hagamos algo increíble juntos!
        </Text>
        <Box
          pt="20px"
          w="100%"
          display="flex"
          placeItems="center"
          placeContent="flex-start"
        >
          <a href={linkedinLink} target="_blank">
            <Button variant="outline" size="xs" colorScheme="primary">
              <Text variant="SMREGULAR">Linkedln</Text>
            </Button>
          </a>
          <a href="/static/pdf/cv_kathia.pdf" download>
            <Button ml="10px" variant="outline" size="xs" colorScheme="primary">
              <Text variant="SMREGULAR">Descargar cv</Text>
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuBody;
