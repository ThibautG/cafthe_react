import React from 'react';
import ProductList from "./ProductList";
import '../styles/Products.css';

function Coffee(props) {
    return (
        <section className={"section-products"}>
            <h1 className={"section-products-title"}>Nos Cafés</h1>
            <p className={"section-products-subtitle"}>Des arômes venus d’ailleurs, sélectionnés avec soin.</p>
            <ProductList routeAPI={"/api/produits/cafes"}/>
        </section>
    );
}

export default Coffee;