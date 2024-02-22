import React, { useContext } from "react";
import "./areaSort.css";
// import { ThemeContext } from "../../Theme";

const PopulationSort = ({ ascending, decending }) => {
  //   const { theme } = useContext(ThemeContext);

  return (
    <div className={`area-container `}>
      Area
      <button className="asc" onClick={ascending}>
        Asc
      </button>
      <button className="desc" onClick={decending}>
        Dec
      </button>
    </div>
  );
};

export default PopulationSort;
