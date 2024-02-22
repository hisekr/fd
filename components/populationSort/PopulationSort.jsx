import React, { useContext } from "react";
import "./populationSort.css";
import { ThemeContext } from "../../Theme";

const PopulationSort = ({ ascending, decending }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`population-container  ${theme === "dark" ? "dark" : ""}`}>
      Population
      <button className="asc" onClick={ascending}>
        Asc
      </button>
      <button className="desc" onClick={decending}>
        Desc
      </button>
    </div>
  );
};

export default PopulationSort;
