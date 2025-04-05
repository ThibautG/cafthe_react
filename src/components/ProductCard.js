import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import "../styles/ProductCard.css"
import {CartContext} from "../context/CartContext";
import ProductDetails from "./ProductDetails";

function ProductCard({produit}) {
    const { addToCart } = useContext(CartContext);
    const [showDetails, setShowDetails] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowDetails(false);
            setIsClosing(false);
        }, 300);
    };

    return (
        <>
            <div className={"product-card"}>
                <div className={"product-image"}>
                    <img src={produit.url_img_produit} alt={produit.Designation_produit}/>
                </div>
                <div className={"product-content"}>
                    <div className={"product-info"}>
                        <h3>{produit.Designation_produit}</h3>
                        <p>{produit.Description_courte_produit}</p>
                    </div>
                    <div className={"product-price"}>
                        <p>{produit.Type_conditionnement}</p>
                        <p>{produit.Prix_ttc_produit} €</p>
                    </div>
                    <div className={"product-btn"}>
                        <button onClick={() => addToCart(produit) }>Acheter</button>
                        <p>
                            <button
                                className={"details-btn"}
                                onClick={() => setShowDetails(true)}
                                style={{background: "none", border: "none", padding: 0, font: "inherit", cursor: "pointer"}}>
                                Voir détails
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            {showDetails && (
                <ProductDetails
                    produit={produit}
                    onClose={handleClose}
                    isClosing={isClosing}
                />
            )}
        </>
    );
}

export default ProductCard;