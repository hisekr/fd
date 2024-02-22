import React from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./searchBox.css";
import { ThemeContext } from "../../Theme";

const SearchBox = ({ onSearch, inputValue }) => {
  const { theme } = useContext(ThemeContext);

  const valueChange = (e) => {
    onSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={`searchBar ${theme === "dark" ? "dark" : ""}`}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        value={inputValue}
        onChange={valueChange}
        placeholder="Search For A Country..."
      />
    </div>
  );
};

export default SearchBox;
