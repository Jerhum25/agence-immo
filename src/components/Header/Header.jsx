import React from "react";
import "./header.scss";

function Header(props) {
    function toggleMenu(e) {
      const nav = document.querySelector("nav");
    e.preventDefault();
    if(window.innerWidth < 768){
        nav.classList.toggle("visible");

    }else{}
  }

  return (
    <div className="headerContainer">
      <div className="logo">
        <p>MonAgence.fr</p>
      </div>
      <nav>
        <p onClick={toggleMenu}>accueil</p>
        <p onClick={toggleMenu}>vente</p>
        <p onClick={toggleMenu}>location</p>
        <p onClick={toggleMenu}>contact</p>
        <div className="user">
          <p onClick={toggleMenu}>s'enregistrer</p>
          <p onClick={toggleMenu}>se connecter</p>
        </div>
      </nav>
      <div className="burgerMenu" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}

export default Header;
