import React from 'react';
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(props) {
    return (
        <div>
            <ul className={"navbar"}>
                <li><Link to={`/`}>Accueil</Link></li>
                <li><Link to={`/produits/cafes`}>Cafés</Link></li>
                <li><Link to={`/produits/thes`}>Thés</Link></li>
                <li><Link to={`/produits/accessoires`}>Accessoires</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;