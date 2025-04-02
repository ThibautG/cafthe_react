import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "../styles/ProductCard.css"
import {CartContext} from "../context/CartContext";

function ProductCard({produit}) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className={"product-card"}>
            <div className={"product-image"}>
                <img src={produit.url_img_produit} alt={produit.Designation_produit}/>
            </div>
            <div className={"product-info"}>
                <h3>{produit.Designation_produit}</h3>
                <p>{produit.Description_courte_produit}</p>
            </div>
            <div className={"product-price"}>
                <p>{produit.Type_conditionnement}</p>
                <p>{produit.Prix_ttc_produit} €</p>
            </div>
            <div className={"product-btn"}>
                <button onClick={() => addToCart(produit) }>Ajouter au panier</button>
                <p><Link to={`/produit/${produit.Identifiant_produit}`} className={"details-btn"}>
                    Voir détails
                </Link></p>
            </div>
        </div>
    );
}

export default ProductCard;