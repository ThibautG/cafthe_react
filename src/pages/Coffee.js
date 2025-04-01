import React from 'react';
import ProductList from "./ProductList";

function Coffee(props) {
    return (
        <section>
            <h1>Les Cafés</h1>
            <ProductList routeAPI={"/api/produits/cafes"}/>
        </section>
    );
}

export default Coffee;