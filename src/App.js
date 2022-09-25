import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import "./scss/index.scss";

const App = () => {
  // mouse cursor follow + effects
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 100, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  });

  return (
    <div className="app__wrapper">
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Background />
    </div>
  );
};

export default App;
