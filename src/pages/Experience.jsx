import { motion } from "framer-motion";

import ExperienceItems from "../components/ExperienceItems";

const Experience = () => {
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
