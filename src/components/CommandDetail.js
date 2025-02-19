import React, {useEffect, useState} from 'react';
import "../styles/CommandDetail.css"
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

function CommandDetail(props) {
    const {id} = useParams();

    const [detail, setDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                // route get détail d'une commande avec son id
                const response = await axios.get(`http://localhost:3001/api/commandes/${id}`);
                setDetail(response.data);
            } catch (error) {
                console.error("Erreur de chargement de la commande", error);
            } finally {
                setIsLoading(false); /* on arrête d'afficher les éléments de chargement (squelette)*/
            }
        };

        void fetchDetail();
    }, [id]);


    console.log(detail)

    if (isLoading) {
        return (
            <div className={"product-list"}>
                {Array.from({length: detail.length}).map((_, i) => (
                    <div key={i} className={"product-skeleton"}>
                        {/* image */}
                        <Skeleton height={200} width={300}/>

                        <div style={{marginTop: "10px"}}>
                            <Skeleton height={20} width={"70%"}/>
                        </div>

                        <div style={{marginTop: "10px"}}>
                            <Skeleton height={20} width={"40%"}/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (!detail || detail.length === 0) {
        return <p>La commande est vide ou inexistante.</p>;
    }


    return (
        <div>
            <h3>Détail de la commande numéro {id}</h3>
            <div className={"command-list"}>
                {detail.map((item) => (
                    <div className={"command"}>
                        <p>Designation : {item.Designation_produit}</p>
                        <p>Quantité : {item.Quantite_produit_ligne_commande}</p>
                        <p>Conditionnement : {item.Type_conditionnement}</p>
                        <p>Prix unitaire TTC : {item.Prix_unitaire_ttc_produit_ligne_commande}€</p>
                        <p>Prix total TTC : {item.Prix_unitaire_ttc_produit_ligne_commande * item.Quantite_produit_ligne_commande}€</p>
                    </div>)
                )}
                <div className={"command"}>
                    <p>Date commande : {detail[0].Date_commande}</p>
                    {/*on utilise premier objet présent dans detail[] car la date et le total sont les mêmes partout*/}
                    <p>Montant total commande TTC : {detail[0].Montant_ttc_commande}€</p>
                    <p>Statut de la commande : {detail[0].Statut_commande}</p>
                    <p>Type de commande : {detail[0].Type_commande}</p>
                </div>

                {/*<Link to={`/commandes/clients/${user.id}`} className={"details-btn"}>
                    retour aux commandes
                </Link>*/}
            </div>
        </div>
    );
}

export default CommandDetail;