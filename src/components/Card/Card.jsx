import "./card.scss";

import React from "react";

function Card({ src, alt, title, city, surface, price, type }) {
  return (
    <div className="cardContainer">
      <div className="photo">
        <img src={src} alt={alt} />
      </div>
      <h3>{title}</h3>
      <h4>à {city}</h4>
      <p className="surface">Surface : {surface} m²</p>
      <p className="budget">{type === "location" ? `Prix : ${price}€ / mois` : `Prix : ${price}€`} </p>
    </div>
  );
}

export default Card;
