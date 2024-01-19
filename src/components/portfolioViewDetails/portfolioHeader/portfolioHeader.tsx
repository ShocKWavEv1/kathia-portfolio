import { Box, Text } from "@chakra-ui/react";
import { PortfolioHeaderProps } from "./model";
import { useRouter } from "next/router";
import TextMask from " @/components/animations/textMask/textMask";
import Fade from " @/components/animations/fade/fade";

const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({
  portfolioDetails,
}) => {
  const router = useRouter();

  return (
    <Box>
      <Box
        w="150px"
        cursor="pointer"
        p="5px 20px"
        borderRadius="50rem"
        transition="background-color 0.25s ease-in-out, color 0.25s ease-in-out"
        _hover={{
          bg: "rgba(42, 97, 18, .1)",
          transition: "background .25s ease-in-out",
        }}
        onClick={() => router.push("/portfolio")}
      >
        <Text variant="MDREGULAR" color="primary.500">
          ←&nbsp;&nbsp;&nbsp;Regresar
        </Text>
      </Box>
      <Box
        w="100%"
        p={[
          "30px 0px 30px 0px",
          "30px 0px 30px 0px",
          "40px 0px 30px 0px",
          "50px 0px 30px 0px",
          "50px 0px 30px 0px",
        ]}
      >
        <TextMask
          content={[portfolioDetails.title]}
          variant={[
            "JUMBOXXSPANGEAMEDIUM",
            "JUMBOXXSPANGEAMEDIUM",
            "JUMBOXSPANGEAMEDIUM",
            "JUMBOXSPANGEAMEDIUM",
            "JUMBOXSPANGEAMEDIUM",
          ]}
          delay={0.4}
        />
      </Box>
      <Box w={["100%", "100%", "100%", "840px", "840px"]}>
        <Fade duration={0.75} delay={0.25} triggerOnce={false}>
          <Text
            variant={[
              "SMREGULAR",
              "MDREGULAR",
              "LGREGULAR",
              "LGREGULAR",
              "LGREGULAR",
            ]}
            color="primary.500"
          >
            {portfolioDetails.details.description}
          </Text>
        </Fade>
      </Box>
    </Box>
  );
};

export default PortfolioHeader;
