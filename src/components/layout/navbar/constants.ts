export const ROUTES = [
  {
    path: "about-me",
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
    path: "cv",
    label: "Curriculum",
    styles: { borderRight: "none", borderRightColor: "primary.500" },
  },
];

export const hover: any = {
  bg: "primary.500",
  color: "isabellina.500",
  transitionDuration: "0.25s",
  transitionTimingFunction: "ease-in-out",
};

export const defaultStyles = {
  transition: "background-color 0.25s ease-in-out, color 0.25s ease-in-out",
};
