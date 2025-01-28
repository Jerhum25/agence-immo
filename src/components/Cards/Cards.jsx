import Card from "../Card/Card";
import "./cards.scss";

import React from "react";
import ads from "../../data/ads.json";
function Cards(props) {
  console.log(ads.annonces);

  return (
    <div className="cardsContainer">
      {ads.annonces.map(( item, index ) => (
        <Card
          key={index}
          src={item.src}
          alt={item.title}
          title={item.title}
          city={item.city}
          surface={item.surface}
          price={item.price}
          type={item.type}
        />
      ))}
    </div>
  );
}

export default Cards;
