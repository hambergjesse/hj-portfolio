import Background from "./components/Background";
import Content from "./components/Content";
import Header from "./components/Header";
import "./scss/index.scss";

const App = () => {
  return (
    <div className="app__wrapper">
      <Header />
      <Content />
      <Background />
    </div>
  );
};

export default App;
