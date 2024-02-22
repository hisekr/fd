import React, { useEffect, useState } from "react";
import "./individualCountry.css";
import { useNavigate, useParams } from "react-router-dom";

const IndividualCountry = () => {
  const navigate = useNavigate();

  const [searchCountry, setSearchCountry] = useState(null);

  const { cca3 } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
      .then((res) => {
        if (!res.ok) {
          console.log("Error");
        }
        return res.json();
      })
      .then((data) => {
        setSearchCountry(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(searchCountry);

  return (
    <div>
      {searchCountry && (
        <div className="individual-country">
          <button className="individual-button" onClick={() => navigate(-1)}>
            Go Back
          </button>
          <div className="individual-details">
            <img src={searchCountry[0].flags.png} alt="" />
            <div className="individual-detail">
              <h1 className="name">{searchCountry[0].name.common}</h1>
              <div className="details">
                <div className="details-left">
                  <div>
                    <strong>Native Name:</strong>
                  </div>
                  <div>
                    <strong>Population:</strong>
                  </div>
                  <div>
                    <strong>Region:</strong>
                  </div>
                  <div>
                    <strong>SubRegion:</strong>
                  </div>
                  <div>
                    <strong>Capital:</strong>
                  </div>
                </div>
                <div className="details-right">
                  <div>
                    <strong>Currency</strong>
                  </div>
                </div>
              </div>
              <div>Border Countries</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualCountry;
