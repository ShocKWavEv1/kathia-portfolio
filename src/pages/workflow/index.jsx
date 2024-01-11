import { customCursor } from " @/constants/constants";
import { Box } from "@chakra-ui/react";
import { useIsTouchDevice } from "@studio-freight/hamo";
import { useEffect } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";

const Workflow = () => {
  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    window.scroll({ top: 0 });
    isTouchableDevice === false ? customCursor() : {};
  }, [isTouchableDevice]);

  return (
    <Box w="100%" bg="isabellina.500">
      <Box w="100%" p="80px 20px" textAlign="center" bg="isabellina.500">
        <PageTitle text="Workflow" variant={["JUMBOSMPANGEAREGULAR"]} />
      </Box>
      <Box w="100%" h="100vh" bg="isabellina.500"></Box>
    </Box>
  );
};

export default Workflow;
