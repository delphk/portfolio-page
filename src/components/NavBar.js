import Scrollchor from "react-scrollchor";
import "./NavBar.css";

import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <Scrollchor to="#landingpage" className="navbar-link">
        Home
      </Scrollchor>
      <Scrollchor to="#portfolio" className="navbar-link">
        Portfolio
      </Scrollchor>

      <Scrollchor to="#contact" className="navbar-link">
        Contact
      </Scrollchor>
    </div>
  );
};

export default NavBar;
