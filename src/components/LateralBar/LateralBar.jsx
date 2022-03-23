import React from "react";
import { Link } from "react-router-dom";
import "./LateralBar.styles.css";
import Logo from "../../assets/logo-white.png";
import LogoBlue from "../../assets/logo-blue.png";

const LateralBar = ({ secondary }) => {
  return (
    <aside className={`lateralBar ${secondary ? "barBlue" : "barWhite"}`}>
      <Link to="/">
        <img src={secondary ? Logo : LogoBlue} alt="Logo" />
      </Link>
    </aside>
  );
};

export default LateralBar;
