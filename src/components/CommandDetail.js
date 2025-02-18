import React, {useEffect, useState} from 'react';
import "../styles/CommandDetail.css"
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function CommandDetail(props) {
    const {id} = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                // route get détail d'une commande avec son id
                const response = await axios.get(`http://localhost:3001/api/commandes/${id}`);
                setDetail(response.data);
            } catch (error) {
                console.error("Erreur de chargement de la commande", error);
            }
        };

        void fetchDetail();
    }, [id]);

    /*console.log(detail)*/

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
            </div>
        </div>
    );
}

export default CommandDetail;