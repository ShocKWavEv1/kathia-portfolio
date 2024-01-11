import { Box, Text } from "@chakra-ui/react";
import { SkillsProps } from "./model";
import Fade from "../animations/fade/fade";

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Fade delay={0.25} duration={0.45}>
      <Box
        mt={["60px", "60px", "60px", "80px", "80px"]}
        p={["0px 30px", "0px 30px", "0px 30px", "0px", "0px"]}
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w={["100%", "100%", "100%", "80%", "60%"]}
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box
            borderBottom="1px solid"
            borderBottomColor="primary.500"
            w="100%"
            textAlign="left"
            p="10px 0px"
          >
            <Text
              variant="XXLREGULAR"
              color="primary.500"
              textTransform="uppercase"
            >
              {skills.title}
            </Text>
          </Box>
          {skills.skills.map((item: any, index: number) => {
            return (
              <Box
                key={item.label}
                w="100%"
                display="grid"
                p="10px 0px"
                borderBottom="1px solid"
                borderBottomColor="primary.500"
                gridTemplateColumns={[
                  "auto 1fr",
                  "auto 1fr",
                  "1fr 1fr",
                  "1fr 1fr",
                  "1fr 1fr",
                ]}
              >
                <Box
                  w="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Text
                    variant={[
                      "SMREGULAR",
                      "SMREGULAR",
                      "MDREGULAR",
                      "MDREGULAR",
                      "MDREGULAR",
                    ]}
                    color="primary.500"
                  >
                    {item.label}
                  </Text>
                </Box>
                <Box
                  w="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Text
                    variant={[
                      "SMREGULAR",
                      "SMREGULAR",
                      "MDREGULAR",
                      "MDREGULAR",
                      "MDREGULAR",
                    ]}
                    color="primary.500"
                  >
                    {item.value}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Fade>
  );
};

export default Skills;
