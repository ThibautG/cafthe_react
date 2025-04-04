import React from 'react';
import ProductList from "./ProductList";
import '../styles/Products.css';

function Accessories(props) {
    return (
        <section className={"section-products"}>
            <h1 className={"section-products-title"}>Nos Accessoires</h1>
            <p className={"section-products-subtitle"}>L’art de déguster passe aussi par les bons outils.</p>
            <ProductList routeAPI={"/api/produits/accessoires"}/>
        </section>
    );
}

export default Accessories;