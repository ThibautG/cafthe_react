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
            <ul className={"navbar"}>
                <li><Link to={`/`}>CafThé</Link></li>
                <li><Link to={`/produits/cafes`}>Cafés</Link></li>
                <li><Link to={`/produits/thes`}>Thés</Link></li>
                <li><Link to={`/produits/accessoires`}>Accessoires</Link></li>
                {/*<li><Link to={`/login`}>Connexion</Link></li>*/}
                <li>
                    {isAuthenticated ? (
                        <>
                            <span>Bonjour {user.prenom} {user.nom}</span>
                            <Link to={`/profil`}>Mon Profil</Link>
                            <button onClick={handleLogout}>Se déconnecter</button>
                        </>
                    ) : (
                        <Link to={`/login`}>Se Connecter</Link>
                    )}

                </li>
            </ul>
        </nav>
    );
}

export default Navbar;