import Button from "../../components/Button";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -360, ease: "easeInOut" }}
      animate={{ opacity: 1, x: 0, ease: "easeInOut" }}
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
      <main className="main__about--wrapper">
        <section className="main__about--text--wrapper">
          <h1>
            <span>Hi, I'm Jesse,</span> <br />
            and I build things.
          </h1>
          <p>
            I'm a <span>full-stack developer</span> specializing in building and
            occasionally designing exceptional digital experiences. Currently,
            I'm focused on building accessible, customer-centered products.
          </p>
          <h2>Here's what I've been working with recently:</h2>
          <div className="main__about--text--wrapper-list-container">
            <ul className="main__about--text--wrapper-list">
              <li>&#8658; React.js</li>
              <li>&#8658; TypeScript (ES6+)</li>
              <li>&#8658; Node.js</li>
            </ul>
            <ul className="main__about--text--wrapper-list">
              <li>&#8658; Express.js</li>
              <li>&#8658; MongoDB</li>
              <li>&#8658; Adobe CC</li>
            </ul>
          </div>
          <Button
            alt="link to Jesse Hamberg's resume."
            text="Resume"
            link="https://drive.google.com/file/d/1tKTSsdklMKn-cAJlXoD0RANnonbh9GXx/view?usp=share_link"
          />
        </section>
      </main>
    </motion.div>
  );
};

export default About;
