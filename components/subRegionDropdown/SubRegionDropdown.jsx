import React, { useContext } from "react";
import "./subRegionDropdown.css";
import { ThemeContext } from "../../Theme";

const SubRegionDropdown = ({ subregions = [], onSearch }) => {
  const { theme } = useContext(ThemeContext);

  const subregionChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={`dropdown ${theme === "dark" ? "dark" : ""}`}>
      <select onChange={subregionChange}>
        <option value="">Filter by SubRegion</option>
        {subregions.map((subregion) => (
          <option key={subregion} value={subregion}>
            {subregion}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubRegionDropdown;
