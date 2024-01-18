import { Box, Heading, Text } from "@chakra-ui/react";
import { PortfolioGridProps } from "./model";
import { IMAGES, blur } from "./constants";
import { motion } from "framer-motion";
import { useState } from "react";
import TextMask from "../animations/textMask/textMask";
import Fade from "../animations/fade/fade";

const PortfolioGrid: React.FC<PortfolioGridProps> = () => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
  return (
    <Box
      w="100%"
      h="auto"
      bg="isabellina.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        p={["0px 30px", "0px 30px", "0px 30px", "0px", "0px"]}
        w={["100%", "100%", "100%", "80%", "70%"]}
      >
        {IMAGES.map((item: any, index: number) => {
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ width: "100%" }}
            >
              <motion.div
                onMouseOver={() => {
                  setSelectedLink({ isActive: true, index });
                }}
                onMouseLeave={() => {
                  setSelectedLink({ isActive: false, index });
                }}
                variants={blur}
                whileTap={{ scale: 0.95 }}
                animate={
                  selectedLink.isActive && selectedLink.index != index
                    ? "open"
                    : "closed"
                }
                style={{ width: "100%" }}
              >
                <Box w="100%" pb="40px">
                  <Box
                    w="100%"
                    p="30px 30px"
                    borderRadius="8px"
                    bg={item.bg}
                    cursor="pointer"
                  >
                    <TextMask
                      content={[item.title]}
                      variant="H6PANGEAREGULAR"
                      color={item.color}
                      delay={0.75}
                    />
                    <Fade duration={0.75} delay={0.25}>
                      <Text
                        pt="10px"
                        variant="SMREGULAR"
                        color={item.color}
                        textTransform="uppercase"
                      >
                        {item.description}
                      </Text>
                    </Fade>
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};

export default PortfolioGrid;
