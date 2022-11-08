import { Link } from "react-router-dom";
import LogoMark from "../assets/logomark-white.png";
import Socials from "./Socials";

const Footer = () => {
  return (
    <main className="main__footer--wrapper">
      <img src={LogoMark} alt="HJ Logo Mark" />
      <section className="main__footer--container">
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
      </section>
      <section className="main__footer--socials">
        <Socials />
      </section>
      <p>© 2022 Jesse Hamberg. All rights reserved.</p>
    </main>
  );
};

export default Footer;
