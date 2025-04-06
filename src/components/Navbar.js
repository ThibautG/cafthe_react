import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "../styles/Navbar.css";
import {AuthContext} from "../context/AuthContext";
import {CartContext} from "../context/CartContext";

function Navbar(props) {
    const { user, isAuthenticated, logout } = useContext(AuthContext);
    const { cart, deleteCart, totalItems, totalPriceTTC } = useContext(CartContext);
    const navigate = useNavigate(); // la navigation
    const handleLogout = () => {
        logout();
        navigate("/");
        deleteCart();
    };
    return (
        <nav>
            <div className={"nav-logo"}><Link to={`/`}>CafThé</Link></div>
            <ul className={"navbar"}>
                <li className={"navbar-links"}><Link to={`/produits/cafes`}>Cafés</Link></li>
                <li className={"navbar-links"}><Link to={`/produits/thes`}>Thés</Link></li>
                <li className={"navbar-links"}><Link to={`/produits/accessoires`}>Accessoires</Link></li>

                <li className={"navbar-button"}>
                    {isAuthenticated ? (
                        <>
                            <div className={"nav-icons"}>
                                <Link className={"nav-cart-logo"} to={`/panier`} aria-label={"Panier"}>
                                    <div className={"cart-icon-container"}>
                                        <span className={"cart-icon"}></span>
                                        {totalItems > 0 && (
                                            <span className={"cart-item"}>{totalItems}</span>
                                        )}
                                    </div>
                                </Link>
                                <Link className={"nav-profil-logo"} to={`/profil`} aria-label={"Profil"}></Link>
                            </div>
                            <button onClick={handleLogout}>Déconnexion</button>
                        </>
                    ) : (
                        <Link to={`/login`} className={"navbar-login-btn"}>Connexion</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;