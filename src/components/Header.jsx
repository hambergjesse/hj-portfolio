import LogoMark from "../assets/logomark-white.webp";
import LogoType from "../assets/logotype-white.webp";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "var(--brand-main-bright" : "var(--brand-main-white",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <main className="main__header--wrapper">
      <section id="main__header--logo-mark">
        <img src={LogoMark} alt="HJ Logo Mark" />
      </section>
      <section id="main__header--logo-type">
        <img src={LogoType} alt="HJ Logo Type" />
        <nav className="main__header--nav">
          <NavLink style={navLinkStyles} to="/about">
            01. About
          </NavLink>
          <NavLink style={navLinkStyles} to="/experience">
            02. Experience
          </NavLink>
          <NavLink style={navLinkStyles} to="/work">
            03. Work
          </NavLink>
          <NavLink style={navLinkStyles} to="/contact">
            04. Contact
          </NavLink>
        </nav>
        <Button
          text="Resume"
          link="https://drive.google.com/file/d/19ss-86Egf04LYXhlcPlmyhq4W4RfLlwz/view?usp=share_link"
        />
      </section>
    </main>
  );
};

export default Header;
