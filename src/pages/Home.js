import React from 'react';
import ProductList from "./ProductList";

function Home(props) {
    return (
        <section>
            <h1>“CafThé"<br/>"Des arômes, du sens, des valeurs.”</h1>
            <ProductList routeAPI={"/api/produits/highlighted"} />
        </section>
    );
}

export default Home;