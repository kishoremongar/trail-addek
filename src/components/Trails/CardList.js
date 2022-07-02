import React, { useState } from "react";
import Card from "./Card";
import CardData from "./CardData";
import FilterSearch from "./FilterSearch";

const AllCategory = [
  ...new Set(CardData.map((curElem) => curElem.level)),
  "All",
];
const CardList = () => {
  const [items, setItems] = useState(CardData);
  const [allLevel, setAllLevel] = useState(AllCategory);
  const filterLevels = (category) => {
    if (category === "All") {
      setItems(CardData);
      return;
    }
    const updateLevels = CardData.filter((curElem) => {
      return curElem.level === category;
    });
    setItems(updateLevels);
  };
  return (
    <div className="wrapper">
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
