import { useState } from "react";
import Background from "./components/Background";
import Content from "./components/Content";
import Header from "./components/Header";
import "./scss/index.scss";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <div className="app__wrapper">
        <Header />
        <Content />
        <Background />
      </div>
    )
  );
};

export default App;
