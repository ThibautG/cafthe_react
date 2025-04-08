import React from 'react';
import "../styles/LegalPages.css";

function MentionsLegales(props) {
    return (
        <section className="global-section legal-page">
            <h1 className="global-section-title">Mentions légales</h1>
            <p className="global-section-subtitle">
                Informations relatives à l’édition et à l’hébergement du site CafThé.
            </p>

            <div className="legal-page-content">
                <h2>1. Éditeur du site</h2>
                <p>
                    Le présent site est édité par :<br/>
                    <strong>Thibaut GAUDINAT</strong><br/>
                    Contact : <a href="mailto:cafthe@email.fr">cafthe@email.fr</a><br/>
                    Site : <a
                    href="https://cafthe.thibaut.gaudinat.dev-campus.fr/">cafthe.thibaut.gaudinat.dev-campus.fr</a>
                </p>

                <h2>2. Responsable de la publication</h2>
                <p>
                    Thibaut GAUDINAT – en qualité de créateur et administrateur du site.
                </p>

                <h2>3. Hébergement</h2>
                <p>
                    Le site est hébergé par :<br/>
                    <strong>CCI Campus Centre</strong><br/>
                    16 Place Saint Cyran, 36000 Châteauroux<br/>
                    Téléphone : 02 54 57 25 25
                </p>

                <h2>4. Propriété intellectuelle</h2>
                <p>
                    L’ensemble des contenus présents sur le site CafThé (textes, visuels, recettes, conseils, etc.)
                    sont la propriété exclusive de leur auteur ou ont été utilisés avec une licence appropriée.
                    Les polices, pictogrammes et images proviennent de sources telles que :
                    <ul>
                        <li><a href="https://fr.freepik.com" target="_blank" rel="noreferrer">Freepik</a></li>
                        <li><a href="https://fontello.com" target="_blank" rel="noreferrer">Fontello</a></li>
                        <li><a href="https://www.dafont.com/fr/" target="_blank" rel="noreferrer">Dafont</a></li>
                        <li><a href="https://fonts.google.com/" target="_blank" rel="noreferrer">Google Fonts</a></li>
                    </ul>
                    Toute reproduction ou réutilisation non autorisée est interdite.
                </p>

                <h2>5. Responsabilité technique</h2>
                <p>
                    CafThé s’efforce d’offrir une disponibilité optimale du site 24h/24 et 7j/7.
                    Toutefois, des interruptions temporaires peuvent survenir pour maintenance ou mise à jour.
                    En cas de bug, d’erreur ou de problème technique, vous pouvez nous contacter à l’adresse <a
                    href="mailto:cafthe@email.fr">cafthe@email.fr</a>.
                </p>

                <h2>6. Données personnelles</h2>
                <p>
                    Certaines informations personnelles (nom, prénom, adresse email, téléphone, adresse postale)
                    sont collectées lors de l’inscription ou de la commande. Ces données sont utilisées uniquement
                    pour assurer le bon fonctionnement du service (commande, livraison, support) et ne sont ni vendues,
                    ni transmises à des tiers sans consentement préalable.<br/><br/>
                    Aucune donnée n’est exploitée à des fins de marketing ou de profilage.
                    Le site est sécurisé via certificat SSL, et les mots de passe sont protégés via chiffrement
                    (bcrypt).
                </p>
            </div>
        </section>
    );
}

export default MentionsLegales;