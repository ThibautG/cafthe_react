import React from 'react';
import "../styles/LegalPages.css";

function PrivacyPolicy(props) {
    return (
        <section className="global-section legal-page">
            <h1 className="global-section-title">Politique de confidentialité</h1>
            <p className="global-section-subtitle">Parce que votre confiance est sacrée, voici comment nous traitons vos
                données.</p>

            <div className="legal-page-content">
                <h2>1. Données collectées</h2>
                <p>Lors de la création de votre compte sur CafThé, nous collectons uniquement les informations
                    nécessaires pour le bon déroulement de votre expérience :</p>
                <ul>
                    <li>Nom et prénom</li>
                    <li>Adresse e-mail</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale</li>
                </ul>

                <h2>2. Cookies et suivi</h2>
                <p>Actuellement, CafThé n'utilise pas de cookies, ni de solutions d’analyse comportementale telles que
                    Google Analytics. Nous respectons votre tranquillité et votre navigation.</p>

                <h2>3. Newsletter</h2>
                <p>Un formulaire d'inscription à notre newsletter est présent sur le site, mais les adresses saisies ne
                    sont pas encore stockées. Lorsque ce sera le cas, elles seront utilisées uniquement pour vous
                    envoyer nos actualités, bons plans et recettes.</p>

                <h2>4. Partage des données</h2>
                <p>Vos données personnelles ne sont en aucun cas vendues ou partagées avec des tiers sans votre
                    consentement. En cas de commande avec paiement en ligne, certaines informations pourront être
                    transmises à notre futur prestataire de paiement sécurisé (ex: PayPal).</p>

                <h2>5. Hébergement du site</h2>
                <p>Le site est hébergé par :</p>
                <p>
                    CCI Campus Centre <br/>
                    16 Place Saint Cyran, 36000 Châteauroux <br/>
                    Téléphone : 02 54 57 25 25
                </p>

                <h2>6. Sécurité des données</h2>
                <p>Nous mettons tout en œuvre pour protéger vos données :</p>
                <ul>
                    <li>Connexion sécurisée (certificat SSL - HTTPS)</li>
                    <li>Authentification via jetons JWT</li>
                    <li>Mots de passe cryptés avec Bcrypt</li>
                </ul>

                <h2>7. Vos droits</h2>
                <p>Vous pouvez à tout moment :</p>
                <ul>
                    <li>Modifier vos informations personnelles depuis votre profil client</li>
                    <li>Demander la suppression de votre compte en nous contactant à l’adresse suivante : <a
                        href="mailto:cafthe@email.fr">cafthe@email.fr</a></li>
                </ul>

                <h2>8. Durée de conservation</h2>
                <p>Vos données sont conservées tant que votre compte est actif. Aucune suppression automatique n’est
                    prévue pour les comptes inactifs, mais cela pourrait évoluer.</p>

                <h2>9. Âge minimum requis</h2>
                <p>L'utilisation du site CafThé est réservée aux personnes âgées de 16 ans et plus. En créant un compte,
                    vous certifiez avoir l'âge requis.</p>

                <h2>10. Modifications de la politique</h2>
                <p>Cette politique de confidentialité peut être mise à jour à tout moment. En cas de changement majeur,
                    une notification pourra vous être adressée via votre adresse e-mail.</p>

                <p>Dernière mise à jour : avril 2025</p>
            </div>
        </section>
    );
}

export default PrivacyPolicy;