import LogoMark from "../assets/logomark-white.png";
import LogoType from "../assets/logotype-white.png";
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
    <div className="main__header--wrapper">
      <div id="main__header--logo-mark">
        <img src={LogoMark} alt="HJ Logo Mark" />
      </div>
      <div id="main__header--logo-type">
        <img src={LogoType} alt="HJ Logo Type" />
        <nav className="main__header--nav">
          <NavLink style={navLinkStyles} exact to="/about">
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
          link="https://drive.google.com/file/d/1LXZ_x1cwdsDkj7ttwADafMKHAp_9HSSR/view?usp=sharing"
        />
      </div>
    </div>
  );
};

export default Header;
