import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";


function Profil(props) {
    const user = JSON.parse(localStorage.getItem('user'));

    const [infos, setInfos] = useState({}); // pour récupérer les infos du client afin d'afficher
    const [loading, setLoading] = useState(true); // Pour savoir si les données sont en cours de chargement
    const [error, setError] = useState(null);

    // on récupère les 3 champs input
    const [inputValueMail, setInputValueMail] = useState(infos.Mail_client || "");
    const [inputValueTelephone, setInputValueTelephone] = useState(infos.Telephone_client || "");
    const [inputValueAdresse, setInputValueAdresse] = useState(infos.Adresse_client || "");

    // on récupère les champs input pour changer le mot de passe
    const [inputValueOldPassword, setInputValueOldPassword] = useState("");
    const [inputValueNewPassword, setInputValueNewPassword] = useState("");

    // un state pour montrer ou cacher le formulaire
    const [showForm, setShowForm] = useState(false);

    // un state pour afficher ou non l'input de modification du mdp
    const [showPassword, setShowPassword] = useState(false);

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


    // fonction pour le onSubmit du bouton du formulaire
    const handleInfo = async () => {
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

    // fonction pour le onSubmit de modification du password
    const handlePassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `http://localhost:3001/api/login/${user.id}`,
                {
                    "oldMdp": inputValueOldPassword,
                    "newMdp": inputValueNewPassword,
                }
            );

            console.log("Réponse du serveur :", response.data);
            window.location.reload();
            alert("Mot de passe modifié");

        } catch (error) {
            console.error("Erreur de modification du password", error);
            alert("Erreur lors de la modification du mot de passe !")
        }
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
        <section className={"profil-details"}>
            {/* image */}
            <h3>Bonjour {infos.Prenom_client} {infos.Nom_client}</h3>
            <p>E-mail : {infos.Mail_client}</p>
            <p>Téléphone : {infos.Telephone_client}</p>
            <p>Adresse : {infos.Adresse_client}</p>

            <div>
                <button onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Annuler" : "Modifier mes informations"}
                </button>

                {showForm && (
                    <form onSubmit={handleInfo}>
                        <input type="email" value={inputValueMail} onChange={(e) => setInputValueMail(e.target.value)} />
                        <input type="text" value={inputValueTelephone} onChange={(e) => setInputValueTelephone(e.target.value)} />
                        <input type="text" value={inputValueAdresse} onChange={(e) => setInputValueAdresse(e.target.value)} />
                        <button type={"submit"}>Valider</button>
                    </form>
                )}
            </div>

            <div>
                <button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Annuler" : "Changer le mot de passe"}
                </button>

                {showPassword && (
                    <form onSubmit={handlePassword}>
                        <input type="password" placeholder={"ANCIEN mot de passe"} onChange={(e) => setInputValueOldPassword(e.target.value)} />
                        <input type="password" placeholder={"NOUVEAU mot de passe"} onChange={(e) => setInputValueNewPassword(e.target.value)} />
                        <button type={"submit"}>Valider</button>
                    </form>
                )}
            </div>

            <Link to={`/`} className={"details-btn"}>
                Retour à l'accueil
            </Link>

            <Link to={`/commandes/clients/${user.id}`} className={"details-btn"}>
                Voir les commandes
            </Link>
        </section>
    );
}

export default Profil;