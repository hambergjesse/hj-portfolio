import LogoMark from "../assets/logomark-white.png";
import LogoType from "../assets/logotype-white.png";
import Button from "./Button";

const Header = () => {
  return (
    <div className="main-header-wrapper">
      <div id="logo-mark">
        <img src={LogoMark} alt="HJ Logo Mark" />
      </div>
      <div id="logo-type">
        <img src={LogoType} alt="HJ Logo Type" />
        <ul className="main-header-nav">
          <a
            href="https://www.github.com/hambergjesse"
            target="_blank"
            rel="noreferrer"
          >
            <li>01. About</li>
          </a>
          <a
            href="https://www.behance.net/hambergjesse"
            target="_blank"
            rel="noreferrer"
          >
            <li>02. Experience</li>
          </a>
          <a
            href="https://www.linkedin.com/in/hambergjesse/"
            target="_blank"
            rel="noreferrer"
          >
            <li>03. Work</li>
          </a>
          <a
            href="https://solo.to/hambergjesse"
            target="_blank"
            rel="noreferrer"
          >
            <li>04. Contact</li>
          </a>
        </ul>
        <Button
          text="Resume"
          link="https://drive.google.com/file/d/1LXZ_x1cwdsDkj7ttwADafMKHAp_9HSSR/view?usp=sharing"
        />
      </div>
    </div>
  );
};

export default Header;
