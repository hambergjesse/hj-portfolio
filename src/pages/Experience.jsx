import { motion } from "framer-motion";

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
        <h1>My past and current experience.</h1>
        <section className="main__experience--sect">
          <h2>
            Full Stack Developer <span>@ Virittämö Helsinki</span>
          </h2>
        </section>
        <section className="main__experience--sect">
          <h2>
            Web Development Intern <span>@ Digitalents Academy</span>
          </h2>
        </section>
        <section className="main__experience--sect">
          <h2>
            Graphic Designer <span>@ ESE Entertainment</span>
          </h2>
        </section>
        <section className="main__experience--sect">
          <h2>
            Junior Designer <span>@ K1CK Esports</span>
          </h2>
        </section>
      </main>
    </motion.div>
  );
};

export default Experience;
