import React from 'react';
import ProductList from "./ProductList";

function Accessories(props) {
    return (
        <section>
            <h1>Les Accessoires</h1>
            <ProductList routeAPI={"/api/produits/accessoires"}/>
        </section>
    );
}

export default Accessories;