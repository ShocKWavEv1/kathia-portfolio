import { customCursor } from " @/constants/constants";
import { Box } from "@chakra-ui/react";
import { useIsTouchDevice } from "@studio-freight/hamo";
import { useEffect } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import WorkflowAccordeon from "../../components/workflow/workflow";

const Workflow = () => {
  const isTouchableDevice = useIsTouchDevice();

  useEffect(() => {
    window.scroll({ top: 0 });
    isTouchableDevice === false ? customCursor() : {};
  }, [isTouchableDevice]);

  return (
    <Box w="100%" bg="isabellina.500">
      <Box
        w="100%"
        p={[
          "80px 20px 60px 20px",
          "80px 20px 60px 20px",
          "80px 20px 80px 20px",
          "80px 20px 80px 20px",
          "80px 20px 80px 20px",
        ]}
        textAlign="center"
        bg="isabellina.500"
      >
        <PageTitle
          text="Workflow"
          variant={[
            "JUMBOXXXSPANGEAREGULAR",
            "JUMBOXXSPANGEAREGULAR",
            "JUMBOXSPANGEAREGULAR",
            "JUMBOXSPANGEAREGULAR",
            "JUMBOSMPANGEAREGULAR",
          ]}
        />
      </Box>
      <Box w="100%" pb="80px" bg="isabellina.500">
        <WorkflowAccordeon />
      </Box>
    </Box>
  );
};

export default Workflow;
