import { Box } from "@chakra-ui/react";
import { IntroLineProps } from "./model";

const IntroLine: React.FC<IntroLineProps> = () => {
  return (
    <Box w="100%" h="100vh" bg="secondary.500">
      Hi
    </Box>
  );
};

export default IntroLine;
