import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Commands.css"

function Commands({id, onSelectCommand}) {
    const { token } = useContext(AuthContext);

    const [commands, setCommands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                // route get de toutes les commandes d'un client
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/commandes/clients/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                    );
                setCommands(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits", error);
            } finally {
                setIsLoading(false); /* on arrête d'afficher les éléments de chargement (squelette)*/
            }
        };

        void fetchProduits();
    }, [id]);
    /*console.log(commands !== [])
    console.log(commands)*/

    if (isLoading) {
        return (
            <div className="section-commande">
                <p>Chargement de vos commandes...</p>
            </div>
        );
    }


    if (!commands || commands.length === 0) {
        return (
            <div className={"section-commande"}>
                <p>Vous n'avez encore passé aucune commande chez nous.
                    Mais il n’est jamais trop tard pour découvrir nos produits !</p>
                <Link to={`/`} className="global-link">
                    Explorer la boutique
                </Link>
            </div>
        )
    }

    return (
            <div className={"section-command"}>
                <h2 className={"section-command-title"}>Vos commandes</h2>
                <p className={"section-command-subtitle"}>Nombre total de commandes : {commands.length}</p>
                <div className={"command-list"} >
                    {commands.map((command) => (
                        <div className={"command-card"} key={command.Identifiant_commande}>
                            <div className={"command-card-id"}>
                                <p><strong>Commande #{command.Identifiant_commande}</strong></p>
                                <p>
                                    <button
                                        className={"global-link command-card-link global-no-button"}
                                        onClick={() => onSelectCommand(command.Identifiant_commande)}
                                    >
                                        Voir détails
                                    </button>
                                </p>
                            </div>
                            <div className={"command-card-date"}>
                                <p><strong>Date
                                    :</strong> {command.Date_commande ? command.Date_commande.split('T')[0] : 'Date inconnue'}
                                </p>
                                <p><strong>Statut :</strong> {command.Statut_commande}</p>
                            </div>
                            <div className={"command-card-price"}>
                                <p><strong>Montant :</strong> {command.Montant_ttc_commande}€</p>
                                <p><strong>Type :</strong> {command.Type_commande}</p>
                            </div>
                        </div>)
                    )}
                </div>


        </div>

    );
}

export default Commands;