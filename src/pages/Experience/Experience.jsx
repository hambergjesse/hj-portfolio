import { motion } from "framer-motion";

import ExperienceItems from "./ExperienceItems";

const Experience = () => {
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
      <main className="main__experience--wrapper">
        <div className="main__experience--imagecontainer"></div>
        <div className="main__experience--container">
          <ExperienceItems />
        </div>
      </main>
    </motion.div>
  );
};

export default Experience;
