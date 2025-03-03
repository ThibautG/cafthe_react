import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "../styles/Navbar.css";
import {AuthContext} from "../context/AuthContext";

function Navbar(props) {
    const { user, isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate(); // la navigation
    const handleLogout = () => {
        logout();
        navigate("/");
    };
    return (
        <nav>
            <div className={"nav-logo"}><Link to={`/`}>CafThé</Link></div>
            <ul className={"navbar"}>
                <li><Link to={`/produits/cafes`}>Cafés</Link></li>
                <li><Link to={`/produits/thes`}>Thés</Link></li>
                <li><Link to={`/produits/accessoires`}>Accessoires</Link></li>
                <li><Link className={"nav-cart-logo"} to={`/panier`}>{/*Panier*/}</Link></li>
                {/*<li><Link to={`/login`}>Connexion</Link></li>*/}
                <li>
                    {isAuthenticated ? (
                        <>
                            {/*<span>Bonjour {user.prenom} {user.nom}</span>*/}
                            <Link className={"nav-profil-logo"} to={`/profil`}>{/*Profil*/}</Link>
                            <button onClick={handleLogout}>Déconnexion</button>
                        </>
                    ) : (
                        <button><Link to={`/login`}>Connexion</Link></button>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;