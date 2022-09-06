import Button from "./Button";

const Welcome = () => {
  return (
    <div className="main-welcome-wrapper">
      <div className="main-welcome-text-wrapper">
        <h1>
          <span>Hi, I'm Jesse,</span> <br />
          and I build things.
        </h1>
        <p>
          I'm a <span>front-end engineer</span> specializing in building and
          occasionally designing exceptional digital experiences. Currently, I'm
          focused on building accessible, human-centered products.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Welcome;
