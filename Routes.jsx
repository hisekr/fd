import React from "react";
import App from "./App";
import Header from "./components/header/Header";
import IndividualCountry from "./components/individualCountry/IndividualCountry";
import { Routes, Route } from "react-router-dom";

const RoutesFile = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/country/:cca3" element={<IndividualCountry />} />
      </Routes>
    </>
  );
};

export default RoutesFile;
