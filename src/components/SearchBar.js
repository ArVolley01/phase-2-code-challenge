import React from "react";

function SearchBar({filter, setSorting}) {
  return (
    <div className="search">
      <input type="text" className="searchTerm" onChange={(e) => filter(e.target.value)}/>
      <label htmlFor="sort">Sort</label>
      <input type="checkbox" id="sort" name="sort" onChange={() => setSorting()}></input>
    </div>
  );
}

export default SearchBar;
