import React from 'react';
import ProductList from "./ProductList";
import '../styles/Home.css'
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <React.Fragment>
            <section className={"home-highlights"}>
                <div className={"wrap-baseline"}>
                    <div className={"baseline"}>
                        <h1>"CafThé"</h1>
                        <h2>"Des arômes, du sens, des valeurs."</h2>
                    </div>
                </div>
                {/*<h2 className="highlights-title">Nos coups de coeur</h2>*/}
                <ProductList routeAPI={"/api/produits/highlighted"}/>
            </section>
            <section className={"home-articles"}>
                <header className={"header-articles"}>
                    <h2>Nos derniers articles</h2>

                    <div className={"wrapper-all-news"}>
                        <Link className={"global-btn-secondary"} to={"#"}>Voir toutes les actualités</Link>
                    </div>

                </header>
                <div className={"articles-list"}>
                    <div className={"articles-big"}>
                        <article>
                            <h3>Méthodes d’extraction du café : Guide pour choisir la meilleure</h3>
                            <span className={"tag"}>CAFÉ - 17/03/2022</span>
                        </article>
                        <article>
                            <h3>L’art de l’infusion du thé : Techniques et astuces</h3>
                            <span className={"tag"}>THÉ - 17/03/2022</span>
                        </article>
                    </div>
                    <div className={"articles-small"}>
                        <article>
                            <h3>Comment conserver son café et son thé pour une fraîcheur optimale</h3>
                            <span className={"tag"}>CONSERVATION - 17/03/2022</span>
                        </article>
                        <article>
                            <h3>D’où vient votre café ? Rencontre avec nos producteurs partenaires</h3>
                            <span className={"tag"}>HISTOIRE - 17/03/2022</span>
                        </article>
                        <article>
                            <h3>Les différentes moutures de café et comment les utiliser</h3>
                            <span className={"tag"}>CAFÉ - 17/03/2022</span>
                        </article>
                    </div>
                </div>
            </section>
            <section className={"home-quiz"}>
                <h2>Quiz : Quel produit est fait pour vous ?</h2>
                <Link className={"global-btn-secondary"} to={"#"}>Faire le quiz</Link>
            </section>
        </React.Fragment>
    );
}

export default Home;