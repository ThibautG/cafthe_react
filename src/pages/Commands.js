import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/Commands.css"

function Commands(props) {
    const user = JSON.parse(localStorage.getItem('user')); // on récupère les infos user dans localStorage

    const [commands, setCommands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/commandes/clients/${user.id}`);
                setCommands(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits", error);
            } finally {
                setIsLoading(false); /* on arrête d'afficher les éléments de chargement (squelette)*/
            }
        };

        void fetchProduits();
    }, []);
    console.log(commands !== [])
    console.log(commands)

    return (
            <div>
                <h3>Vos commandes</h3>
                <div className={"command-list"}>
                    {commands.map((command) => (
                        <div className={"command"}>
                            <p>Identifiant commande : {command.Identifiant_commande}</p>
                            <p>Date commande : {command.Date_commande}</p>
                            <p>Montant TTC commande : {command.Montant_ttc_commande}€</p>
                            <Link to={`/commandes/${command.Identifiant_commande}`} className={"details-btn"}>
                                Voir détails
                            </Link>
                        </div>)
                    )}
                </div>

            <Link to={`/profil`} className={"details-btn"}>
                Voir mon profil
            </Link>

            <Link to={`/`} className={"details-btn"}>
                Retour à l'accueil
            </Link>
        </div>

    );
}

export default Commands;