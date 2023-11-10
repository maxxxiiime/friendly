import React, { useEffect, useState, useCallback } from "react";

import logo from "../../assets/3eoeil.png";
import hamburger from "../../assets/navbar/hamburger.svg"
import close from "../../assets/navbar/close.svg"
import "./header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const [showMenu, setShowMenu] = useState(window.innerWidth <= 775 ? false : true);

const handleResize = useCallback(() => {
  setShowMenu(window.innerWidth <= 775 ? false : true);
}, []);

useEffect(() => {
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [handleResize]);

  return (
    <nav className="nav-header">
      <div className="nav-header-content">
      <NavLink to={"/"}><img src={logo} alt="eye logo" className="eye-logo" /></NavLink>

        <div className="navigation-menu">
          <nav>
            <ul className={showMenu ? "show " : "hidden"}>
              <NavLink to={"/portfolio"}>
                <li>{'{ Portfolio }'}</li>
              </NavLink>
              <NavLink to={"/about"}>
                <li>{'{ À Propos }'}</li>
              </NavLink>
              <NavLink to={"/contact"}>
                <li>{'{ Contact }'}</li>
              </NavLink>
            </ul>
          </nav>
        </div>

      </div>

      <button onClick={() => setShowMenu(!showMenu)}
      className={`btn-burger ${window.innerWidth <= 775 ? "show" : ""}`}
      >
      <img 
      className="icon-hamburger"
      src={showMenu ? close : hamburger} alt={showMenu ? "Cacher le menu" : "Montrer le menu"}/>
      </button>
    </nav>
  );
}


