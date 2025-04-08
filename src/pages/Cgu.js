import React from 'react';
import "../styles/LegalPages.css";

function Cgu(props) {
    return (
        <section className="global-section legal-page">
            <h1 className="global-section-title">Conditions Générales d’Utilisation</h1>
            <p className="global-section-subtitle">Bienvenue chez CafThé – votre pause douceur, en toute sérénité.</p>

            <div className="legal-page-content">
                <h2>1. Objet</h2>
                <p>
                    Les présentes Conditions Générales d’Utilisation (CGU) ont pour objet de définir les modalités de
                    mise à disposition des services du site CafThé et les règles d’usage par l’utilisateur.
                    En naviguant sur le site, l’utilisateur reconnaît avoir pris connaissance des présentes CGU et les
                    accepter sans réserve.
                </p>

                <h2>2. Accès au site</h2>
                <p>
                    Le site CafThé est accessible 24h/24 et 7j/7, sauf en cas de maintenance programmée ou de force
                    majeure. Nous mettons tout en œuvre pour garantir une navigation fluide et une disponibilité
                    optimale de notre plateforme.
                </p>

                <h2>3. Création de compte</h2>
                <p>
                    Pour commander ou accéder à certains services, l’utilisateur peut créer un compte personnel. Il
                    s’engage à fournir des informations exactes et à jour.
                    Toute tentative de fraude, de création de comptes multiples non autorisée ou d’utilisation abusive
                    entraînera la suspension du compte.
                </p>

                <h2>4. Comportement des utilisateurs</h2>
                <p>
                    CafThé est un espace bienveillant, conçu pour les amateurs de thé, de café et de bons moments.
                    Ainsi, toute utilisation abusive, irrespectueuse ou contraire aux lois en vigueur est interdite.
                    Nous vous invitons à rester courtois dans vos échanges et à utiliser le site de façon responsable et
                    respectueuse.
                </p>

                <h2>5. Propriété intellectuelle</h2>
                <p>
                    L’ensemble des contenus présents sur le site (textes, images, illustrations, polices, logo, etc.)
                    sont protégés par les droits de propriété intellectuelle.
                    Les images proviennent du site <a href="https://fr.freepik.com" target="_blank"
                                                      rel="noreferrer">Freepik</a>, les icônes de <a
                    href="https://fontello.com/" target="_blank" rel="noreferrer">Fontello</a>, les polices de <a
                    href="https://www.dafont.com/fr/" target="_blank" rel="noreferrer">Dafont</a> et <a
                    href="https://fonts.google.com/" target="_blank" rel="noreferrer">Google Fonts</a>.
                    Toute reproduction, même partielle, des éléments du site est interdite sans autorisation préalable.
                </p>

                <h2>6. Responsabilités</h2>
                <p>
                    Nous nous efforçons de vous offrir une expérience fluide et sans accroc. Cependant, CafThé ne
                    saurait être tenu pour responsable en cas d’erreurs ponctuelles, de bugs ou d’interruptions
                    indépendantes de notre volonté.
                </p>

                <h2>7. Évolutions des CGU</h2>
                <p>
                    CafThé se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront
                    informés des éventuelles mises à jour lors de leur visite sur le site.
                </p>

                <h2>8. Contact</h2>
                <p>
                    Pour toute question concernant les CGU, n’hésitez pas à nous écrire à <a
                    href="mailto:cafthe@email.fr">cafthe@email.fr</a>.
                </p>
            </div>
        </section>
    );
}

export default Cgu;