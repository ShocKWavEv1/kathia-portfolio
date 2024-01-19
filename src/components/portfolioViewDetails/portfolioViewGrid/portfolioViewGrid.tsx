import { Box, ScaleFade, Text } from "@chakra-ui/react";
import { PortfolioViewGridProps } from "./model";
import { useRouter } from "next/router";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";
import TextMask from " @/components/animations/textMask/textMask";
import Fade from " @/components/animations/fade/fade";
import { useEffect, useState } from "react";

const PortfolioViewGrid: React.FC<PortfolioViewGridProps> = ({
  portfolioDetails,
}) => {
  const router = useRouter();
  const [showFade, setFade] = useState(false);

  useEffect(() => {
    setFade(false);
    setTimeout(() => {
      setFade(true);
    }, 450);
  }, [router]);

  return (
    <Box
      w="100%"
      p="60px 0px 0px 0px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box w={["100%", "100%", "90%", "90%", "90%"]}>
        <ScaleFade in={showFade}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              350: 1,
              649: 1,
              850: 2,
              900: 2,
              1024: 3,
            }}
          >
            <Masonry gutter="20px">
              {portfolioDetails.details.images.map(
                (item: any, index: number) => (
                  <Box key={item} display="inline-block" cursor="pointer">
                    <Image
                      src={item}
                      alt={item}
                      placeholder="blur"
                      blurDataURL=""
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                )
              )}
            </Masonry>
          </ResponsiveMasonry>
        </ScaleFade>
      </Box>
      <Box w="100%">
        <motion.div
          whileTap={{ scale: 0.95 }}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() =>
            router.push(`/portfolio/${portfolioDetails.next_project}`)
          }
        >
          <Box
            w={["100%", "100%", "90%", "90%", "90%"]}
            p="30px 30px"
            mt={["30px", "30px", "30px", "30px", "30px"]}
            borderRadius="8px"
            bg={portfolioDetails.card.bg}
            cursor="pointer"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            textAlign="center"
          >
            <TextMask
              content={[portfolioDetails.next_project_title]}
              variant={[
                "H7PANGEAREGULAR",
                "H7PANGEAREGULAR",
                "H6PANGEAREGULAR",
                "H6PANGEAREGULAR",
                "H5PANGEAREGULAR",
              ]}
              color={portfolioDetails.card.color}
              delay={0.75}
              triggerOnce={false}
            />
            <Fade duration={0.75} delay={0.25} triggerOnce={false}>
              <Text
                variant={[
                  "XSREGULAR",
                  "XSREGULAR",
                  "SMREGULAR",
                  "SMREGULAR",
                  "SMREGULAR",
                ]}
                pt="5px"
                color={portfolioDetails.card.color}
                textTransform="uppercase"
              >
                {`[ Siguiente proyecto ]`}
              </Text>
            </Fade>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default PortfolioViewGrid;
