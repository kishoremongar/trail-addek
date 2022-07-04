import React from "react";
import "./FilterSearch.css";

const FilterSearch = ({ filterLevels, allLevel }) => {
  return (
    <div className="searchBar-container">
      <section className="level">
        {allLevel.map((curElem, index) => {
          return (
            <button
              className="cateAll"
              onClick={() => filterLevels(curElem)}
              key={index}
            >
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
