import { extendTheme } from "@chakra-ui/react";
import { getColors } from "./colors/getColors";
import colorsToken from "./colors/colors.json";
import { HeadingTheme as Heading } from "./designSystem/headingTheme/headingTheme";
import { TextTheme as Text } from "./designSystem/textTheme/textTheme";
import { ButtonTheme as Button } from "./designSystem/buttonTheme/buttonTheme";

// HOUSECOLOR COMPONENTS

const colors = getColors({ colors: colorsToken.color });

const breakpoints = {
  xs: "414px",
  sm: "550px",
  md: "744px",
  lg: "1024px",
  xl: "1280px",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors,
  components: {
    Button,
    Heading,
    Text,
  },
  styles: {
    global: {
      body: {
        bg: "primary.500",
        width: "100%",
      },
    },
  },
});

export default theme;
