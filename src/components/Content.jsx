import Button from "./Button";

const Content = () => {
  return (
    <div className="main__content--wrapper">
      <div className="main__welcome--text--wrapper">
        <h1>
          <span>Hi, I'm Jesse,</span> <br />
          and I build things.
        </h1>
        <p>
          I'm a <span>front-end engineer</span> specializing in building and
          occasionally designing exceptional digital experiences. Currently, I'm
          focused on building accessible, human-centered products.
        </p>
        <Button
          text="Resume"
          link="https://drive.google.com/file/d/1LXZ_x1cwdsDkj7ttwADafMKHAp_9HSSR/view?usp=sharing"
        />
      </div>
    </div>
  );
};

export default Content;
