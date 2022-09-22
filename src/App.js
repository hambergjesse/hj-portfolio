import Carousel from "nuka-carousel";
import Background from "./components/Background";
import About from "./components/About";
import Header from "./components/Header";
import "./scss/index.scss";

const App = () => {
  const carouselFrame = {
    width: "100%",
    height: "100%",
    padding: "0",
  };

  return (
    <div className="app__wrapper">
      <Header />
      <Carousel
        withoutControls="true"
        wrapAround="true"
        style={carouselFrame}
        scrollMode="remainder"
        slidesToShow="1"
        adaptiveHeight="true"
        speed="1250"
      >
        <About />
      </Carousel>
      <Background />
    </div>
  );
};

export default App;
