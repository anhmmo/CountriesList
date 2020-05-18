import React from "react";

function SearchBox({ change, inputValue }) {
  return (
    <>
      find country
      <input
        onChange={(event) => change(event)}
        value={inputValue}
        type="text"
      />
    </>
  );
}

export default SearchBox;
