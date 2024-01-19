// BLACK & WHITE
import bw from "../../public/static/images/portfolio/bw/main.jpeg";
import bw_2 from "../../public/static/images/portfolio/bw/2.jpeg";
import bw_3 from "../../public/static/images/portfolio/bw/3.jpeg";
import bw_4 from "../../public/static/images/portfolio/bw/4.png";
import bw_5 from "../../public/static/images/portfolio/bw/5.png";
import bw_6 from "../../public/static/images/portfolio/bw/6.png";
import bw_7 from "../../public/static/images/portfolio/bw/7.png";
// CHILLIS
import chillis from "../../public/static/images/portfolio/chillis/main.jpeg";
import chillis_2 from "../../public/static/images/portfolio/chillis/2.jpeg";
import chillis_3 from "../../public/static/images/portfolio/chillis/3.jpeg";
import chillis_4 from "../../public/static/images/portfolio/chillis/4.jpeg";
import chillis_5 from "../../public/static/images/portfolio/chillis/5.jpeg";
import chillis_6 from "../../public/static/images/portfolio/chillis/6.jpeg";
import chillis_7 from "../../public/static/images/portfolio/chillis/7.jpeg";
//CIELITO
import cielito from "../../public/static/images/portfolio/cielito/main.jpeg";
import cielito_2 from "../../public/static/images/portfolio/cielito/2.png";
import cielito_3 from "../../public/static/images/portfolio/cielito/3.png";
import cielito_4 from "../../public/static/images/portfolio/cielito/4.jpeg";
import cielito_5 from "../../public/static/images/portfolio/cielito/5.jpeg";
import cielito_6 from "../../public/static/images/portfolio/cielito/6.png";
import cielito_7 from "../../public/static/images/portfolio/cielito/7.png";
//STARBUCKS
import starbucks from "../../public/static/images/portfolio/starbucks/main.jpg";
import starbucks_2 from "../../public/static/images/portfolio/starbucks/2.jpeg";
import starbucks_3 from "../../public/static/images/portfolio/starbucks/3.png";
import starbucks_4 from "../../public/static/images/portfolio/starbucks/4.png";
import starbucks_5 from "../../public/static/images/portfolio/starbucks/5.jpeg";
import starbucks_6 from "../../public/static/images/portfolio/starbucks/6.jpeg";
//ROSHFRANS
import roshfrans from "../../public/static/images/portfolio/roshfrans/main.jpeg";
import roshfrans_2 from "../../public/static/images/portfolio/roshfrans/2.jpeg";
import roshfrans_4 from "../../public/static/images/portfolio/roshfrans/4.jpeg";
import roshfrans_5 from "../../public/static/images/portfolio/roshfrans/5.jpeg";
import roshfrans_6 from "../../public/static/images/portfolio/roshfrans/6.jpeg";
//TRENDER
import trender from "../../public/static/images/portfolio/trender/main.jpeg";
import trender_2 from "../../public/static/images/portfolio/trender/2.jpeg";
import trender_3 from "../../public/static/images/portfolio/trender/3.jpeg";
import trender_4 from "../../public/static/images/portfolio/trender/4.jpeg";
import trender_5 from "../../public/static/images/portfolio/trender/5.jpeg";
import trender_6 from "../../public/static/images/portfolio/trender/6.jpeg";
import trender_7 from "../../public/static/images/portfolio/trender/7.jpeg";

export const PORTFOLIO = [
  {
    title: "Black & White",
    slug: "black-&-white",
    next_project: "chillis",
    next_project_title: "Chillis",
    card: {
      subtitle: "[ creación de contenidos digitales ]",
      image_main: bw,
      bg: "primary.900",
      color: "isabellina.500",
    },
    details: {
      images: [bw, bw_2, bw_3, bw_4, bw_6, bw_7, bw_5],
      description:
        "Creación de parrillas, estrategias anuales, planes de trabajo, shootings, temporalidades y elaboración de conceptos.",
    },
  },
  {
    title: "Chilli's",
    slug: "chillis",
    next_project: "cielito-querido-cafe",
    next_project_title: "Cielito Querido Café",
    card: {
      subtitle: "[ creación de contenidos digitales ]",
      image_main: chillis,
      bg: "primary.500",
      color: "isabellina.500",
    },
    details: {
      images: [
        chillis,
        chillis_2,
        chillis_3,
        chillis_4,
        chillis_5,
        chillis_6,
        chillis_7,
      ],
      description:
        "Creación de parrillas mensuales, conceptos de temporalidad, sport bar, shootings, pautas, naming de margarita del mes, creación de radios y campañas.",
    },
  },
  {
    title: "Cielito Querido Café",
    slug: "cielito-querido-cafe",
    next_project_title: "Starbucks",
    next_project: "starbucks",
    card: {
      subtitle: "[ creación de contenidos digitales ]",
      image_main: cielito,
      bg: "secondary.500",
      color: "primary.900",
    },
    details: {
      images: [
        cielito,
        cielito_2,
        cielito_3,
        cielito_4,
        cielito_5,
        cielito_6,
        cielito_7,
      ],
      description:
        "Fotografía, retoque digital, parrillas mensuales, copies, programación de contenido, conceptos, presentaciones, racionales, manifestos y reportes de KPI’s.",
    },
  },
  {
    title: "Starbucks",
    slug: "starbucks",
    next_project: "roshfrans",
    next_project_title: "Roshfrans",
    card: {
      subtitle: "[ creación de contenidos digitales ]",
      image_main: starbucks,
      bg: "noir.500",
      color: "isabellina.500",
    },
    details: {
      images: [
        starbucks,
        starbucks_2,
        starbucks_3,
        starbucks_4,
        starbucks_5,
        starbucks_6,
      ],
      description:
        "Creación de parrillas, conceptos de temporada, pautas, ideas creativas para Tiktok,  presentaciones, racionales y manifestos.",
    },
  },
  {
    title: "Roshfrans",
    slug: "roshfrans",
    next_project: "trender",
    next_project_title: "Trender",
    card: {
      subtitle: "[ creación de contenidos digitales ]",
      image_main: roshfrans,
      bg: "marian.500",
      color: "isabellina.500",
    },
    details: {
      images: [roshfrans, roshfrans_2, roshfrans_4, roshfrans_5, roshfrans_6],
      description:
        "Creación de parrillas, programación de contenido, responding en redes, presentaciones de KPI’s mensuales, creación de radios y copies.",
    },
  },
  {
    title: "Trender",
    slug: "trender",
    next_project: "black-&-white",
    next_project_title: "Black & White",
    card: {
      subtitle: "[ creación de contenidos digitales ]",
      image_main: trender,
      bg: "alabaster.500",
      color: "primary.900",
    },
    details: {
      images: [
        trender,
        trender_2,
        trender_3,
        trender_4,
        trender_5,
        trender_6,
        trender_7,
      ],
      description:
        "Fotografía, retoque, lanzamiento de producto, campañas de temporada, parrillas, programación de contenido, contenido para TikTok, responding de redes, reportes semanales de KPI’s.",
    },
  },
];

export const findPortfolioItemBySlug = (slug: string) => {
  return PORTFOLIO.find((item) => item.slug === slug) ?? undefined;
};
