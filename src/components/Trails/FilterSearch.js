import React from "react";
import "./FilterSearch.css";
import CardData from "./CardData";

const FilterSearch = ({ filterLevels, allLevel }) => {
  return (
    <div className="searchBar-container">
      <form className="searchBar">
        <div className="label-searchBar">
          <label for="name">
            <input
              type="search"
              className="form-input"
              placeholder="Search Here"
            />
          </label>
        </div>
      </form>
      <section className="level">
        {allLevel.map((curElem) => {
          return (
            <button className="cateAll" onClick={() => filterLevels(curElem)}>
              {curElem}
            </button>
          );
        })}
      </section>
    </div>
  );
};

export default FilterSearch;

//curElem means current elements from the data's first array object containing level attribute
