import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Contact = () => {
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
      className="main__contact--wrapper"
    >
      <div className="main__contact--text--wrapper">
        <h1>
          <span>Need some help</span> <br />
          with something?
        </h1>
        <p>
          Turn your writing brain on and tell me everything about the dream
          application you need help building, <span>I'm all ears!</span>
        </p>
      </div>
      <div className="main__contact--form--wrapper">
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
