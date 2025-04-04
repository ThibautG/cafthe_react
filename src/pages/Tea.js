import React from 'react';
import ProductList from "./ProductList";
import '../styles/Products.css';

function Tea(props) {
    return (
        <section className={"section-products"}>
            <h1 className={"section-products-title"}>Nos Thés</h1>
            <p className={"section-products-subtitle"}>Un voyage entre traditions et découvertes, à chaque infusion.</p>
            <ProductList routeAPI={"/api/produits/thes"}/>
        </section>
    );
}

export default Tea;