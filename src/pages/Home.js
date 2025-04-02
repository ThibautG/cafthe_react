import React from 'react';
import ProductList from "./ProductList";
import '../styles/Home.css'

function Home(props) {
    return (
        <section>
            <div className={"wrap-baseline"}>
                <div className={"baseline"}>
                    <h1 >CafThé</h1>
                    <h2 >Des arômes, du sens, des valeurs.</h2>
                </div>
            </div>
            <ProductList routeAPI={"/api/produits/highlighted"}/>
        </section>
    );
}

export default Home;