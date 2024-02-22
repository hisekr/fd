import React, { useContext } from "react";
import "./card.css";
import { ThemeContext } from "../../Theme";
import { useNavigate } from "react-router-dom";

const Card = ({ countries, region }) => {
  const { theme } = useContext(ThemeContext);
  // const filteredCountry = countries.filter((country) => {
  //   return !region || region === country.region;
  // });
  const navigate = useNavigate();

  return (
    <div className={`country-component ${theme === "dark" ? "dark" : ""}`}>
      {countries &&
        countries.map((country) => {
          return (
            <div
              className="card-container"
              key={country.name.common}
              onClick={() => navigate(`country/${country.cca3}`)}
            >
              <img src={country.flags.svg} alt="flag" className="flag" />
              <div
                className={`country-details ${theme === "dark" ? "dark" : ""}`}
              >
                <div className="country-name">{country.name.common}</div>
                <div>
                  <div className="country-population">
                    <b>Population: </b>
                    {country.population}
                  </div>
                  <div className="country-region">
                    <b>Region: </b>
                    {country.region}
                  </div>
                  <div className="country-capital">
                    <b>Capital:</b> {country.capital}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
