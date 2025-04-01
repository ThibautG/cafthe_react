import React from 'react';
import ProductList from "./ProductList";

function Home(props) {
    return (
        <section>
            <h1>Bienvenue la Team</h1>
            <ProductList routeAPI={"/api/produits"} />
        </section>
    );
}

export default Home;