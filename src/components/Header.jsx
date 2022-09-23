import LogoMark from "../assets/logomark-white.png";
import LogoType from "../assets/logotype-white.png";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <div className="main__header--wrapper">
      <div id="main__header--logo-mark">
        <img src={LogoMark} alt="HJ Logo Mark" />
      </div>
      <div id="main__header--logo-type">
        <img src={LogoType} alt="HJ Logo Type" />
        <ul className="main__header--nav">
          <Link to="/">
            <li>01. About</li>
          </Link>
          <Link to="/experience">
            <li>02. Experience</li>
          </Link>
          <Link to="/work">
            <li>03. Work</li>
          </Link>
          <Link to="/contact">
            <li>04. Contact</li>
          </Link>
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
