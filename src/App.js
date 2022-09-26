import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";
import Background from "./components/Background";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import "./scss/index.scss";

const App = () => {
  let location = useLocation();

  return (
    <div className="app__wrapper">
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
      <Background />
    </div>
  );
};

export default App;
