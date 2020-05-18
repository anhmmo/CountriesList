import React from "react";

import LeftSideCountry from "./LeftSideCountry";
import Weather from "./Weather";

function CountriesList({
  inputValue,
  countryList,
  selectedNumber,
  selectCountry,
}) {
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
      return (
        <div className="country-box">
          <div>
            <h1>{filtedCountry[0].name}</h1>
            <p>Capital: {filtedCountry[0].capital}</p>
            <p>Population: {filtedCountry[0].population} </p>
            <h2>languages</h2>

            <ul>
              {filtedCountry[0].languages.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
            <img
              style={{ width: 150, height: 150 }}
              src={filtedCountry[0].flag}
              alt=""
            />
            <Weather capital={filtedCountry[0].capital} />
          </div>
        </div>
      );
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
