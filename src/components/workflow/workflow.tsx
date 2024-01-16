import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Stack,
} from "@chakra-ui/react";
import { WorkflowProps } from "./model";
import { motion } from "framer-motion";
import { WORKFLOW } from "./constants";
import Fade from "../animations/fade/fade";

const WorkflowAccordeon: React.FC<WorkflowProps> = ({}) => {
  return (
    <Box
      w="100%"
      p="0px 0px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        p={["0px 30px", "0px 30px", "0px 30px", "0px", "0px"]}
        w={["100%", "100%", "100%", "80%", "70%"]}
        h="auto"
      >
        <Fade delay={0.75} duration={0.45}>
          <Accordion borderColor="primary.500" bg="isabellina.500" allowToggle>
            {WORKFLOW.map((item: any, index: number) => {
              return (
                <AccordionItem
                  position="relative"
                  key={item.title}
                  p="15px 0px"
                >
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton
                          height="54px"
                          _hover={{ bg: "isabellina.500" }}
                        >
                          <Box as="span" flex="1" textAlign="left">
                            <Text
                              variant={[
                                "MDREGULAR",
                                "LGREGULAR",
                                "XLREGULAR",
                                "XLREGULAR",
                                "XLREGULAR",
                                "XLREGULAR",
                              ]}
                              color="primary.500"
                              textTransform="uppercase"
                            >
                              {item.title}
                            </Text>
                          </Box>
                          <motion.div
                            animate={{
                              rotate: isExpanded ? -45 : 0,
                            }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <Text
                              variant="MDLIGHT"
                              fontSize={[
                                "40px",
                                "50px",
                                "54px",
                                "54px",
                                "54px",
                                "54px",
                              ]}
                              color="primary.500"
                            >
                              +
                            </Text>
                          </motion.div>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel p="20px 15px">
                        <Stack dir="column" spacing="10px">
                          {item.items.map((content: any, index: number) => {
                            return (
                              <Text
                                key={content}
                                variant="SMREGULAR"
                                color="primary.500"
                              >
                                {content.description}
                              </Text>
                            );
                          })}
                        </Stack>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion>
        </Fade>
      </Box>
    </Box>
  );
};

export default WorkflowAccordeon;
