import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, ease: "easeInOut" }}
      animate={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
      }}
      exit={{
        ease: "easeInOut",
        duration: 0.75,
      }}
    ></motion.div>
  );
};

export default Work;
