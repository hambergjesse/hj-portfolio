import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./scss/index.scss";

const App = () => {
  return (
    <div className="app__wrapper">
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
