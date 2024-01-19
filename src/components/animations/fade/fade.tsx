import { motion } from "framer-motion";
import { FadeProps } from "./model";

const Fade: React.FC<FadeProps> = ({
  children,
  delay,
  duration,
  triggerOnce = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: triggerOnce }}
      transition={{ delay: delay, duration: duration }}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
