import { motion } from "framer-motion";
import { SideMenuProps } from "./model";
import { Box } from "@chakra-ui/react";
import MenuBody from "./menuBody/menuBody";

const SideMenu: React.FC<SideMenuProps> = ({ setOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="full-screen-menu"
      onClick={() => setOpen()}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="full-screen-submenu"
      >
        <Box w="100%" h="100vh">
          <Box
            w="100%"
            h="100%"
            display="grid"
            gridTemplateColumns={[
              "1fr 350px",
              "1fr 420px",
              "1fr 500px",
              "1fr 500px",
              "1fr 1fr",
            ]}
          >
            <Box w="100%" bg="transparent" />
            <MenuBody setOpen={() => setOpen()} />
          </Box>
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default SideMenu;
