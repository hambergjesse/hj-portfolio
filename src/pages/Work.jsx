import { motion } from "framer-motion";

import WorkItems from "../components/WorkItems";

const Work = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, ease: "easeInOut" }}
      animate={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      exit={{
        opacity: 0,
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <main className="main__work--wrapper">
        <div className="main__work--container">
          <WorkItems />
        </div>
      </main>
    </motion.div>
  );
};

export default Work;
