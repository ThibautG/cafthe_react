import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Registration(props) {
    const navigate = useNavigate();// la navigation

    /*
* Route : inscription d'un client
* POST /api/register
* Exemple : JSON
* {
* "Nom_client" : "Dupont",
* "Prenom_client" : "Jean",
* "Date_inscription_client": "2025-02-13",
* "Mail_client" : "jean.dupont@email.com",
* "Telephone_client": "0793625147",
* "Adresse_client": "13 Rue Des Roses, Nice, 06004",
* "Mdp_client" : "monMotDePasse"
* }
* */
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [adresse, setAdresse] = useState("");
    const [mdp, setMdp] = useState("");

    const [errorMsg, setErrorMsg] = useState("");

    // Récupérer la date du jour de l'inscription
    const today = new Date();
    const todayString = today.toISOString();
    const currentDate = todayString.split('T')[0];


    const handleSubmit = async (e) => { // fonction asynchrone car on va aller chercher les données dans l'API
        e.preventDefault();
        setErrorMsg("");

        try {
            const response = await axios.post("http://localhost:3001/api/register",
                {
                    "Nom_client" : nom,
                    "Prenom_client" : prenom,
                    "Date_inscription_client": currentDate,
                    "Mail_client" : email,
                    "Telephone_client": phone,
                    "Adresse_client": adresse,
                    "Mdp_client" : mdp,
                },
            );
            console.log(response.data);


            // redirection du client vers une page
            alert("Inscription réussie. Veuillez vous connecter.")
            navigate("/login");
        } catch (error) {
            console.error("Erreur lors de l'inscription : ", error);
            if (error.response.data.message) {
                setErrorMsg(error.response.data.message);
            } else {
                setErrorMsg("Erreur");
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul className={"login-list"}>
                    <li>
                        <label htmlFor="email">E-mail : </label>
                        <input type="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               id="email"
                               required
                               name="mail"/>
                    </li>
                    <li>
                        <label htmlFor="password">Mot de passe : </label>
                        <input type="password"
                               value={mdp}
                               onChange={(e) => setMdp(e.target.value)}
                               id="password"
                               required
                               name="password"/>
                    </li>
                    {errorMsg && (
                        <div>{errorMsg}</div> // structure d'affichage conditionnel
                    )}
                    <li className="button">
                        <button type="submit">Connexion</button>
                        <button><Link to={`/register`} className={"details-btn"}>S'inscrire</Link></button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default Registration;