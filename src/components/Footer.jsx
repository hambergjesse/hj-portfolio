import { NavLink } from "react-router-dom";
import LogoMark from "../assets/logomark-white.webp";
import Socials from "./Socials";

const Footer = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "var(--brand-main-bright" : "var(--brand-main-white",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  const currentYear = new Date().getFullYear();

  return (
    <main className="main__footer--wrapper">
      <img src={LogoMark} alt="HJ Logo Mark" />
      <section className="main__footer--container">
        <ul className="main__footer--nav">
          <li>
            <NavLink
              alt="link to about page"
              className="main__footer--navlink"
              style={navLinkStyles}
              to="/about"
            >
              01. About
            </NavLink>
          </li>
          <li>
            <NavLink
              alt="link to experience page"
              className="main__footer--navlink"
              style={navLinkStyles}
              to="/experience"
            >
              02. Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              alt="link to work page"
              className="main__footer--navlink"
              style={navLinkStyles}
              to="/work"
            >
              03. Work
            </NavLink>
          </li>
          <li>
            <NavLink
              alt="link to contact page"
              className="main__footer--navlink"
              style={navLinkStyles}
              to="/contact"
            >
              04. Contact
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="main__footer--socials">
        <Socials />
      </section>
      <p>© {currentYear} Jesse Hamberg. All rights reserved.</p>
    </main>
  );
};

export default Footer;
