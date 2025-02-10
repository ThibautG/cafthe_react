import React from 'react';

function ProductCard({produit}) {
    return (
        <div className={"product-card"}>
            {/* image */}
            <h3>{produit.Designation_produit}</h3>
            <p>{produit.Prix_ttc_produit}</p>
        </div>
    );
}

export default ProductCard;