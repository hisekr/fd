import { useEffect, useState, useContext } from "react";
import "./App.css";

// import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Loading from "./components/loading/Loading";
import NetworkError from "./components/networkError/NetworkError";
import SearchBox from "./components/searchBox/SearchBox";
import { getRegionAndSubRegion } from "./index";
import SearchDropdown from "./components/searchDropdown/SearchDropdown";
import SubRegionDropdown from "./components/subRegionDropdown/SubRegionDropdown";
import Error from "./components/error/Error";
import PopulationSort from "./components/populationSort/PopulationSort";
import AreaSort from "./components/areaSort/AreaSort";

import { ThemeContext } from "./Theme";

function App() {
  const { theme } = useContext(ThemeContext);

  const [allCountries, setAllCountries] = useState([]);
  const [requiredCountries, setRequiredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [networkFault, setNetworkFault] = useState(false);
  const [inputvalue, setInputvalue] = useState("");
  const [region, setRegion] = useState("");
  const [subRegion, setSubRegion] = useState("");
  const [regionAndSubRegionData, setRegionAndSubRegionData] = useState({});

  //===============================================================

  const API_URl = "https://restcountries.com/v3.1/all";

  const fetchCountriesData = async () => {
    try {
      const res = await fetch(API_URl);
      if (!res.ok) {
        throw new Error("Error occured");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error Occured");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRegionAndSubRegion();
        setRegionAndSubRegionData(data);

        const countriesData = await fetchCountriesData();
        setAllCountries(countriesData);
        setRequiredCountries(countriesData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setNetworkFault(true);
      }
    };

    fetchData();
  }, []);

  //=================================================================

  const searchFunction = (searchValue, regionValue, subRegionValue) => {
    let reqCountries = allCountries.filter((country) =>
      country.name.common.toLowerCase().startsWith(searchValue.toLowerCase())
    );

    if (regionValue) {
      reqCountries = reqCountries.filter(
        (country) => country.region.toLowerCase() === regionValue.toLowerCase()
      );
    }

    if (subRegionValue) {
      reqCountries = reqCountries.filter(
        (country) =>
          country.subregion.toLowerCase() === subRegionValue.toLowerCase()
      );
    }

    setRequiredCountries(reqCountries);
  };

  //================================================================

  const valueChange = (value) => {
    setInputvalue(value);
    searchFunction(value, region, subRegion);
  };

  const regionChange = (value) => {
    setRegion(value);
    searchFunction(inputvalue, value, "");
  };

  const subRegionChange = (value) => {
    setSubRegion(value);
    searchFunction(inputvalue, region, value);
  };
  //================================================================

  function populationAsc() {
    const result = requiredCountries.sort((itemA, itemB) => {
      const valueA = itemA.population;
      const valueB = itemB.population;

      return valueA - valueB;
    });
    setRequiredCountries([...result]);
  }

  function populationDesc() {
    const result = requiredCountries.sort((itemA, itemB) => {
      const valueA = itemA.population;
      const valueB = itemB.population;

      return valueB - valueA;
    });
    setRequiredCountries([...result]);
  }

  //=================================================================

  function AreaAsc() {
    const result = requiredCountries.sort((itemA, itemB) => {
      const valueA = itemA.area;
      const valueB = itemB.area;

      return valueA - valueB;
    });
    setRequiredCountries([...result]);
  }

  function AreaDesc() {
    const result = requiredCountries.sort((itemA, itemB) => {
      const valueA = itemA.area;
      const valueB = itemB.area;

      return valueB - valueA;
    });
    setRequiredCountries([...result]);
  }

  //====================================================================

  // const selCountries = (value) => {
  //   // setSelectedCountries(value);\
  //   console.log(value);
  // };

  //====================================================================

  let content;

  if (loading) {
    if (networkFault) {
      content = <NetworkError />;
    } else {
      content = <Loading />;
    }
  } else if (requiredCountries.length === 0) {
    content = <Error />;
  } else {
    // content = <Card countries={requiredCountries} />;
    content = <Card countries={requiredCountries} />;
  }

  //==================================================================

  return (
    <>
      {/* <Header /> */}

      <div className={`searchSection ${theme === "dark" ? "dark" : ""}`}>
        <SearchBox onSearch={valueChange} />

        <SearchDropdown
          onSearch={regionChange}
          options={Object.keys(regionAndSubRegionData)}
        />

        <SubRegionDropdown
          subregions={regionAndSubRegionData[region]}
          onSearch={subRegionChange}
        />

        <PopulationSort ascending={populationAsc} decending={populationDesc} />
        <AreaSort ascending={AreaAsc} decending={AreaDesc} />
      </div>

      {content}
    </>
  );
}

export default App;
