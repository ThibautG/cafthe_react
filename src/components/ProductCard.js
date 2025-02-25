import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "../styles/ProductCard.css"
import {CartContext} from "../context/CartContext";

function ProductCard({produit}) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className={"product-card"}>
            {/* image */}
            <h3>{produit.Designation_produit}</h3>
            <p>{produit.Prix_ttc_produit}</p>
            <button onClick={() => addToCart(produit) }>Ajouter au panier</button>
            <Link to={`/produit/${produit.Identifiant_produit}`} className={"details-btn"}>
                Voir détails
            </Link>
        </div>
    );
}

export default ProductCard;