import { motion } from "framer-motion";

import WorkItems from "../components/WorkItems";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -360, ease: "easeInOut" }}
      animate={{ opacity: 1, x: 0, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1.35,
      }}
      exit={{
        opacity: 0,
        ease: "easeInOut",
        duration: 0.75,
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
