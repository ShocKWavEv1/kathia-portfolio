import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      w="100%"
      h="100vh"
      bg="alabaster.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="16px"
    >
      <Heading variant="H2PANGEAMEDIUM" color="noir.500">
        Kathia Romero
      </Heading>
      <Text variant="XLLIGHT" color="noir.500">
        Copywriter and senior content manager
      </Text>
    </Box>
  );
}
