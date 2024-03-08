import { Box, Button, Text } from "@chakra-ui/react";
import { AboutMeProps } from "./model";
import Image from "next/image";
import kath from "../../../public/static/images/new_kath.jpeg";
import Fade from "../animations/fade/fade";

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <Box
      w="100%"
      p="0px 0px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w={["100%", "100%", "100%", "80%", "60%"]}
        display="grid"
        gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr", "1fr 1fr"]}
      >
        <Box p={["0px 30px", "0px 30px", "0px 30px", "0px", "0px"]}>
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems={["center", "center", "center", "flex-end", "flex-end"]}
            justifyContent={[
              "center",
              "center",
              "center",
              "flex-end",
              "flex-end",
            ]}
          >
            <Fade delay={0} duration={1}>
              <Box
                w="100%"
                h="auto"
                p="15px"
                border="2px solid"
                borderColor="primary.500"
                display="flex"
                flexDirection="column"
                mr="25px"
              >
                <Box w="100%" h="100%" bg="primary.500">
                  <Image
                    src={kath}
                    alt={"kath-intro"}
                    placeholder="blur"
                    blurDataURL=""
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                <Box
                  w="100%"
                  h="auto"
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="center"
                  flexDirection="column"
                  p="0px 15px"
                >
                  <Text
                    pt="15px"
                    variant={[
                      "XSREGULAR",
                      "SMREGULAR",
                      "SMREGULAR",
                      "SMREGULAR",
                      "SMREGULAR",
                    ]}
                    color="primary.500"
                  >
                    Senior Copywriter & Creative
                  </Text>
                  <Text
                    variant={[
                      "LGMEDIUM",
                      "XLMEDIUM",
                      "XLMEDIUM",
                      "XLMEDIUM",
                      "XLMEDIUM",
                    ]}
                    color="primary.500"
                  >
                    Kathia Romero Paredes
                  </Text>
                </Box>
              </Box>
            </Fade>
          </Box>
        </Box>
        <Box
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Fade delay={0.75} duration={1}>
            <Box
              w={["100%", "100%", "100%", "100%", "100%"]}
              h="100%"
              display="flex"
              alignItems={[
                "flex-start",
                "flex-start",
                "flex-start",
                "flex-start",
                "flex-start",
              ]}
              justifyContent={[
                "center",
                "center",
                "center",
                "center",
                "center",
              ]}
              flexDirection="column"
              ml={["0px", "0px", "0px", "25px", "25px"]}
              p={["30px", "30px", "30px", "0px", "0px"]}
            >
              <Text variant="MDREGULAR" color="primary.500">
                Me gusta generar ideas punk para el mundo de la creatividad.
                Desde pequeña me gusta crear, ser apasionada y un poco
                perfeccionista.
              </Text>
              <Text pt="10px" variant="MDREGULAR" color="primary.500">
                Tengo experiencia en crear conceptos para campañas de
                temporalidades, parrillas, peloteos para pitches, lines, radios,
                reportes de KPI&apos;S, redacción para blogs, edición de video,
                retoque fotográfico, racionales, manifestos y parte de
                estrategía digital.
              </Text>
              <Text pt="10px" variant="MDREGULAR" color="primary.500">
                Soy muy chill, workaholic, sincera, directa y responsable. Le
                entro a los peloteos y al desmadre creativo.
              </Text>
              <Text pt="10px" variant="MDREGULAR" color="primary.500">
                Let’s work together! 🤘🏼
              </Text>
              <Box pt="20px">
                <a href="/static/pdf/cv_kath.pdf" download>
                  <Button variant="solid" size="sm" colorScheme="primary">
                    <Text variant="SMREGULAR">Descargar CV</Text>
                  </Button>
                </a>
              </Box>
            </Box>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
