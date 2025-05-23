import React from 'react';
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
import '../styles/Footer.css';

const handleSubmit = (e) => {
    e.preventDefault();
    // on pourra envoyer les mails d'inscription newsletter
};

function Footer(props) {
    return (
        <footer>
            <div className={"footer-newsletter"}>
                <h2>Rejoignez la communauté CafThé</h2>
                <p>Recevez nos nouveautés, recettes, conseils et bons plans autour du thé et du café.</p>
                <form onSubmit={handleSubmit} className={"newsletter-form"}>
                    <label htmlFor={"newsletter-email"} className={"sr-only"}>Votre adresse e-mail</label>
                    <input id={"newsletter-email"} type={"email"} placeholder={"Votre adresse e-mail"} required/>
                    <button className={"global-btn-primary"} type={"submit"}>S'inscrire</button>
                </form>
            </div>
            <div className={"footer-wrapper"}>
                <div className={"footer-about"}>
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
                </div>
                <div className={"footer-socials"}>
                    <p>Découvrez les coulisses de CafThé sur nos réseaux</p>
                    <div className={"footer-icons"}>
                        <a href={"https://facebook.com"} target={"_blank"} aria-label={"Facebook"}>
                            <i className="icon facebook"></i>
                        </a>
                        <a href={"https://instagram.com"} target={"_blank"} aria-label={"Instagram"}>
                            <i className={"icon instagram"}></i>
                        </a>
                        <a href={"https://pinterest.com/"} target={"_blank"} aria-label={"Pinterest"}>
                            <i className={"icon pinterest"}></i>
                        </a>
                    </div>
                    <a href={"mailto:cafthe@email.fr"} className={"global-btn-secondary"}>Écrivez-nous</a>
                </div>
            </div>
            <div className={"footer-links"}>
                <Link to={"/cgv"}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >CGV</Link>
                <Link to={"/cgu"}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >CGU</Link>
                <Link to={"/confidentialite"}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >Politique de confidentialité</Link>
                <Link to={"/legals"}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >Mentions légales</Link>
            </div>
        </footer>
    );
}

export default Footer;