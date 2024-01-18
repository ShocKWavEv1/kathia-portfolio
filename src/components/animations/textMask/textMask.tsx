import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TextMaskProps } from "./model";

const TextMask: React.FC<TextMaskProps> = ({
  content,
  variant,
  delay,
  color,
}) => {
  const phrases = content;
  const animation = {
    initial: { y: "100%" },
    enter: (i: any) => ({
      y: "0",
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
        delay: delay * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <Box w="100%" ref={ref} className="body">
      {phrases.map((phrase: any, index: any) => {
        return (
          <Box key={phrase} overflow="hidden">
            <motion.div
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              <Heading variant={variant} color={color ? color : "primary.500"}>
                {phrase}
              </Heading>
            </motion.div>
          </Box>
        );
      })}
    </Box>
  );
};

export default TextMask;
