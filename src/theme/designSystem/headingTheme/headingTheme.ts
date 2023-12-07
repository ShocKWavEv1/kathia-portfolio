import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import localFonts from "next/font/local";

const PPPangea = localFonts({
  src: [
    {
      path: "../assets/pangea/PPPangea-Ultralight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/pangea/PPPangea-Light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/pangea/PPPangea-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/pangea/PPPangea-Bold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/pangea/PPPangea-Ultrabold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

/* HATTON FONT VARIANTS */

const basePangeaH1Styles = {
  fontFamily: PPPangea.style.fontFamily,
  fontSize: "140px",
};

const basePangeaH2Styles = {
  fontFamily: PPPangea.style.fontFamily,
  fontSize: "110px",
};

const basePangeaH3Styles = {
  fontFamily: PPPangea.style.fontFamily,
  fontSize: "96px",
};

const basePangeaH4Styles = {
  fontFamily: PPPangea.style.fontFamily,
  fontSize: "82px",
};

const basePangeaH5Styles = {
  fontFamily: PPPangea.style.fontFamily,
  fontSize: "68px",
};

const basePangeaH6Styles = {
  fontFamily: PPPangea.style.fontFamily,
  fontSize: "54px",
};

const basePangeaH7Styles = {
  fontFamily: PPPangea.style.fontFamily,
  fontSize: "40px",
};

const basePangeaH8Styles = {
  fontFamily: PPPangea.style.fontFamily,
  fontSize: "32px",
};

const basePangeaH9Styles = {
  fontFamily: PPPangea.style.fontFamily,
  fontSize: "26px",
};

const basePangeaH10Styles = {
  fontFamily: PPPangea.style.fontFamily,
  fontSize: "20px",
};

const jumboPangeaStyles = {
  fontFamily: PPPangea.style.fontFamily,
  fontSize: "230px",
};

/* JUMBO STYLES */

const JUMBOPANGEALIGHT = defineStyle({
  ...jumboPangeaStyles,
  fontWeight: 300,
});

const JUMBOPANGEAREGULAR = defineStyle({
  ...jumboPangeaStyles,
  fontWeight: 400,
});

const JUMBOPANGEAMEDIUM = defineStyle({
  ...jumboPangeaStyles,
  fontWeight: 500,
});

const JUMBOPANGEABOLD = defineStyle({
  ...jumboPangeaStyles,
  fontWeight: 600,
});

const JUMBOPANGEABOLDER = defineStyle({
  ...jumboPangeaStyles,
  fontWeight: 700,
});

/* H1 VARIANT */

const H1PANGEALIGHT = defineStyle({
  ...basePangeaH1Styles,
  fontWeight: 300,
});

const H1PANGEAREGULAR = defineStyle({
  ...basePangeaH1Styles,
  fontWeight: 400,
});

const H1PANGEAMEDIUM = defineStyle({
  ...basePangeaH1Styles,
  fontWeight: 500,
});

const H1PANGEABOLD = defineStyle({
  ...basePangeaH1Styles,
  fontWeight: 600,
});

const H1PANGEABOLDER = defineStyle({
  ...basePangeaH1Styles,
  fontWeight: 700,
});

/* H2 VARIANT */

const H2PANGEALIGHT = defineStyle({
  ...basePangeaH2Styles,
  fontWeight: 300,
});

const H2PANGEAREGULAR = defineStyle({
  ...basePangeaH2Styles,
  fontWeight: 400,
});

const H2PANGEAMEDIUM = defineStyle({
  ...basePangeaH2Styles,
  fontWeight: 500,
});

const H2PANGEABOLD = defineStyle({
  ...basePangeaH2Styles,
  fontWeight: 600,
});

const H2PANGEABOLDER = defineStyle({
  ...basePangeaH2Styles,
  fontWeight: 700,
});

/* H3 VARIANT */

const H3PANGEALIGHT = defineStyle({
  ...basePangeaH3Styles,
  fontWeight: 300,
});

const H3PANGEAREGULAR = defineStyle({
  ...basePangeaH3Styles,
  fontWeight: 400,
});

const H3PANGEAMEDIUM = defineStyle({
  ...basePangeaH3Styles,
  fontWeight: 500,
});

const H3PANGEABOLD = defineStyle({
  ...basePangeaH3Styles,
  fontWeight: 600,
});

const H3PANGEABOLDER = defineStyle({
  ...basePangeaH3Styles,
  fontWeight: 700,
});

/* H4 VARIANT */

const H4PANGEALIGHT = defineStyle({
  ...basePangeaH4Styles,
  fontWeight: 300,
});

const H4PANGEAREGULAR = defineStyle({
  ...basePangeaH4Styles,
  fontWeight: 400,
});

const H4PANGEAMEDIUM = defineStyle({
  ...basePangeaH4Styles,
  fontWeight: 500,
});

const H4PANGEABOLD = defineStyle({
  ...basePangeaH4Styles,
  fontWeight: 600,
});

const H4PANGEABOLDER = defineStyle({
  ...basePangeaH4Styles,
  fontWeight: 700,
});

/* H5 VARIANT */

const H5PANGEALIGHT = defineStyle({
  ...basePangeaH5Styles,
  fontWeight: 300,
});

const H5PANGEAREGULAR = defineStyle({
  ...basePangeaH5Styles,
  fontWeight: 400,
});

const H5PANGEAMEDIUM = defineStyle({
  ...basePangeaH5Styles,
  fontWeight: 500,
});

const H5PANGEABOLD = defineStyle({
  ...basePangeaH5Styles,
  fontWeight: 600,
});

const H5PANGEABOLDER = defineStyle({
  ...basePangeaH5Styles,
  fontWeight: 700,
});

/* H6 VARIANT */

const H6PANGEALIGHT = defineStyle({
  ...basePangeaH6Styles,
  fontWeight: 300,
});

const H6PANGEAREGULAR = defineStyle({
  ...basePangeaH6Styles,
  fontWeight: 400,
});

const H6PANGEAMEDIUM = defineStyle({
  ...basePangeaH6Styles,
  fontWeight: 500,
});

const H6PANGEABOLD = defineStyle({
  ...basePangeaH6Styles,
  fontWeight: 600,
});

const H6PANGEABOLDER = defineStyle({
  ...basePangeaH6Styles,
  fontWeight: 700,
});

/* H7 VARIANT */

const H7PANGEALIGHT = defineStyle({
  ...basePangeaH7Styles,
  fontWeight: 300,
});

const H7PANGEAREGULAR = defineStyle({
  ...basePangeaH7Styles,
  fontWeight: 400,
});

const H7PANGEAMEDIUM = defineStyle({
  ...basePangeaH7Styles,
  fontWeight: 500,
});

const H7PANGEABOLD = defineStyle({
  ...basePangeaH7Styles,
  fontWeight: 600,
});

const H7PANGEABOLDER = defineStyle({
  ...basePangeaH7Styles,
  fontWeight: 700,
});

/* H8 VARIANT */

const H8PANGEALIGHT = defineStyle({
  ...basePangeaH8Styles,
  fontWeight: 300,
});

const H8PANGEAREGULAR = defineStyle({
  ...basePangeaH8Styles,
  fontWeight: 400,
});

const H8PANGEAMEDIUM = defineStyle({
  ...basePangeaH8Styles,
  fontWeight: 500,
});

const H8PANGEABOLD = defineStyle({
  ...basePangeaH8Styles,
  fontWeight: 600,
});

const H8PANGEABOLDER = defineStyle({
  ...basePangeaH8Styles,
  fontWeight: 700,
});

/* H9 VARIANT */

const H9PANGEALIGHT = defineStyle({
  ...basePangeaH9Styles,
  fontWeight: 300,
});

const H9PANGEAREGULAR = defineStyle({
  ...basePangeaH9Styles,
  fontWeight: 400,
});

const H9PANGEAMEDIUM = defineStyle({
  ...basePangeaH9Styles,
  fontWeight: 500,
});

const H9PANGEABOLD = defineStyle({
  ...basePangeaH9Styles,
  fontWeight: 600,
});

const H9PANGEABOLDER = defineStyle({
  ...basePangeaH9Styles,
  fontWeight: 700,
});

/* H10 VARIANT */

const H10PANGEALIGHT = defineStyle({
  ...basePangeaH10Styles,
  fontWeight: 300,
});

const H10PANGEAREGULAR = defineStyle({
  ...basePangeaH10Styles,
  fontWeight: 400,
});

const H10PANGEAMEDIUM = defineStyle({
  ...basePangeaH10Styles,
  fontWeight: 500,
});

const H10PANGEABOLD = defineStyle({
  ...basePangeaH10Styles,
  fontWeight: 600,
});

const H10PANGEABOLDER = defineStyle({
  ...basePangeaH10Styles,
  fontWeight: 700,
});

export const HeadingTheme = defineStyleConfig({
  variants: {
    /* PANGEA FONT VARIANTS */
    JUMBOPANGEALIGHT,
    JUMBOPANGEAREGULAR,
    JUMBOPANGEAMEDIUM,
    JUMBOPANGEABOLD,
    JUMBOPANGEABOLDER,
    H1PANGEALIGHT,
    H1PANGEAREGULAR,
    H1PANGEAMEDIUM,
    H1PANGEABOLD,
    H1PANGEABOLDER,
    H2PANGEALIGHT,
    H2PANGEAREGULAR,
    H2PANGEAMEDIUM,
    H2PANGEABOLD,
    H2PANGEABOLDER,
    H3PANGEALIGHT,
    H3PANGEAREGULAR,
    H3PANGEAMEDIUM,
    H3PANGEABOLD,
    H3PANGEABOLDER,
    H4PANGEALIGHT,
    H4PANGEAREGULAR,
    H4PANGEAMEDIUM,
    H4PANGEABOLD,
    H4PANGEABOLDER,
    H5PANGEALIGHT,
    H5PANGEAREGULAR,
    H5PANGEAMEDIUM,
    H5PANGEABOLD,
    H5PANGEABOLDER,
    H6PANGEALIGHT,
    H6PANGEAREGULAR,
    H6PANGEAMEDIUM,
    H6PANGEABOLD,
    H6PANGEABOLDER,
    H7PANGEALIGHT,
    H7PANGEAREGULAR,
    H7PANGEAMEDIUM,
    H7PANGEABOLD,
    H7PANGEABOLDER,
    H8PANGEALIGHT,
    H8PANGEAREGULAR,
    H8PANGEAMEDIUM,
    H8PANGEABOLD,
    H8PANGEABOLDER,
    H9PANGEALIGHT,
    H9PANGEAREGULAR,
    H9PANGEAMEDIUM,
    H9PANGEABOLD,
    H9PANGEABOLDER,
    H10PANGEALIGHT,
    H10PANGEAREGULAR,
    H10PANGEAMEDIUM,
    H10PANGEABOLD,
    H10PANGEABOLDER,
  },
});
