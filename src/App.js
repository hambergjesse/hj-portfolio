import Background from "./components/Background";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import "./scss/index.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Background />
    </div>
  );
};

export default App;
