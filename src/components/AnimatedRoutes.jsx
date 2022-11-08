import { Routes, Route, useLocation } from "react-router-dom";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  let location = useLocation();

  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route exact="true" path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;