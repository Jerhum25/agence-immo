import React from "react";
import "./banner.scss";

function Banner(props) {
  return (
    <div className="bannerContainer">
      <img src="./img/banner.webp" alt="banner" />
      <div className="filter"></div>
      <h2>Confiez-nous votre projet</h2>
    </div>
  );
}

export default Banner;
