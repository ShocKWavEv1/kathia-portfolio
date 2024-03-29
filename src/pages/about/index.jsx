import { customCursor } from " @/constants/constants";
import { Box } from "@chakra-ui/react";
import { useIsTouchDevice } from "@studio-freight/hamo";
import { useEffect } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import AboutMe from "../../components/aboutMe/aboutMe";
import Skills from "../../components/skills/skills";
import { SKILLS } from " @/components/skills/constants";

const About = () => {
  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    isTouchableDevice === false ? customCursor() : {};
  }, [isTouchableDevice]);

  return (
    <Box w="100%" bg="isabellina.500">
      <Box
        w="100%"
        p={[
          "40px 10px 40px 10px",
          "60px 20px 60px 20px",
          "80px 20px 80px 20px",
          "80px 20px 80px 20px",
          "80px 20px 80px 20px",
        ]}
        textAlign="center"
        bg="isabellina.500"
      >
        <PageTitle
          text="Sobre mí"
          variant={[
            "JUMBOXXXSPANGEAREGULAR",
            "JUMBOXXSPANGEAREGULAR",
            "JUMBOXSPANGEAREGULAR",
            "JUMBOXSPANGEAREGULAR",
            "JUMBOSMPANGEAREGULAR",
          ]}
        />
      </Box>
      <AboutMe />
      <Box w="100%" pb={["40px", "60px", "80px", "80px", "80px"]}>
        {SKILLS.map((item, index) => {
          return <Skills key={item.title} skills={item} />;
        })}
      </Box>
    </Box>
  );
};

export default About;
