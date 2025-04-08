import React from 'react';
import '../styles/ProductDetails.css';


function ProductDetails({ produit, onClose, isClosing }) {
    if (!produit) return null;

    return (
        <div className={`product-details-overlay ${isClosing ? 'fade-out' : 'fade-overlay'}`}
             onClick={onClose}>
            <div className={`product-details-modal ${isClosing ? 'fade-out' : 'fade-in'}`}
                 onClick={(e) => e.stopPropagation()}>
                <div className={"product-details-image"}>
                    <img src={produit.url_img_produit} alt={produit.Designation_produit}/>
                </div>
                <div>
                    <h3>{produit.Designation_produit}</h3>
                    <p className={"product-description"}>{produit.Description_produit}</p>
                    <ul className={"product-details-info"}>
                        <li><strong>Conditionnement :</strong> {produit.Type_conditionnement}</li>
                        <li><strong>Prix TTC :</strong> {produit.Prix_ttc_produit}€</li>
                    </ul>
                    <button onClick={onClose}>Fermer</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;