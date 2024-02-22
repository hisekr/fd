import React, { useContext, useState } from "react";
import "./searchDropdown.css";
import { ThemeContext } from "../../Theme";

const SearchDropdown = ({ onSearch, options }) => {
  const { theme } = useContext(ThemeContext);

  const regionChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={`dropdown ${theme === "dark" ? "dark" : ""}`}>
      <select onChange={regionChange}>
        <option value="">Filter by Region</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchDropdown;
