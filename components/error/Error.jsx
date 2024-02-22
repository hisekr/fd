import React, { useContext } from "react";
import "./error.css";
import { ThemeContext } from "../../Theme";

const Error = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`errorPage ${theme === "dark" ? "dark" : ""}`}>
      <h1>No Countries Found!</h1>
    </div>
  );
};

export default Error;
