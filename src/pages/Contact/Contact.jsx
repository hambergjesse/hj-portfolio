import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
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
      <main className="main__contact--wrapper">
        <section className="main__contact--text--wrapper">
          <h1>
            <span>Need some help</span> <br />
            with something?
          </h1>
          <p>
            Turn your writing brain on and tell me everything about the dream
            application you need help building, <span>I'm all ears!</span>
          </p>
        </section>
        <section className="main__contact--form--wrapper">
          <ContactForm />
        </section>
      </main>
    </motion.div>
  );
};

export default Contact;
