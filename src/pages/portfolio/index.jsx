import { customCursor } from " @/constants/constants";
import { Box } from "@chakra-ui/react";
import { useIsTouchDevice } from "@studio-freight/hamo";
import { useEffect } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import PortfolioGrid from "../../components/portfolioGrid/portfolioGrid";

const Portfolio = () => {
  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    window.scroll({ top: 0 });
    isTouchableDevice === false ? customCursor() : {};
  }, [isTouchableDevice]);

  return (
    <Box w="100%" bg="isabellina.500">
      <Box
        w="100%"
        p={[
          "40px 10px 40px 10px",
          "60px 20px 60px 20px",
          "80px 20px 80px 20px",
          "80px 20px 80px 20px",
          "80px 20px 80px 20px",
        ]}
        textAlign="center"
        bg="isabellina.500"
      >
        <PageTitle
          text="Portafolio"
          variant={[
            "JUMBOXXXSPANGEAREGULAR",
            "JUMBOXXSPANGEAREGULAR",
            "JUMBOXSPANGEAREGULAR",
            "JUMBOXSPANGEAREGULAR",
            "JUMBOSMPANGEAREGULAR",
          ]}
        />
      </Box>
      <Box w="100%" pb={["0px", "20px", "40px", "40px", "40px"]}>
        <PortfolioGrid />
      </Box>
    </Box>
  );
};

export default Portfolio;
