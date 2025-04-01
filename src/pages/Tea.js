import React from 'react';
import ProductList from "./ProductList";

function Tea(props) {
    return (
        <section>
            <h1>Les Thés</h1>
            <ProductList routeAPI={"/api/produits/thes"}/>
        </section>
    );
}

export default Tea;