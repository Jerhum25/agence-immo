import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import Copyright from "../../components/Coryright/Copyright";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./accueil.scss";

import React from "react";

function Accueil(props) {
  return (
    <div className="accueilContainer">
      <Header />
      <Banner />
      <SearchBar/>
      <Cards/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default Accueil;
