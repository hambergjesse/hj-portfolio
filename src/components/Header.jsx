import LogoMark from "../assets/logomark-white.png";
import LogoType from "../assets/logotype-white.png";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "var(--brand-main-bright)",
  };

  let activeClassName = "underline";

  return (
    <div className="main__header--wrapper">
      <div id="main__header--logo-mark">
        <img src={LogoMark} alt="HJ Logo Mark" />
      </div>
      <div id="main__header--logo-type">
        <img src={LogoType} alt="HJ Logo Type" />
        <ul className="main__header--nav">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>01. About</li>
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <li>02. Experience</li>
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <li>03. Work</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <li>04. Contact</li>
          </NavLink>
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
