import { customCursor } from " @/constants/constants";
import { Box } from "@chakra-ui/react";
import { useIsTouchDevice } from "@studio-freight/hamo";
import { useEffect } from "react";

const Resume = () => {
  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    isTouchableDevice === false ? customCursor() : {};
  }, [isTouchableDevice]);

  return <Box w="100%" h="200vh" bg="isabellina.500"></Box>;
};

export default Resume;
