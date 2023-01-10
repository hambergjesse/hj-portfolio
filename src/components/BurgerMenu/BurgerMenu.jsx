import React, { useState } from "react";

const BurgerMenu = () => {
  const [scrollDisabled, setScrollDisabled] = useState(false);

  const toggleScroll = () => {
    setScrollDisabled(!scrollDisabled);
    document.body.style.overflowY = scrollDisabled ? "auto" : "hidden";
  };

  return (
    <main className="burgermenu__wrapper">
      <input
        type="checkbox"
        id="main-navigation-toggle"
        className="btn btn--close"
        title="Toggle main navigation"
        onClick={toggleScroll}
      />
      <label htmlFor="main-navigation-toggle">
        <span></span>
      </label>
      <nav id="main-navigation" className="nav-main">
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="/about">
              <span>01.</span> About
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/experience">
              <span>02.</span> Experience
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/work">
              <span>03.</span> Work
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/contact">
              <span>04.</span> Contact
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default BurgerMenu;
