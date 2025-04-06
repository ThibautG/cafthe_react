import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Registration(props) {
    const navigate = useNavigate();// la navigation

    /*
* Test
* Etienne
* etienn.test@email.com
* 0678910112
* 56 Rue Des Tests, Paris, 75015
* monMotDePasse
* */
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
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
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/register`,
                {
                    "Nom_client" : nom,
                    "Prenom_client" : prenom,
                    "Date_inscription_client": currentDate,
                    "Mail_client" : email,
                    "Telephone_client": tel,
                    "Adresse_client": adresse,
                    "Mdp_client" : mdp,
                },
            );
            // redirection du client vers page login
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
        <section className={"section-register"}>
            <form onSubmit={handleSubmit}>
                <ul className={"register-list"}>
                    <li>
                        <label htmlFor={"nom"}>Nom : </label>
                        <input type={"text"}
                               value={nom}
                               onChange={(e) => setNom(e.target.value)}
                               id={"nom"}
                               required
                               name={"nom"}/>
                    </li>
                    <li>
                        <label htmlFor={"prenom"}>Prénom : </label>
                        <input type={"text"}
                               value={prenom}
                               onChange={(e) => setPrenom(e.target.value)}
                               id={"prenom"}
                               required
                               name={"prenom"}/>
                    </li>
                    <li>
                        <label htmlFor={"email"}>E-mail : </label>
                        <input type={"email"}
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               id={"email"}
                               required
                               name={"mail"}/>
                    </li>
                    <li>
                        <label htmlFor={"tel"}>Téléphone : </label>
                        <input type={"tel"}
                               value={tel}
                               onChange={(e) => setTel(e.target.value)}
                               id={"tel"}
                               required
                               name={"tel"}/>
                    </li>
                    <li>
                        <label htmlFor={"adresse"}>Adresse : </label>
                        <input type={"text"}
                               value={adresse}
                               onChange={(e) => setAdresse(e.target.value)}
                               id={"adresse"}
                               required
                               name={"adresse"}/>
                    </li>
                    <li>
                        <label htmlFor={"password"}>Mot de passe : </label>
                        <input type={"password"}
                               value={mdp}
                               onChange={(e) => setMdp(e.target.value)}
                               id={"password"}
                               required
                               name={"password"}/>
                    </li>
                    {errorMsg && (
                        <div>{errorMsg}</div>
                    )}
                    <li className={"register-button"}>
                        <button type={"submit"}>Valider l'inscription</button>
                    </li>
                </ul>
            </form>
        </section>
    );
}

export default Registration;