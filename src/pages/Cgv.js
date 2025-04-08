import React from 'react';
import "../styles/LegalPages.css";

function Cgv(props) {
    return (
        <section className="global-section legal-page">
            <h1 className="global-section-title">Conditions Générales de Vente</h1>
            <p className="global-section-subtitle">Bienvenue chez CafThé. Voici tout ce qu’il faut savoir avant de
                passer commande.</p>

            <div className="legal-page-content">
                <h2>1. Champ d’application</h2>
                <p>
                    Les présentes Conditions Générales de Vente s’appliquent à toutes les commandes passées sur notre
                    site <strong>cafthe.thibaut.gaudinat.dev-campus.fr</strong> par des particuliers résidant en France.
                </p>

                <h2>2. Produits et disponibilité</h2>
                <p>
                    Tous les produits proposés sont disponibles à la vente tant qu’ils sont affichés sur le site. Si un
                    produit est momentanément en rupture, il restera visible mais non commandable. Aucune alerte de
                    retour en stock n’est proposée pour le moment.
                </p>

                <h2>3. Commande</h2>
                <p>
                    Une fois votre panier validé, vous serez invité à vérifier vos informations personnelles, votre
                    adresse de livraison, puis à confirmer la commande. Actuellement, le paiement en ligne n’est pas
                    encore activé : la commande est donc simulée uniquement.
                    Pour les retraits en boutique, le paiement se fait directement sur place.
                </p>

                <h2>4. Livraison</h2>
                <p>
                    Les livraisons sont assurées uniquement en France. Le délai moyen est estimé à quelques jours ouvrés
                    après traitement de la commande. <strong>Aucune livraison gratuite</strong> n’est prévue, sauf
                    indication exceptionnelle. Le retrait en boutique est, quant à lui, gratuit.
                </p>

                <h2>5. Droit de rétractation & retours</h2>
                <p>
                    Vous disposez d’un délai de 14 jours pour retourner un produit, à condition qu’il n’ait pas été
                    ouvert ou utilisé. Les remboursements sont effectués dans un délai raisonnable après réception et
                    vérification du colis.
                </p>

                <h2>6. Service client</h2>
                <p>
                    Pour toute question, notre équipe se tient à votre disposition par mail à <a
                    href="mailto:cafthe@email.fr">cafthe@email.fr</a>. Nous nous engageons à répondre sous 1 jour
                    ouvré en moyenne.
                </p>

                <h2>7. Litiges</h2>
                <p>
                    En cas de litige, une solution amiable sera toujours privilégiée. À défaut, les tribunaux français
                    seront seuls compétents.
                </p>
            </div>
        </section>
    );
}

export default Cgv;