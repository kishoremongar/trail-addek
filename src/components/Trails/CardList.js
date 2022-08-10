import React, { useState } from "react";
import Card from "./Card";
import CardData from "./CardData";
import FilterSearch from "./FilterSearch";
import "./CardList.css";

const AllCategory = [
  ...new Set(CardData.map((curElem) => curElem.level)),
  "All",
];
const CardList = ({ trailsData }) => {
  // console.log(trailsData);
  const [items, setItems] = useState(trailsData);
  const [oldItems, setOldItems] = useState(CardData);
  const [allLevel, setAllLevel] = useState(AllCategory);
  const [searchValue, setSearchValue] = useState("");

  const filterLevels = (category, item) => {
    if (category === "All") {
      setItems(CardData);
    } else {
      const updateLevels = CardData.filter((curElem) => {
        return curElem.level === category;
      });
      setItems(updateLevels);
    }
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    let newPlace = [];
    console.log(searchValue);
    for (var i = 0; i < oldItems.length; i++) {
      console.log(oldItems[i].place);
      if (oldItems[i].place.toLowerCase().includes(searchValue.toLowerCase())) {
        newPlace.push(oldItems[i]);
      }
    }
    setItems(newPlace);
  };
  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearchReset = (e) => {
    setSearchValue("");
    setItems(oldItems);
  };
  return (
    <div className="wrapper">
      <div className="searchBar-div">
        <form className="searchBar" onSubmit={handleSearchSubmit}>
          <div className="label-searchBar">
            <label htmlFor="name">
              <input
                type="text"
                className="form-input"
                placeholder="Search Here"
                value={searchValue}
                onChange={(e) => {
                  handleSearchValueChange(e);
                }}
              />
            </label>
          </div>
        </form>
        {searchValue ? (
          <div className="clear-search" onClick={handleSearchReset}>
            X
          </div>
        ) : (
          <></>
        )}
      </div>
      <FilterSearch
        filterLevels={filterLevels}
        allLevel={allLevel}
        setItems={setItems}
      />
      <section className="cardLayout">
        <ul>
          {items.map((CardData) => {
            return (
              <Card
                CardData={CardData}
                key={CardData.id}
                img={CardData.img}
                place={CardData.place}
                level={CardData.level}
                time={CardData.time}
                price={CardData.price}
                cart={CardData.cart}
                id={CardData.id}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default CardList;

//curElem means current elements from the data's first array object containing level attribute
