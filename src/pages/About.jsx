import Button from "../components/Button";

const Content = () => {
  return (
    <div>
      <div className="main__content--wrapper">
        <div className="main__welcome--text--wrapper">
          <h1>
            <span>Hi, I'm Jesse,</span> <br />
            and I build things.
          </h1>
          <p>
            I'm a <span>web developer</span> specializing in building and
            occasionally designing exceptional digital experiences. Currently,
            I'm focused on building accessible, human-centered products.
          </p>
          <h3>Here's what I've been working with recently:</h3>
          <div className="main__welcome--text--wrapper-list-container">
            <ul className="main__welcome--text--wrapper-list-1">
              <li>&#8658; HTML</li>
              <li>&#8658; CSS & SCSS</li>
              <li>&#8658; JavaScript (ES6+)</li>
            </ul>
            <ul className="main__welcome--text--wrapper-list-2">
              <li>&#8658; React.js</li>
              <li>&#8658; Node.js</li>
              <li>&#8658; Express.js</li>
            </ul>
          </div>
          <Button
            text="Resume"
            link="https://drive.google.com/file/d/1LXZ_x1cwdsDkj7ttwADafMKHAp_9HSSR/view?usp=sharing"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;