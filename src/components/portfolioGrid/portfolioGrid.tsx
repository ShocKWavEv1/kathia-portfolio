import { Box, Text } from "@chakra-ui/react";
import { PortfolioGridProps } from "./model";
import { blur } from "./constants";
import { motion } from "framer-motion";
import { useState } from "react";
import TextMask from "../animations/textMask/textMask";
import Fade from "../animations/fade/fade";
import { PORTFOLIO } from " @/constants/portfolioRoutes";
import { useRouter } from "next/router";

const PortfolioGrid: React.FC<PortfolioGridProps> = () => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const router = useRouter();
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
        {PORTFOLIO.map((item: any, index: number) => {
          return (
            <Box w="100%" key={item.title}>
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
                onClick={() => router.push(`/portfolio/${item.slug}`)}
              >
                <Box w="100%" pb="40px">
                  <Box
                    w="100%"
                    p="30px 30px"
                    borderRadius="8px"
                    bg={item.card.bg}
                    cursor="pointer"
                  >
                    <TextMask
                      content={[item.title]}
                      variant={[
                        "H7PANGEAREGULAR",
                        "H6PANGEAREGULAR",
                        "H6PANGEAREGULAR",
                        "H6PANGEAREGULAR",
                        "H6PANGEAREGULAR",
                      ]}
                      color={item.card.color}
                      delay={0.75}
                    />
                    <Fade duration={0.75} delay={0.25}>
                      <Text
                        pt="10px"
                        variant={[
                          "XSREGULAR",
                          "XSREGULAR",
                          "XSREGULAR",
                          "XSREGULAR",
                          "XSREGULAR",
                        ]}
                        color={item.card.color}
                        textTransform="uppercase"
                      >
                        {item.card.subtitle}
                      </Text>
                    </Fade>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default PortfolioGrid;
