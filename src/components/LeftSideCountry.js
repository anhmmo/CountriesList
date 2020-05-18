import React from "react";

function LeftSideCountry({ item, selectedNumber, inputValue }) {
  let filtedCountry = item.filter((items) =>
    items.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  console.log(selectedNumber);

  if (inputValue.length === 0) {
    selectedNumber = null;
  }

  if (filtedCountry.length <= selectedNumber) {
    selectedNumber = 0;
  }

  if (
    filtedCountry.length > 1 &&
    filtedCountry.length < 11 &&
    typeof selectedNumber === "number"
  ) {
    item = filtedCountry[selectedNumber];
    return (
      <div className="left-side">
        <h1>{item.name}</h1>
        <p>Capital: {item.capital}</p>
        <p>Population: {item.population} </p>
        <h2>languages</h2>
        <ul>
          {item.languages.map((item, i) => (
            <li key={i}>{item.name}</li>
          ))}
        </ul>
        <img style={{ width: 150, height: 150 }} src={item.flag} alt="" />
      </div>
    );
  }

  return <></>;
}

export default LeftSideCountry;
