import './footer.scss'

import React from 'react';

function Footer(props) {
    return (
        <div className="footerContainer">
            <div className="links">
                <h3 className="partners">Nos Partenaires</h3>
                <ul>
                    <li><a href="a">Banques et courtiers en prêt immobilier</a></li>
                    <li><a href="a">Notaires</a></li>
                    <li><a href="a">Architectes et bureaux d’études</a></li>
                    <li><a href="a">Entreprises de déménagement</a></li>
                    <li><a href="a">Assureurs </a></li>
                    <li><a href="a">Artisans du bâtiment</a></li>
                </ul>
            </div>
            <div className="contact">
                <h3>Nous Contacter</h3>
                <p className="name"><a href="https://maps.app.goo.gl/MyYT7kpWKwEXmbS56" target='_blank'>Mon Agence Immo</a></p>
                <p className="adresse"><a href="https://maps.app.goo.gl/MyYT7kpWKwEXmbS56" target='_blank'>123 rue de Rome</a></p>
                <p className="city"><a href="https://maps.app.goo.gl/MyYT7kpWKwEXmbS56" target='_blank'>75004 PARIS</a></p>
                <p className="tel" ><a href="tel:0102030405">Tél : 01 02 03 04 05</a></p>
            </div>
        </div>
    );
}

export default Footer;