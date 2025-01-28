import React from "react";
import "./searchBar.scss";

function SearchBar(props) {
  return (
    <div className="searchBarContainer">
      <h2>Rechercher votre bien</h2>
      <form>
        <div className="city">
          <label htmlFor="city">ville</label>
          <input type="text" id="city" />
        </div>
        <div className="type">
          <label htmlFor="type">type de bien</label>
          <select name="type" id="type">
            <option value=""></option>
            <option value="appartement">appartement</option>
            <option value="maison">maison</option>
          </select>
        </div>
        <div className="pieces">
          <label htmlFor="pieces">nombre de pièces</label>
          <input type="number" min={1} />
        </div>
        <div className="surface">
          <label htmlFor="surface">surface minimum (m²)</label>
          <input type="number" min={0} />
        </div>
        <div className="budget">
          <label htmlFor="budget">budget maximum (€)</label>
          <input type="number" min={0} />
        </div>
        <i className="fas fa-search"></i>
        <div className="searchBtn">Rechercher</div>
      </form>
    </div>
  );
}

export default SearchBar;
