import React, { useState, useEffect } from "react";

import axios from "axios";

import SearchBox from "./components/SearchBox";
import CountriesList from "./components/CountriesList";

function App() {
  const [countryList, setCountry] = useState([]);
  const [inputValue, setInput] = useState("");
  const [selectedNumber, setNumber] = useState(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const selectCountry = (num) => {
    setNumber(num);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountry(response.data);
    });
  }, []);

  return (
    <div className="App">
      <SearchBox inputValue={inputValue} change={handleChange} />
      <CountriesList
        inputValue={inputValue}
        countryList={countryList}
        selectedNumber={selectedNumber}
        selectCountry={selectCountry}
      />
    </div>
  );
}

export default App;
