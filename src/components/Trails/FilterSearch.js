import React from "react";
import "./FilterSearch.css";

const FilterSearch = () => {
  return (
    <div className="searchBar-container">
      <form className="searchBar">
        <div className="label-searchBar">
          <label for="name">
            <input type="search" className="form-input" />
          </label>
        </div>
      </form>
      <section className="level">
        <div className="level-all">All</div>
        <div className="level-easy">Easy</div>
        <div className="level-medium">Medium</div>
        <div className="level-hard">Hard</div>
      </section>
    </div>
  );
};

export default FilterSearch;
