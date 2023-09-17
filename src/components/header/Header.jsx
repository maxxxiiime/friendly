import React, { useEffect } from "react";
import logo from "../../assets/kasa-logo.svg";
import "./header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nav-header">
      <div className="nav-header-content">
      <NavLink to={"/"}><img src={logo} alt="kasa logo" className="kasa-logo" /></NavLink>

        <div className="navigation-menu">
          <nav>
            <ul>
              <NavLink to={"/portfolio"}>
                <li>Portfolio</li>
              </NavLink>
              <NavLink to={"/about"}>
                <li>À Propos</li>
              </NavLink>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  );
}

export default Header;
