import React from "react";
import Card from "./Card";
import CardData from "./CardData";

const CardList = () => {
  return (
    <div className="wrapper">
      <section className="cardLayout">
        <ul>
          {CardData.map((CardData) => {
            return (
              <Card
                CardData={CardData}
                key={CardData.id}
                img={CardData.img}
                place={CardData.place}
                level={CardData.level}
                time={CardData.time}
                price={CardData.price}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default CardList;
