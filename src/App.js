import AnimatedRoutes from "./components/AnimatedRoutes";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./scss/index.scss";

const App = () => {
  return (
    <div className="app__wrapper">
      <Header />
      <AnimatedRoutes />
      <Footer />
      <Background />
    </div>
  );
};

export default App;
