import React from "react";

import axios from "axios";

import LeftSideCountry from "./LeftSideCountry";

function CountriesList({
  inputValue,
  countryList,
  selectedNumber,
  selectCountry,
}) {
  const feElement = (data) => {
    console.log(
      `Current temperature in ${data.location.name} is ${data.current.temperature}℃`
    );

    return (
      <div>
        Current temperature in ${data.location.name} is $
        {data.current.temperature}℃
      </div>
    );
  };

  const weatherBox = (city) => {
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=2b889ecb932a35ed186d772e59ae8e84&query=" +
          city
      )
      .then((response) => {
        const apiResponse = response.data;
        feElement(apiResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let listView;

  if (inputValue.length > 0) {
    let filtedCountry = countryList.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (filtedCountry.length < 11 && filtedCountry.length > 1) {
      if (filtedCountry.length <= selectedNumber) {
        selectedNumber = 0;
      }
      let listView2 = filtedCountry.map((item, index) => (
        <React.Fragment key={index}>
          <p key={index}>
            {item.name}
            <button
              className={selectedNumber === index ? "active" : ""}
              key={index}
              onClick={() => selectCountry(index)}
            >
              show
            </button>
          </p>
        </React.Fragment>
      ));
      listView = <div className="right-side">{listView2}</div>;
    } else if (filtedCountry.length < 1) {
      listView = <p>not found</p>;
    } else if (filtedCountry.length === 1) {
      let listView2;
      weatherBox(filtedCountry[0].capital);

      listView2 = filtedCountry.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <p>Capital: {item.capital}</p>
          <p>Population: {item.population} </p>
          <h2>languages</h2>
          <ul>
            {item.languages.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
          <img style={{ width: 150, height: 150 }} src={item.flag} alt="" />
        </div>
      ));

      listView = listView2;
    } else {
      listView = <p>Too many match, specify other filter</p>;
    }
  } else {
    listView = "";
  }
  return (
    <div className="country-box">
      {listView}
      <LeftSideCountry
        item={countryList}
        selectedNumber={selectedNumber}
        inputValue={inputValue}
        selectCountry={selectCountry}
      />
    </div>
  );
}

export default CountriesList;
