import { Box } from "@chakra-ui/react";
import { PortfolioViewDetailsProps } from "./model";
import PortfolioHeader from "./portfolioHeader/portfolioHeader";
import PortfolioViewGrid from "./portfolioViewGrid/portfolioViewGrid";

const PortfolioViewDetails: React.FC<PortfolioViewDetailsProps> = ({
  portfolioDetails,
}) => {
  return (
    <Box
      w="100%"
      bg="isabellina.500"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      p={["40px 20px", "40px 20px", "60px 40px", "60px 60px", "60px 60px"]}
    >
      <PortfolioHeader portfolioDetails={portfolioDetails} />
      <PortfolioViewGrid portfolioDetails={portfolioDetails} />
    </Box>
  );
};

export default PortfolioViewDetails;
