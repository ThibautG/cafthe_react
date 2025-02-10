import React from 'react';
import {Link} from "react-router-dom";

function ProductCard({produit}) {
    return (
        <div className={"product-card"}>
            {/* image */}
            <h3>{produit.Designation_produit}</h3>
            <p>{produit.Prix_ttc_produit}</p>
            <Link to={`/produit/${produit.Identifiant_produit}`} className={"details-btn"}>
                Voir détails
            </Link>
        </div>
    );
}

export default ProductCard;