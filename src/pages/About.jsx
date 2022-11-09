import Button from "../components/Button";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -360, ease: "easeInOut" }}
      animate={{ opacity: 1, x: 0, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1.35,
      }}
      exit={{
        opacity: 0,
        ease: "easeInOut",
        duration: 1.35,
      }}
    >
      <main className="main__about--wrapper">
        <section className="main__about--text--wrapper">
          <h1>
            <span>Hi, I'm Jesse,</span> <br />
            and I build things.
          </h1>
          <p>
            I'm a <span>web developer</span> specializing in building and
            occasionally designing exceptional digital experiences. Currently,
            I'm focused on building accessible, human-centered products.
          </p>
          <h3>Here's what I've been working with recently:</h3>
          <div className="main__about--text--wrapper-list-container">
            <ul className="main__about--text--wrapper-list">
              <li>&#8658; HTML5</li>
              <li>&#8658; CSS3 & SCSS</li>
              <li>&#8658; JavaScript (ES6+)</li>
            </ul>
            <ul className="main__about--text--wrapper-list">
              <li>&#8658; React.js</li>
              <li>&#8658; Node.js</li>
              <li>&#8658; Express.js</li>
            </ul>
          </div>
          <Button
            text="Resume"
            link="https://drive.google.com/file/d/19ss-86Egf04LYXhlcPlmyhq4W4RfLlwz/view?usp=share_link"
          />
        </section>
      </main>
    </motion.div>
  );
};

export default About;
