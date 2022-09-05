import LogoMark from "../assets/logomark-white.png";
import LogoType from "../assets/logotype-white.png";

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
            <li>Github</li>
          </a>
          <a
            href="https://www.behance.net/hambergjesse"
            target="_blank"
            rel="noreferrer"
          >
            <li>Behance</li>
          </a>
          <a
            href="https://www.linkedin.com/in/hambergjesse/"
            target="_blank"
            rel="noreferrer"
          >
            <li>Linkedin</li>
          </a>
        </ul>
        <div className="nav-contact-button">
          <a
            href="https://www.solo.to/hambergjesse"
            target="_blank"
            rel="noreferrer"
          >
            <li>Contact</li>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
