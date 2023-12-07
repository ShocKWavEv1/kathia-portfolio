import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import localFonts from "next/font/local";

const PPMori = localFonts({
  src: [
    {
      path: "../assets/mori/PPMori-Extralight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/mori/PPMori-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/mori/PPMori-SemiBold.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/mori/PPMori-ExtraBold.woff",
      weight: "600",
      style: "normal",
    },
  ],
});

const baseXXLStyles = {
  fontFamily: PPMori.style.fontFamily,
  fontSize: "34px",
};

const baseXLStyles = {
  fontFamily: PPMori.style.fontFamily,
  fontSize: "24px",
};

const baseLGStyles = {
  fontFamily: PPMori.style.fontFamily,
  fontSize: "22px",
};

const baseMDStyles = {
  fontFamily: PPMori.style.fontFamily,
  fontSize: "18px",
};

const baseSMStyles = {
  fontFamily: PPMori.style.fontFamily,
  fontSize: "16px",
};

const baseXSStyles = {
  fontFamily: PPMori.style.fontFamily,
  fontSize: "14px",
};

const baseXSSStyles = {
  fontFamily: PPMori.style.fontFamily,
  fontSize: "10px",
};

/* XXL VARIANTS */
const XXLLIGHT = defineStyle({
  ...baseXXLStyles,
  fontWeight: 300,
});
const XXLREGULAR = defineStyle({
  ...baseXXLStyles,
  fontWeight: 400,
});

const XXLMEDIUM = defineStyle({
  ...baseXXLStyles,
  fontWeight: 500,
});

const XXLSEMIBOLD = defineStyle({
  ...baseXXLStyles,
  fontWeight: 600,
});

/* XL VARIANTS */
const XLLIGHT = defineStyle({
  ...baseXLStyles,
  fontWeight: 300,
});
const XLREGULAR = defineStyle({
  ...baseXLStyles,
  fontWeight: 400,
});

const XLMEDIUM = defineStyle({
  ...baseXLStyles,
  fontWeight: 500,
});

const XLSEMIBOLD = defineStyle({
  ...baseXLStyles,
  fontWeight: 600,
});

/* LG VARIANTS */
const LGLIGHT = defineStyle({
  ...baseLGStyles,
  fontWeight: 300,
});
const LGREGULAR = defineStyle({
  ...baseLGStyles,
  fontWeight: 400,
});

const LGMEDIUM = defineStyle({
  ...baseLGStyles,
  fontWeight: 500,
});

const LGSEMIBOLD = defineStyle({
  ...baseLGStyles,
  fontWeight: 600,
});

/* MD VARIANTS */
const MDLIGHT = defineStyle({
  ...baseMDStyles,
  fontWeight: 300,
});
const MDREGULAR = defineStyle({
  ...baseMDStyles,
  fontWeight: 400,
});

const MDMEDIUM = defineStyle({
  ...baseMDStyles,
  fontWeight: 500,
});

const MDSEMIBOLD = defineStyle({
  ...baseMDStyles,
  fontWeight: 600,
});

/* SM VARIANTS */
const SMLIGHT = defineStyle({
  ...baseSMStyles,
  fontWeight: 300,
});
const SMREGULAR = defineStyle({
  ...baseSMStyles,
  fontWeight: 400,
});

const SMMEDIUM = defineStyle({
  ...baseSMStyles,
  fontWeight: 500,
});

const SMSEMIBOLD = defineStyle({
  ...baseSMStyles,
  fontWeight: 600,
});

/* XS VARIANTS */
const XSLIGHT = defineStyle({
  ...baseXSStyles,
  fontWeight: 300,
});
const XSREGULAR = defineStyle({
  ...baseXSStyles,
  fontWeight: 400,
});

const XSMEDIUM = defineStyle({
  ...baseXSStyles,
  fontWeight: 500,
});

const XSSEMIBOLD = defineStyle({
  ...baseXSStyles,
  fontWeight: 600,
});

/* xss VARIANTS */
const XXSLIGHT = defineStyle({
  ...baseXSSStyles,
  fontWeight: 300,
});
const XXSREGULAR = defineStyle({
  ...baseXSSStyles,
  fontWeight: 400,
});

const XXSMEDIUM = defineStyle({
  ...baseXSSStyles,
  fontWeight: 500,
});

const XXSSEMIBOLD = defineStyle({
  ...baseXSSStyles,
  fontWeight: 600,
});

export const TextTheme = defineStyleConfig({
  variants: {
    XXLLIGHT,
    XXLREGULAR,
    XXLMEDIUM,
    XXLSEMIBOLD,
    XLLIGHT,
    XLREGULAR,
    XLMEDIUM,
    XLSEMIBOLD,
    LGLIGHT,
    LGREGULAR,
    LGMEDIUM,
    LGSEMIBOLD,
    MDLIGHT,
    MDREGULAR,
    MDMEDIUM,
    MDSEMIBOLD,
    SMLIGHT,
    SMREGULAR,
    SMMEDIUM,
    SMSEMIBOLD,
    XSLIGHT,
    XSREGULAR,
    XSMEDIUM,
    XSSEMIBOLD,
    XXSLIGHT,
    XXSREGULAR,
    XXSMEDIUM,
    XXSSEMIBOLD,
  },
});
