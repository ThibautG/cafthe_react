import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";


function Profil(props) {
    const user = JSON.parse(localStorage.getItem('user'))

    const [infos, setInfos] = useState({}); // pour récupérer les infos du client afin d'afficher
    const [loading, setLoading] = useState(true); // Pour savoir si les données sont en cours de chargement
    const [error, setError] = useState(null);

    // on récupère les 3 champs input
    const [inputValueMail, setInputValueMail] = useState(infos.Mail_client || "");
    const [inputValueTelephone, setInputValueTelephone] = useState(infos.Telephone_client || "");
    const [inputValueAdresse, setInputValueAdresse] = useState(infos.Adresse_client || "");

    // fonction à appeler sur onChange du champ input pour stocker valeur
    const handleInputChangeMail = (e) => {
        setInputValueMail(e.target.value);
    };
    const handleInputChangeTelephone = (e) => {
        setInputValueTelephone(e.target.value);
    };
    const handleInputChangeAdresse = (e) => {
        setInputValueAdresse(e.target.value);
    };

    // fonction pour le onClick du bouton
    const handleInfoMail = () => {
        console.log("Valeur de l'inputMail :", inputValueMail);


    };

    const handleInfoTelephone = async () => {
        /*console.log("Valeur de l'inputTelephone :", inputValueTelephone);*/
        try {
            const response = await axios.put(
                `http://localhost:3001/api/clients/${user.id}`,
                {
                    "Mail_client": inputValueMail,
                    "Telephone_client": inputValueTelephone,
                    "Adresse_client": inputValueAdresse,
                }
            );
            /*console.log(`http://localhost:3001/api/client/${user.id}`)*/
            console.log("Réponse du serveur :", response.data);

            // On met à jour les infos avec les nouvelles données
            setInfos(response.data);

        } catch (error) {
            console.error("Erreur de modification du profil", error);
        }
    };

    const handleInfoAdresse = () => {
        console.log("Valeur de l'inputAdresse :", inputValueAdresse);

    };

    useEffect(() => {
        /*console.log(user)*/
        if (!user) {
            setError("Utilisateur non authentifié");
            setLoading(false);
            return; // Si user est null, on arrête l'exécution
        }

        const fetchInfos = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/clients/${user.id}`);
                /*console.log(`http://localhost:3001/api/client/${user.id}`)*/
                setInfos(response.data);
                // on met à jour les inputs après avoir récupéré les infos
                setInputValueMail(response.data.Mail_client || "");
                setInputValueTelephone(response.data.Telephone_client || "");
                setInputValueAdresse(response.data.Adresse_client || "");
            } catch (error) {
                console.error("Erreur de chargement du profil", error);
            }
        };

        void fetchInfos();
    }, [user.id]);

    /*console.log(infos);*/
    /*console.log(inputValueMail);
    console.log(inputValueTelephone);
    console.log(inputValueAdresse);*/


    return (
        <div className={"profil-details"}>
            {/* image */}
            <h3>Bonjour {infos.Prenom_client} {infos.Nom_client}</h3>
            <p>E-mail : {infos.Mail_client}</p>
            <button onClick={handleInfoMail}>Modifier</button>
            <input type="email" value={inputValueMail} onChange={handleInputChangeMail} placeholder={"nouvel email"}/>
            <p>Téléphone : {infos.Telephone_client}</p>
            <button onClick={handleInfoTelephone}>Modifier</button>
            <input type="text" value={inputValueTelephone} onChange={handleInputChangeTelephone} placeholder={"nouveau téléphone"}/>
            <p>Adresse : {infos.Adresse_client}</p>
            <button onClick={handleInfoAdresse}>Modifier</button>
            <input type="text" value={inputValueAdresse} onChange={handleInputChangeAdresse} placeholder={"nouvelle adresse"}/>
            <Link to={`/`} className={"details-btn"}>
                Retour à l'accueil
            </Link>
        </div>
    );
}

export default Profil;