import { Link } from "react-router-dom";
import LogoMark from "../assets/logomark-white.png";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="main__footer--wrapper">
      <img src={LogoMark} alt="HJ Logo Mark" />
      <div className="main__footer--container">
        <ul className="main__footer--nav">
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
      </div>
      <div className="main__footer--socials">
        <Socials />
      </div>
      <p>© 2022 Jesse Hamberg. All rights reserved.</p>
    </div>
  );
};

export default Footer;
