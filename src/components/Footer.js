import React from 'react';
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <footer>
            <section className={"footer-newsletter"}>
                <h2>Rejoignez la communauté CafThé</h2>
                <p>Recevez nos nouveautés, recettes, conseils & bons plans autour du thé et du café.</p>
                <form className={"newsletter-form"}>
                    <input type={"email"} placeholder={"Votre adresse e-mail"} required/>
                    <button type={"submit"}>S'inscrire</button>
                </form>
            </section>
            <section className={"footer-about"}>
                <p>
                    Depuis 2015, CafThé s'engage à vous offrir une expérience unique autour des meilleurs cafés
                    et thés du monde. Notre histoire commence dans une petite boutique du centre-ville, portée
                    par la passion de faire découvrir des arômes d'exception.
                </p>
                <p>
                    Notre engagement pour la qualité et le développement durable nous a permis de tisser
                    des liens privilégiés avec des producteurs respectueux de l'environnement et des
                    communautés locales. Chaque tasse raconte une histoire, celle d'un savoir-faire ancestral
                    et d'une quête permanente d'excellence.
                </p>
            </section>
            <div className={"footer-socials"}>
                <a href={"https://facebook.com"} target={"_blank"} rel={"noopener noreferrer"} aria-label={"Facebook"}>
                    <i className="icon facebook"></i>
                </a>
                <a href={"https://x.com/"} target={"_blank"} rel={"noopener noreferrer"} aria-label={"Twitter"}>
                    <i className={"icon twitter"}></i>
                </a>
                <a href={"https://instagram.com"} target={"_blank"} rel={"noopener noreferrer"} aria-label={"Instagram"}>
                    <i className={"icon instagram"}></i>
                </a>
            </div>
            <div className={"footer-links"}>
                <Link to={"/faq"}>FAQ</Link>
                <Link to={"/cgv"}>CGV</Link>
                <Link to={"/cgu"}>CGU</Link>
                <Link to={"/rgpd"}>RGPD</Link>
                <Link to={"/legals"}>Mentions légales</Link>
            </div>
        </footer>
    );
}

export default Footer;