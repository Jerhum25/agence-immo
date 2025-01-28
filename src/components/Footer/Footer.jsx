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
                <p className="name">Mon Agence Immo</p>
                <p className="adresse">123 boulevard de Rome</p>
                <p className="city">75004 PARIS</p>
                <p className="tel">Tél : 01 02 03 04 05</p>
            </div>
        </div>
    );
}

export default Footer;