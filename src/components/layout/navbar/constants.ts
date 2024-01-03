export const ROUTES = [
  {
    path: "about",
    label: "Sobre mí",
    styles: { borderRight: "1px", borderRightColor: "primary.500" },
  },
  {
    path: "portfolio",
    label: "Portafolio",
    styles: { borderRight: "1px", borderRightColor: "primary.500" },
  },
  {
    path: "workflow",
    label: "Workflow",
    styles: { borderRight: "1px", borderRightColor: "primary.500" },
  },
  {
    path: "resume",
    label: "Curriculum",
    styles: { borderRight: "none", borderRightColor: "primary.500" },
  },
];

export const hover: any = {
  bg: [
    "isabellina.500",
    "isabellina.500",
    "isabellina.500",
    "isabellina.500",
    "primary.500",
  ],
  color: [
    "primary.500",
    "primary.500",
    "primary.500",
    "primary.500",
    "isabellina.500",
  ],
  transitionDuration: "0.25s",
  transitionTimingFunction: "ease-in-out",
};

export const defaultStyles = {
  transition: "background-color 0.25s ease-in-out, color 0.25s ease-in-out",
};
