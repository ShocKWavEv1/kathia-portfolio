import { customCursor } from " @/constants/constants";
import { Box } from "@chakra-ui/react";
import { useIsTouchDevice } from "@studio-freight/hamo";
import { useEffect } from "react";
import Hero from "../components/hero/hero";
import IntroLine from "../components/introLine/introLine";

export default function Home() {
  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    window.scroll({ top: 0 });
    if (!isTouchableDevice) customCursor();
  }, [isTouchableDevice]);

  return (
    <Box w="100%">
      <Hero />
      <IntroLine />
    </Box>
  );
}
