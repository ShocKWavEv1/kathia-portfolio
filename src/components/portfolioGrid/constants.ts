import bw from "../../../public/static/images/portfolio/bw/main.jpeg";
import chillis from "../../../public/static/images/portfolio/chillis/main.jpeg";
import cielito from "../../../public/static/images/portfolio/cielito/main.jpeg";
import starbucks from "../../../public/static/images/portfolio/starbucks/main.jpg";
import roshfrans from "../../../public/static/images/portfolio/roshfrans/main.jpeg";
import trender from "../../../public/static/images/portfolio/trender/main.jpeg";

export const IMAGES = [
  {
    title: "Black and White",
    description: "[ creación de contenidos digitales ]",
    image: bw,
    bg: "primary.900",
    color: "isabellina.500",
  },
  {
    title: "Chilli's",
    description: "[ creación de contenidos digitales ]",
    image: chillis,
    bg: "primary.500",
    color: "isabellina.500",
  },
  {
    title: "Cielito Querido Café",
    description: "[ creación de contenidos digitales ]",
    image: cielito,
    bg: "secondary.500",
    color: "primary.900",
  },
  {
    title: "Starbucks",
    description: "[ creación de contenidos digitales ]",
    image: starbucks,
    bg: "noir.500",
    color: "isabellina.500",
  },
  {
    title: "Roshfrans",
    description: "[ creación de contenidos digitales ]",
    image: roshfrans,
    bg: "marian.500",
    color: "isabellina.500",
  },
  {
    title: "Trender",
    description: "[ creación de contenidos digitales ]",
    image: trender,
    bg: "alabaster.500",
    color: "primary.900",
  },
];

export const blur = {
  initial: {
    filter: "blur(0px)",
    opacity: 1,
  },
  open: {
    filter: "blur(4px)",
    opacity: 0.9,
    transition: { duration: 0.3 },
  },
  closed: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const translate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (i: any) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i: any) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};
