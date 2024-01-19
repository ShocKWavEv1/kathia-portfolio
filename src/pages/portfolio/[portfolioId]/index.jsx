import { customCursor } from " @/constants/constants";
import { findPortfolioItemBySlug } from " @/constants/portfolioRoutes";
import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useIsTouchDevice } from "@studio-freight/hamo";
import PortfolioViewDetails from "../../../components/portfolioViewDetails/portfolioViewDetails";

const PortfolioDetails = () => {
  const router = useRouter();
  const { portfolioId } = router.query;

  const [portfolioDetail, setPortfolioDetail] = useState(
    findPortfolioItemBySlug(portfolioId)
  );

  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    setPortfolioDetail(findPortfolioItemBySlug(portfolioId));
  }, [router]);

  useEffect(() => {
    isTouchableDevice === false ? customCursor() : {};
  }, [isTouchableDevice]);

  return (
    <Box w="100%" bg="isabellina.500">
      {portfolioDetail ? (
        <PortfolioViewDetails portfolioDetails={portfolioDetail} />
      ) : (
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Heading>No hay datos</Heading>
        </Box>
      )}
    </Box>
  );
};

export default PortfolioDetails;
