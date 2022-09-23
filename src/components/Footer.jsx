import { Link } from "react-router-dom";
import LogoMark from "../assets/logomark-white.png";
import { SocialIcon } from "react-social-icons";

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
        <a
          href="https://github.com/hambergjesse"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon
            fgColor="var(--brand-main-white)"
            bgColor="none"
            network="github"
          />
        </a>
        <a href="https://twitter.com/hambjes" target="_blank" rel="noreferrer">
          <SocialIcon
            fgColor="var(--brand-main-white)"
            bgColor="none"
            network="twitter"
          />
        </a>
        <a
          href="https://mailto:hambergjesse@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon
            fgColor="var(--brand-main-white)"
            bgColor="none"
            network="email"
          />
        </a>
        <a
          href="https://linkedin.com/in/hambergjesse"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon
            fgColor="var(--brand-main-white)"
            bgColor="none"
            network="linkedin"
          />
        </a>
        <a
          href="https://instagram.com/hambergjesse"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon
            fgColor="var(--brand-main-white)"
            bgColor="none"
            network="instagram"
          />
        </a>
      </div>
      <p>© 2022 Jesse Hamberg. All rights reserved.</p>
    </div>
  );
};

export default Footer;
