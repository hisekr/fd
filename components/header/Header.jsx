import React, { useContext } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../Theme";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme === "dark" ? "dark" : ""}`}>
      <div className="header">Where in the world?</div>
      <div className="darkMode-section" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faMoon} />
        <div className="darkMode">Dark Mode</div>
      </div>
    </div>
  );
};

export default Navbar;
