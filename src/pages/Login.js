import React, {useState, useContext} from 'react';
import "../styles/Login.css"
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const { login } = useContext(AuthContext); // fonction login venant du contexte
    const navigate = useNavigate(); // la navigation

    const [email, setEmail] = useState("");
    const [mdp, setMdp] = useState("");
    const [errorMsg, setErrorMsg] = useState("");


    const handleSubmit = async (e) => { // fonction asynchrone car on va aller chercher les données dans l'API
        e.preventDefault();
        setErrorMsg("");

        try {
            const response = await axios.post("http://localhost:3001/api/login",
                    {
                        "Mail_client": email,
                        "Mdp_client": mdp,
                    },
            );
            console.log(response.data);

            const {token, client} = response.data;

            // On met à jour contexte d'authentification
            login(token, client);

            // redirection du client vers une page
            navigate("/");
        } catch (error) {
            console.error("Erreur lors de la connexion : ", error);
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
                               name="user_mail"/>
                    </li>
                    <li>
                        <label htmlFor="password">Mot de passe : </label>
                        <input type="password"
                               value={mdp}
                               onChange={(e) => setMdp(e.target.value)}
                               id="password"
                               required
                               name="user_password"/>
                    </li>
                    {errorMsg && (
                        <div>{errorMsg}</div> // structure d'affichage conditionnel
                    )}
                    <li className="button">
                        <button type="submit">Connexion</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default Login;