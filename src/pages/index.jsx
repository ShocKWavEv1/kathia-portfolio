import { customCursor } from " @/constants/constants";
import { Box } from "@chakra-ui/react";
import { useIsTouchDevice } from "@studio-freight/hamo";
import { useEffect } from "react";
import Hero from "../components/hero/hero";

export default function Home() {
  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    if (!isTouchableDevice) customCursor();
  }, [isTouchableDevice]);

  return (
    <Box w="100%">
      <Hero />
    </Box>
  );
}
